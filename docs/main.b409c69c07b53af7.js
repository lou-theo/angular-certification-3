'use strict';
(self.webpackChunkng_cert_nba = self.webpackChunkng_cert_nba || []).push([
  [179],
  {
    3666: (st, De, R) => {
      function w(V, x) {
        if (x.length < V)
          throw new TypeError(V + ' argument' + (V > 1 ? 's' : '') + ' required, but only ' + x.length + ' present');
      }
      function d(V) {
        return (d =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (T) {
                return typeof T;
              }
            : function (T) {
                return T && 'function' == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype
                  ? 'symbol'
                  : typeof T;
              })(V);
      }
      function ee(V) {
        return (ee =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (T) {
                return typeof T;
              }
            : function (T) {
                return T && 'function' == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype
                  ? 'symbol'
                  : typeof T;
              })(V);
      }
      function te(V) {
        w(1, arguments);
        var x = Object.prototype.toString.call(V);
        return V instanceof Date || ('object' === ee(V) && '[object Date]' === x)
          ? new Date(V.getTime())
          : 'number' == typeof V || '[object Number]' === x
          ? new Date(V)
          : (('string' == typeof V || '[object String]' === x) &&
              typeof console < 'u' &&
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function _e(V) {
        if (null === V || !0 === V || !1 === V) return NaN;
        var x = Number(V);
        return isNaN(x) ? x : x < 0 ? Math.ceil(x) : Math.floor(x);
      }
      R.d(De, { J: () => Er });
      var he = 864e5;
      function Ce(V) {
        w(1, arguments);
        var T = te(V),
          N = T.getUTCDay(),
          U = (N < 1 ? 7 : 0) + N - 1;
        return T.setUTCDate(T.getUTCDate() - U), T.setUTCHours(0, 0, 0, 0), T;
      }
      function qe(V) {
        w(1, arguments);
        var x = te(V),
          T = x.getUTCFullYear(),
          N = new Date(0);
        N.setUTCFullYear(T + 1, 0, 4), N.setUTCHours(0, 0, 0, 0);
        var U = Ce(N),
          ie = new Date(0);
        ie.setUTCFullYear(T, 0, 4), ie.setUTCHours(0, 0, 0, 0);
        var Pe = Ce(ie);
        return x.getTime() >= U.getTime() ? T + 1 : x.getTime() >= Pe.getTime() ? T : T - 1;
      }
      var xe = 6048e5;
      var Xe = {};
      function Ze() {
        return Xe;
      }
      function we(V, x) {
        var T, N, U, ie, Pe, xt, Yt, St;
        w(1, arguments);
        var it = Ze(),
          vt = _e(
            null !==
              (T =
                null !==
                  (N =
                    null !==
                      (U =
                        null !== (ie = x?.weekStartsOn) && void 0 !== ie
                          ? ie
                          : null == x ||
                            null === (Pe = x.locale) ||
                            void 0 === Pe ||
                            null === (xt = Pe.options) ||
                            void 0 === xt
                          ? void 0
                          : xt.weekStartsOn) && void 0 !== U
                      ? U
                      : it.weekStartsOn) && void 0 !== N
                  ? N
                  : null === (Yt = it.locale) || void 0 === Yt || null === (St = Yt.options) || void 0 === St
                  ? void 0
                  : St.weekStartsOn) && void 0 !== T
              ? T
              : 0,
          );
        if (!(vt >= 0 && vt <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
        var Nt = te(V),
          Qt = Nt.getUTCDay(),
          $t = (Qt < vt ? 7 : 0) + Qt - vt;
        return Nt.setUTCDate(Nt.getUTCDate() - $t), Nt.setUTCHours(0, 0, 0, 0), Nt;
      }
      function ye(V, x) {
        var T, N, U, ie, Pe, xt, Yt, St;
        w(1, arguments);
        var it = te(V),
          vt = it.getUTCFullYear(),
          Nt = Ze(),
          Qt = _e(
            null !==
              (T =
                null !==
                  (N =
                    null !==
                      (U =
                        null !== (ie = x?.firstWeekContainsDate) && void 0 !== ie
                          ? ie
                          : null == x ||
                            null === (Pe = x.locale) ||
                            void 0 === Pe ||
                            null === (xt = Pe.options) ||
                            void 0 === xt
                          ? void 0
                          : xt.firstWeekContainsDate) && void 0 !== U
                      ? U
                      : Nt.firstWeekContainsDate) && void 0 !== N
                  ? N
                  : null === (Yt = Nt.locale) || void 0 === Yt || null === (St = Yt.options) || void 0 === St
                  ? void 0
                  : St.firstWeekContainsDate) && void 0 !== T
              ? T
              : 1,
          );
        if (!(Qt >= 1 && Qt <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
        var $t = new Date(0);
        $t.setUTCFullYear(vt + 1, 0, Qt), $t.setUTCHours(0, 0, 0, 0);
        var Gn = we($t, x),
          zn = new Date(0);
        zn.setUTCFullYear(vt, 0, Qt), zn.setUTCHours(0, 0, 0, 0);
        var bn = we(zn, x);
        return it.getTime() >= Gn.getTime() ? vt + 1 : it.getTime() >= bn.getTime() ? vt : vt - 1;
      }
      var Ke = 6048e5;
      function q(V, x) {
        for (var T = V < 0 ? '-' : '', N = Math.abs(V).toString(); N.length < x; ) N = '0' + N;
        return T + N;
      }
      const Q_y = function (x, T) {
          var N = x.getUTCFullYear(),
            U = N > 0 ? N : 1 - N;
          return q('yy' === T ? U % 100 : U, T.length);
        },
        Q_M = function (x, T) {
          var N = x.getUTCMonth();
          return 'M' === T ? String(N + 1) : q(N + 1, 2);
        },
        Q_d = function (x, T) {
          return q(x.getUTCDate(), T.length);
        },
        Q_h = function (x, T) {
          return q(x.getUTCHours() % 12 || 12, T.length);
        },
        Q_H = function (x, T) {
          return q(x.getUTCHours(), T.length);
        },
        Q_m = function (x, T) {
          return q(x.getUTCMinutes(), T.length);
        },
        Q_s = function (x, T) {
          return q(x.getUTCSeconds(), T.length);
        },
        Q_S = function (x, T) {
          var N = T.length,
            U = x.getUTCMilliseconds();
          return q(Math.floor(U * Math.pow(10, N - 3)), T.length);
        };
      function dt(V, x) {
        var T = V > 0 ? '-' : '+',
          N = Math.abs(V),
          U = Math.floor(N / 60),
          ie = N % 60;
        if (0 === ie) return T + String(U);
        var Pe = x || '';
        return T + String(U) + Pe + q(ie, 2);
      }
      function Ie(V, x) {
        return V % 60 == 0 ? (V > 0 ? '-' : '+') + q(Math.abs(V) / 60, 2) : W(V, x);
      }
      function W(V, x) {
        var T = x || '',
          N = V > 0 ? '-' : '+',
          U = Math.abs(V);
        return N + q(Math.floor(U / 60), 2) + T + q(U % 60, 2);
      }
      const Z = {
        G: function (x, T, N) {
          var U = x.getUTCFullYear() > 0 ? 1 : 0;
          switch (T) {
            case 'G':
            case 'GG':
            case 'GGG':
              return N.era(U, { width: 'abbreviated' });
            case 'GGGGG':
              return N.era(U, { width: 'narrow' });
            default:
              return N.era(U, { width: 'wide' });
          }
        },
        y: function (x, T, N) {
          if ('yo' === T) {
            var U = x.getUTCFullYear();
            return N.ordinalNumber(U > 0 ? U : 1 - U, { unit: 'year' });
          }
          return Q_y(x, T);
        },
        Y: function (x, T, N, U) {
          var ie = ye(x, U),
            Pe = ie > 0 ? ie : 1 - ie;
          return 'YY' === T ? q(Pe % 100, 2) : 'Yo' === T ? N.ordinalNumber(Pe, { unit: 'year' }) : q(Pe, T.length);
        },
        R: function (x, T) {
          return q(qe(x), T.length);
        },
        u: function (x, T) {
          return q(x.getUTCFullYear(), T.length);
        },
        Q: function (x, T, N) {
          var U = Math.ceil((x.getUTCMonth() + 1) / 3);
          switch (T) {
            case 'Q':
              return String(U);
            case 'QQ':
              return q(U, 2);
            case 'Qo':
              return N.ordinalNumber(U, { unit: 'quarter' });
            case 'QQQ':
              return N.quarter(U, { width: 'abbreviated', context: 'formatting' });
            case 'QQQQQ':
              return N.quarter(U, { width: 'narrow', context: 'formatting' });
            default:
              return N.quarter(U, { width: 'wide', context: 'formatting' });
          }
        },
        q: function (x, T, N) {
          var U = Math.ceil((x.getUTCMonth() + 1) / 3);
          switch (T) {
            case 'q':
              return String(U);
            case 'qq':
              return q(U, 2);
            case 'qo':
              return N.ordinalNumber(U, { unit: 'quarter' });
            case 'qqq':
              return N.quarter(U, { width: 'abbreviated', context: 'standalone' });
            case 'qqqqq':
              return N.quarter(U, { width: 'narrow', context: 'standalone' });
            default:
              return N.quarter(U, { width: 'wide', context: 'standalone' });
          }
        },
        M: function (x, T, N) {
          var U = x.getUTCMonth();
          switch (T) {
            case 'M':
            case 'MM':
              return Q_M(x, T);
            case 'Mo':
              return N.ordinalNumber(U + 1, { unit: 'month' });
            case 'MMM':
              return N.month(U, { width: 'abbreviated', context: 'formatting' });
            case 'MMMMM':
              return N.month(U, { width: 'narrow', context: 'formatting' });
            default:
              return N.month(U, { width: 'wide', context: 'formatting' });
          }
        },
        L: function (x, T, N) {
          var U = x.getUTCMonth();
          switch (T) {
            case 'L':
              return String(U + 1);
            case 'LL':
              return q(U + 1, 2);
            case 'Lo':
              return N.ordinalNumber(U + 1, { unit: 'month' });
            case 'LLL':
              return N.month(U, { width: 'abbreviated', context: 'standalone' });
            case 'LLLLL':
              return N.month(U, { width: 'narrow', context: 'standalone' });
            default:
              return N.month(U, { width: 'wide', context: 'standalone' });
          }
        },
        w: function (x, T, N, U) {
          var ie = (function pt(V, x) {
            w(1, arguments);
            var T = te(V),
              N =
                we(T, x).getTime() -
                (function Me(V, x) {
                  var T, N, U, ie, Pe, xt, Yt, St;
                  w(1, arguments);
                  var it = Ze(),
                    vt = _e(
                      null !==
                        (T =
                          null !==
                            (N =
                              null !==
                                (U =
                                  null !== (ie = x?.firstWeekContainsDate) && void 0 !== ie
                                    ? ie
                                    : null == x ||
                                      null === (Pe = x.locale) ||
                                      void 0 === Pe ||
                                      null === (xt = Pe.options) ||
                                      void 0 === xt
                                    ? void 0
                                    : xt.firstWeekContainsDate) && void 0 !== U
                                ? U
                                : it.firstWeekContainsDate) && void 0 !== N
                            ? N
                            : null === (Yt = it.locale) || void 0 === Yt || null === (St = Yt.options) || void 0 === St
                            ? void 0
                            : St.firstWeekContainsDate) && void 0 !== T
                        ? T
                        : 1,
                    ),
                    Nt = ye(V, x),
                    Qt = new Date(0);
                  return Qt.setUTCFullYear(Nt, 0, vt), Qt.setUTCHours(0, 0, 0, 0), we(Qt, x);
                })(T, x).getTime();
            return Math.round(N / Ke) + 1;
          })(x, U);
          return 'wo' === T ? N.ordinalNumber(ie, { unit: 'week' }) : q(ie, T.length);
        },
        I: function (x, T, N) {
          var U = (function je(V) {
            w(1, arguments);
            var x = te(V),
              T =
                Ce(x).getTime() -
                (function se(V) {
                  w(1, arguments);
                  var x = qe(V),
                    T = new Date(0);
                  return T.setUTCFullYear(x, 0, 4), T.setUTCHours(0, 0, 0, 0), Ce(T);
                })(x).getTime();
            return Math.round(T / xe) + 1;
          })(x);
          return 'Io' === T ? N.ordinalNumber(U, { unit: 'week' }) : q(U, T.length);
        },
        d: function (x, T, N) {
          return 'do' === T ? N.ordinalNumber(x.getUTCDate(), { unit: 'date' }) : Q_d(x, T);
        },
        D: function (x, T, N) {
          var U = (function oe(V) {
            w(1, arguments);
            var x = te(V),
              T = x.getTime();
            x.setUTCMonth(0, 1), x.setUTCHours(0, 0, 0, 0);
            var N = x.getTime();
            return Math.floor((T - N) / he) + 1;
          })(x);
          return 'Do' === T ? N.ordinalNumber(U, { unit: 'dayOfYear' }) : q(U, T.length);
        },
        E: function (x, T, N) {
          var U = x.getUTCDay();
          switch (T) {
            case 'E':
            case 'EE':
            case 'EEE':
              return N.day(U, { width: 'abbreviated', context: 'formatting' });
            case 'EEEEE':
              return N.day(U, { width: 'narrow', context: 'formatting' });
            case 'EEEEEE':
              return N.day(U, { width: 'short', context: 'formatting' });
            default:
              return N.day(U, { width: 'wide', context: 'formatting' });
          }
        },
        e: function (x, T, N, U) {
          var ie = x.getUTCDay(),
            Pe = (ie - U.weekStartsOn + 8) % 7 || 7;
          switch (T) {
            case 'e':
              return String(Pe);
            case 'ee':
              return q(Pe, 2);
            case 'eo':
              return N.ordinalNumber(Pe, { unit: 'day' });
            case 'eee':
              return N.day(ie, { width: 'abbreviated', context: 'formatting' });
            case 'eeeee':
              return N.day(ie, { width: 'narrow', context: 'formatting' });
            case 'eeeeee':
              return N.day(ie, { width: 'short', context: 'formatting' });
            default:
              return N.day(ie, { width: 'wide', context: 'formatting' });
          }
        },
        c: function (x, T, N, U) {
          var ie = x.getUTCDay(),
            Pe = (ie - U.weekStartsOn + 8) % 7 || 7;
          switch (T) {
            case 'c':
              return String(Pe);
            case 'cc':
              return q(Pe, T.length);
            case 'co':
              return N.ordinalNumber(Pe, { unit: 'day' });
            case 'ccc':
              return N.day(ie, { width: 'abbreviated', context: 'standalone' });
            case 'ccccc':
              return N.day(ie, { width: 'narrow', context: 'standalone' });
            case 'cccccc':
              return N.day(ie, { width: 'short', context: 'standalone' });
            default:
              return N.day(ie, { width: 'wide', context: 'standalone' });
          }
        },
        i: function (x, T, N) {
          var U = x.getUTCDay(),
            ie = 0 === U ? 7 : U;
          switch (T) {
            case 'i':
              return String(ie);
            case 'ii':
              return q(ie, T.length);
            case 'io':
              return N.ordinalNumber(ie, { unit: 'day' });
            case 'iii':
              return N.day(U, { width: 'abbreviated', context: 'formatting' });
            case 'iiiii':
              return N.day(U, { width: 'narrow', context: 'formatting' });
            case 'iiiiii':
              return N.day(U, { width: 'short', context: 'formatting' });
            default:
              return N.day(U, { width: 'wide', context: 'formatting' });
          }
        },
        a: function (x, T, N) {
          var ie = x.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
          switch (T) {
            case 'a':
            case 'aa':
              return N.dayPeriod(ie, { width: 'abbreviated', context: 'formatting' });
            case 'aaa':
              return N.dayPeriod(ie, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
            case 'aaaaa':
              return N.dayPeriod(ie, { width: 'narrow', context: 'formatting' });
            default:
              return N.dayPeriod(ie, { width: 'wide', context: 'formatting' });
          }
        },
        b: function (x, T, N) {
          var ie,
            U = x.getUTCHours();
          switch (((ie = 12 === U ? 'noon' : 0 === U ? 'midnight' : U / 12 >= 1 ? 'pm' : 'am'), T)) {
            case 'b':
            case 'bb':
              return N.dayPeriod(ie, { width: 'abbreviated', context: 'formatting' });
            case 'bbb':
              return N.dayPeriod(ie, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
            case 'bbbbb':
              return N.dayPeriod(ie, { width: 'narrow', context: 'formatting' });
            default:
              return N.dayPeriod(ie, { width: 'wide', context: 'formatting' });
          }
        },
        B: function (x, T, N) {
          var ie,
            U = x.getUTCHours();
          switch (((ie = U >= 17 ? 'evening' : U >= 12 ? 'afternoon' : U >= 4 ? 'morning' : 'night'), T)) {
            case 'B':
            case 'BB':
            case 'BBB':
              return N.dayPeriod(ie, { width: 'abbreviated', context: 'formatting' });
            case 'BBBBB':
              return N.dayPeriod(ie, { width: 'narrow', context: 'formatting' });
            default:
              return N.dayPeriod(ie, { width: 'wide', context: 'formatting' });
          }
        },
        h: function (x, T, N) {
          if ('ho' === T) {
            var U = x.getUTCHours() % 12;
            return 0 === U && (U = 12), N.ordinalNumber(U, { unit: 'hour' });
          }
          return Q_h(x, T);
        },
        H: function (x, T, N) {
          return 'Ho' === T ? N.ordinalNumber(x.getUTCHours(), { unit: 'hour' }) : Q_H(x, T);
        },
        K: function (x, T, N) {
          var U = x.getUTCHours() % 12;
          return 'Ko' === T ? N.ordinalNumber(U, { unit: 'hour' }) : q(U, T.length);
        },
        k: function (x, T, N) {
          var U = x.getUTCHours();
          return 0 === U && (U = 24), 'ko' === T ? N.ordinalNumber(U, { unit: 'hour' }) : q(U, T.length);
        },
        m: function (x, T, N) {
          return 'mo' === T ? N.ordinalNumber(x.getUTCMinutes(), { unit: 'minute' }) : Q_m(x, T);
        },
        s: function (x, T, N) {
          return 'so' === T ? N.ordinalNumber(x.getUTCSeconds(), { unit: 'second' }) : Q_s(x, T);
        },
        S: function (x, T) {
          return Q_S(x, T);
        },
        X: function (x, T, N, U) {
          var Pe = (U._originalDate || x).getTimezoneOffset();
          if (0 === Pe) return 'Z';
          switch (T) {
            case 'X':
              return Ie(Pe);
            case 'XXXX':
            case 'XX':
              return W(Pe);
            default:
              return W(Pe, ':');
          }
        },
        x: function (x, T, N, U) {
          var Pe = (U._originalDate || x).getTimezoneOffset();
          switch (T) {
            case 'x':
              return Ie(Pe);
            case 'xxxx':
            case 'xx':
              return W(Pe);
            default:
              return W(Pe, ':');
          }
        },
        O: function (x, T, N, U) {
          var Pe = (U._originalDate || x).getTimezoneOffset();
          switch (T) {
            case 'O':
            case 'OO':
            case 'OOO':
              return 'GMT' + dt(Pe, ':');
            default:
              return 'GMT' + W(Pe, ':');
          }
        },
        z: function (x, T, N, U) {
          var Pe = (U._originalDate || x).getTimezoneOffset();
          switch (T) {
            case 'z':
            case 'zz':
            case 'zzz':
              return 'GMT' + dt(Pe, ':');
            default:
              return 'GMT' + W(Pe, ':');
          }
        },
        t: function (x, T, N, U) {
          return q(Math.floor((U._originalDate || x).getTime() / 1e3), T.length);
        },
        T: function (x, T, N, U) {
          return q((U._originalDate || x).getTime(), T.length);
        },
      };
      var le = function (x, T) {
          switch (x) {
            case 'P':
              return T.date({ width: 'short' });
            case 'PP':
              return T.date({ width: 'medium' });
            case 'PPP':
              return T.date({ width: 'long' });
            default:
              return T.date({ width: 'full' });
          }
        },
        pe = function (x, T) {
          switch (x) {
            case 'p':
              return T.time({ width: 'short' });
            case 'pp':
              return T.time({ width: 'medium' });
            case 'ppp':
              return T.time({ width: 'long' });
            default:
              return T.time({ width: 'full' });
          }
        };
      const Ue = {
        p: pe,
        P: function (x, T) {
          var Pe,
            N = x.match(/(P+)(p+)?/) || [],
            U = N[1],
            ie = N[2];
          if (!ie) return le(x, T);
          switch (U) {
            case 'P':
              Pe = T.dateTime({ width: 'short' });
              break;
            case 'PP':
              Pe = T.dateTime({ width: 'medium' });
              break;
            case 'PPP':
              Pe = T.dateTime({ width: 'long' });
              break;
            default:
              Pe = T.dateTime({ width: 'full' });
          }
          return Pe.replace('{{date}}', le(U, T)).replace('{{time}}', pe(ie, T));
        },
      };
      var Zt = ['D', 'DD'],
        Je = ['YY', 'YYYY'];
      function Rt(V, x, T) {
        if ('YYYY' === V)
          throw new RangeError(
            'Use `yyyy` instead of `YYYY` (in `'
              .concat(x, '`) for formatting years to the input `')
              .concat(T, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'),
          );
        if ('YY' === V)
          throw new RangeError(
            'Use `yy` instead of `YY` (in `'
              .concat(x, '`) for formatting years to the input `')
              .concat(T, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'),
          );
        if ('D' === V)
          throw new RangeError(
            'Use `d` instead of `D` (in `'
              .concat(x, '`) for formatting days of the month to the input `')
              .concat(T, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'),
          );
        if ('DD' === V)
          throw new RangeError(
            'Use `dd` instead of `DD` (in `'
              .concat(x, '`) for formatting days of the month to the input `')
              .concat(T, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'),
          );
      }
      var vn = {
        lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      };
      function Qe(V) {
        return function () {
          var x = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            T = x.width ? String(x.width) : V.defaultWidth;
          return V.formats[T] || V.formats[V.defaultWidth];
        };
      }
      var Cr = {
          date: Qe({
            formats: { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
            defaultWidth: 'full',
          }),
          time: Qe({
            formats: { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
            defaultWidth: 'full',
          }),
          dateTime: Qe({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: '{{date}}, {{time}}',
              short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
          }),
        },
        Tt = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        };
      function Tn(V) {
        return function (x, T) {
          var U;
          if ('formatting' === (null != T && T.context ? String(T.context) : 'standalone') && V.formattingValues) {
            var ie = V.defaultFormattingWidth || V.defaultWidth,
              Pe = null != T && T.width ? String(T.width) : ie;
            U = V.formattingValues[Pe] || V.formattingValues[ie];
          } else {
            var xt = V.defaultWidth,
              Yt = null != T && T.width ? String(T.width) : V.defaultWidth;
            U = V.values[Yt] || V.values[xt];
          }
          return U[V.argumentCallback ? V.argumentCallback(x) : x];
        };
      }
      function bt(V) {
        return function (x) {
          var T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            N = T.width,
            ie = x.match((N && V.matchPatterns[N]) || V.matchPatterns[V.defaultMatchWidth]);
          if (!ie) return null;
          var St,
            Pe = ie[0],
            xt = (N && V.parsePatterns[N]) || V.parsePatterns[V.defaultParseWidth],
            Yt = Array.isArray(xt)
              ? (function fn(V, x) {
                  for (var T = 0; T < V.length; T++) if (x(V[T])) return T;
                })(xt, function (vt) {
                  return vt.test(Pe);
                })
              : (function An(V, x) {
                  for (var T in V) if (V.hasOwnProperty(T) && x(V[T])) return T;
                })(xt, function (vt) {
                  return vt.test(Pe);
                });
          return (
            (St = V.valueCallback ? V.valueCallback(Yt) : Yt),
            { value: (St = T.valueCallback ? T.valueCallback(St) : St), rest: x.slice(Pe.length) }
          );
        };
      }
      const Vt = {
        code: 'en-US',
        formatDistance: function (x, T, N) {
          var U,
            ie = vn[x];
          return (
            (U = 'string' == typeof ie ? ie : 1 === T ? ie.one : ie.other.replace('{{count}}', T.toString())),
            null != N && N.addSuffix ? (N.comparison && N.comparison > 0 ? 'in ' + U : U + ' ago') : U
          );
        },
        formatLong: Cr,
        formatRelative: function (x, T, N, U) {
          return Tt[x];
        },
        localize: {
          ordinalNumber: function (x, T) {
            var N = Number(x),
              U = N % 100;
            if (U > 20 || U < 10)
              switch (U % 10) {
                case 1:
                  return N + 'st';
                case 2:
                  return N + 'nd';
                case 3:
                  return N + 'rd';
              }
            return N + 'th';
          },
          era: Tn({
            values: { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
            defaultWidth: 'wide',
          }),
          quarter: Tn({
            values: {
              narrow: ['1', '2', '3', '4'],
              abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
              wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
            },
            defaultWidth: 'wide',
            argumentCallback: function (x) {
              return x - 1;
            },
          }),
          month: Tn({
            values: {
              narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
              abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              wide: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ],
            },
            defaultWidth: 'wide',
          }),
          day: Tn({
            values: {
              narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
              short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
              abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            },
            defaultWidth: 'wide',
          }),
          dayPeriod: Tn({
            values: {
              narrow: {
                am: 'a',
                pm: 'p',
                midnight: 'mi',
                noon: 'n',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
              abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
              wide: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
            },
            defaultWidth: 'wide',
            formattingValues: {
              narrow: {
                am: 'a',
                pm: 'p',
                midnight: 'mi',
                noon: 'n',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
              abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
              wide: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
            },
            defaultFormattingWidth: 'wide',
          }),
        },
        match: {
          ordinalNumber: (function kt(V) {
            return function (x) {
              var T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                N = x.match(V.matchPattern);
              if (!N) return null;
              var U = N[0],
                ie = x.match(V.parsePattern);
              if (!ie) return null;
              var Pe = V.valueCallback ? V.valueCallback(ie[0]) : ie[0];
              return { value: (Pe = T.valueCallback ? T.valueCallback(Pe) : Pe), rest: x.slice(U.length) };
            };
          })({
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (x) {
              return parseInt(x, 10);
            },
          }),
          era: bt({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: 'any',
          }),
          quarter: bt({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: 'any',
            valueCallback: function (x) {
              return x + 1;
            },
          }),
          month: bt({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
            },
            defaultParseWidth: 'any',
          }),
          day: bt({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: 'any',
          }),
          dayPeriod: bt({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: 'any',
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: 'any',
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var yn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        z = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        L = /^'([^]*?)'?$/,
        A = /''/g,
        $ = /[a-zA-Z]/;
      function J(V, x, T) {
        var N, U, ie, Pe, xt, Yt, St, it, vt, Nt, Qt, $t, Gn, zn, bn, Wn, Le, ot;
        w(2, arguments);
        var Ut = String(x),
          jt = Ze(),
          cn = null !== (N = null !== (U = T?.locale) && void 0 !== U ? U : jt.locale) && void 0 !== N ? N : Vt,
          Xt = _e(
            null !==
              (ie =
                null !==
                  (Pe =
                    null !==
                      (xt =
                        null !== (Yt = T?.firstWeekContainsDate) && void 0 !== Yt
                          ? Yt
                          : null == T ||
                            null === (St = T.locale) ||
                            void 0 === St ||
                            null === (it = St.options) ||
                            void 0 === it
                          ? void 0
                          : it.firstWeekContainsDate) && void 0 !== xt
                      ? xt
                      : jt.firstWeekContainsDate) && void 0 !== Pe
                  ? Pe
                  : null === (vt = jt.locale) || void 0 === vt || null === (Nt = vt.options) || void 0 === Nt
                  ? void 0
                  : Nt.firstWeekContainsDate) && void 0 !== ie
              ? ie
              : 1,
          );
        if (!(Xt >= 1 && Xt <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
        var Yn = _e(
          null !==
            (Qt =
              null !==
                ($t =
                  null !==
                    (Gn =
                      null !== (zn = T?.weekStartsOn) && void 0 !== zn
                        ? zn
                        : null == T ||
                          null === (bn = T.locale) ||
                          void 0 === bn ||
                          null === (Wn = bn.options) ||
                          void 0 === Wn
                        ? void 0
                        : Wn.weekStartsOn) && void 0 !== Gn
                    ? Gn
                    : jt.weekStartsOn) && void 0 !== $t
                ? $t
                : null === (Le = jt.locale) || void 0 === Le || null === (ot = Le.options) || void 0 === ot
                ? void 0
                : ot.weekStartsOn) && void 0 !== Qt
            ? Qt
            : 0,
        );
        if (!(Yn >= 0 && Yn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
        if (!cn.localize) throw new RangeError('locale must contain localize property');
        if (!cn.formatLong) throw new RangeError('locale must contain formatLong property');
        var Gt = te(V);
        if (
          !(function Oe(V) {
            if (
              (w(1, arguments),
              !(function Y(V) {
                return (
                  w(1, arguments),
                  V instanceof Date || ('object' === d(V) && '[object Date]' === Object.prototype.toString.call(V))
                );
              })(V) && 'number' != typeof V)
            )
              return !1;
            var x = te(V);
            return !isNaN(Number(x));
          })(Gt)
        )
          throw new RangeError('Invalid time value');
        var jn = (function ft(V) {
            var x = new Date(
              Date.UTC(
                V.getFullYear(),
                V.getMonth(),
                V.getDate(),
                V.getHours(),
                V.getMinutes(),
                V.getSeconds(),
                V.getMilliseconds(),
              ),
            );
            return x.setUTCFullYear(V.getFullYear()), V.getTime() - x.getTime();
          })(Gt),
          br = (function Ae(V, x) {
            return (
              w(2, arguments),
              (function Ve(V, x) {
                w(2, arguments);
                var T = te(V).getTime(),
                  N = _e(x);
                return new Date(T + N);
              })(V, -_e(x))
            );
          })(Gt, jn),
          ht = { firstWeekContainsDate: Xt, weekStartsOn: Yn, locale: cn, _originalDate: Gt },
          Br = Ut.match(z)
            .map(function (an) {
              var on = an[0];
              return 'p' === on || 'P' === on ? (0, Ue[on])(an, cn.formatLong) : an;
            })
            .join('')
            .match(yn)
            .map(function (an) {
              if ("''" === an) return "'";
              var on = an[0];
              if ("'" === on)
                return (function Re(V) {
                  var x = V.match(L);
                  return x ? x[1].replace(A, "'") : V;
                })(an);
              var Qn = Z[on];
              if (Qn)
                return (
                  !(null != T && T.useAdditionalWeekYearTokens) &&
                    (function Dt(V) {
                      return -1 !== Je.indexOf(V);
                    })(an) &&
                    Rt(an, x, String(V)),
                  !(null != T && T.useAdditionalDayOfYearTokens) &&
                    (function wt(V) {
                      return -1 !== Zt.indexOf(V);
                    })(an) &&
                    Rt(an, x, String(V)),
                  Qn(br, an, cn.localize, ht)
                );
              if (on.match($))
                throw new RangeError('Format string contains an unescaped latin alphabet character `' + on + '`');
              return an;
            })
            .join('');
        return Br;
      }
      function _t(V, x) {
        return (
          w(2, arguments),
          (function He(V, x) {
            w(2, arguments);
            var T = te(V),
              N = _e(x);
            return isNaN(N) ? new Date(NaN) : (N && T.setDate(T.getDate() + N), T);
          })(V, -_e(x))
        );
      }
      var et = R(1135),
        On = R(9646),
        Dn = R(4004),
        io = R(8505),
        or = R(8256),
        Un = R(529);
      let Er = (() => {
        class V {
          constructor(T) {
            (this.http = T),
              (this.allTeams = []),
              (this.trackedTeams = []),
              (this.numberOfTrackingDays = new et.X(12)),
              (this.numberOfTrackingDays$ = this.numberOfTrackingDays.asObservable());
          }
          setNumberOfTrackingDays(T) {
            this.numberOfTrackingDays.next(T);
          }
          addTrackedTeam(T) {
            const N = this.allTeams.find((U) => U.id == Number(T));
            return !!N && (this.trackedTeams.push(N), !0);
          }
          removeTrackedTeam(T) {
            const N = this.trackedTeams.findIndex((U) => U.id == T.id);
            this.trackedTeams.splice(N, 1);
          }
          getTrackedTeams() {
            return this.trackedTeams;
          }
          getAllTeams() {
            return this.allTeams.length > 0
              ? (0, On.of)(this.allTeams)
              : this.http.get('teams?page=0').pipe(
                  (0, Dn.U)((T) => T.data),
                  (0, io.b)((T) => (this.allTeams = T)),
                );
          }
          getLastResults(T, N = this.numberOfTrackingDays.getValue()) {
            return this.http
              .get(`games?page=0${this.getDaysQueryString(N)}`, { params: { per_page: 12, 'team_ids[]': '' + T.id } })
              .pipe((0, Dn.U)((U) => U.data));
          }
          getStatsFromGames(T, N) {
            const U = { wins: 0, losses: 0, averagePointsScored: 0, averagePointsConceded: 0, lastGames: [] };
            return (
              T.forEach((ie) => {
                const Pe = this.getSingleGameStats(N, ie);
                (U.wins += Pe.wins),
                  (U.losses += Pe.losses),
                  (U.averagePointsScored += Pe.averagePointsScored),
                  (U.averagePointsConceded += Pe.averagePointsConceded),
                  U.lastGames.push(1 == Pe.wins ? 'W' : 'L');
              }),
              (U.averagePointsScored = Math.round(U.averagePointsScored / T.length)),
              (U.averagePointsConceded = Math.round(U.averagePointsConceded / T.length)),
              U
            );
          }
          getDaysQueryString(T = this.numberOfTrackingDays.getValue()) {
            let N = '';
            for (let U = 1; U < T; U++) {
              const ie = J(_t(new Date(), U), 'yyyy-MM-dd');
              N = N.concat('&dates[]=' + ie);
            }
            return N;
          }
          getSingleGameStats(T, N) {
            const U = { wins: 0, losses: 0, averagePointsScored: 0, averagePointsConceded: 0, lastGames: [] };
            return (
              N.home_team.id === T.id &&
                ((U.averagePointsScored = N.home_team_score),
                (U.averagePointsConceded = N.visitor_team_score),
                N.home_team_score > N.visitor_team_score ? (U.wins += 1) : (U.losses += 1)),
              N.visitor_team.id === T.id &&
                ((U.averagePointsScored = N.visitor_team_score),
                (U.averagePointsConceded = N.home_team_score),
                N.visitor_team_score > N.home_team_score ? (U.wins = 1) : (U.losses = 1)),
              U
            );
          }
        }
        return (
          (V.ɵfac = function (T) {
            return new (T || V)(or.LFG(Un.eN));
          }),
          (V.ɵprov = or.Yz7({ token: V, factory: V.ɵfac, providedIn: 'root' })),
          V
        );
      })();
    },
    2297: (st, De, R) => {
      var w = R(529),
        d = R(8256),
        Y = R(1481),
        ee = R(195);
      let te = (() => {
        class h {}
        return (
          (h.ɵfac = function (c) {
            return new (c || h)();
          }),
          (h.ɵcmp = d.Xpm({
            type: h,
            selectors: [['app-root']],
            standalone: !0,
            features: [d.jDz],
            decls: 4,
            vars: 0,
            consts: [[1, 'container']],
            template: function (c, E) {
              1 & c &&
                (d.TgZ(0, 'h1'),
                d._uU(1, 'NBA Score Tracking App'),
                d.qZA(),
                d.TgZ(2, 'div', 0),
                d._UZ(3, 'router-outlet'),
                d.qZA());
            },
            dependencies: [ee.lC],
          })),
          h
        );
      })();
      const Oe_production = !0,
        Oe_freeNbaApi = {
          rootUrl: 'https://free-nba.p.rapidapi.com',
          headers: {
            'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        };
      var Ve = R(6895),
        Ae = R(2076),
        he = R(9751),
        oe = R(4742),
        Ce = R(8421),
        qe = R(7669),
        se = R(5403),
        xe = R(3268),
        je = R(1810),
        Ze = R(4004);
      let Ot = (() => {
          class h {
            constructor(c, E) {
              (this._renderer = c), (this._elementRef = E), (this.onChange = (B) => {}), (this.onTouched = () => {});
            }
            setProperty(c, E) {
              this._renderer.setProperty(this._elementRef.nativeElement, c, E);
            }
            registerOnTouched(c) {
              this.onTouched = c;
            }
            registerOnChange(c) {
              this.onChange = c;
            }
            setDisabledState(c) {
              this.setProperty('disabled', c);
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.Y36(d.Qsj), d.Y36(d.SBq));
            }),
            (h.ɵdir = d.lG2({ type: h })),
            h
          );
        })(),
        we = (() => {
          class h extends Ot {}
          return (
            (h.ɵfac = (function () {
              let g;
              return function (E) {
                return (g || (g = d.n5z(h)))(E || h);
              };
            })()),
            (h.ɵdir = d.lG2({ type: h, features: [d.qOj] })),
            h
          );
        })();
      const ye = new d.OlP('NgValueAccessor'),
        pt = { provide: ye, useExisting: (0, d.Gpc)(() => Q), multi: !0 },
        de = new d.OlP('CompositionEventMode');
      let Q = (() => {
        class h extends Ot {
          constructor(c, E, B) {
            super(c, E),
              (this._compositionMode = B),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function q() {
                  const h = (0, Ve.q)() ? (0, Ve.q)().getUserAgent() : '';
                  return /android (\d+)/.test(h.toLowerCase());
                })());
          }
          writeValue(c) {
            this.setProperty('value', c ?? '');
          }
          _handleInput(c) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(c);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(c) {
            (this._composing = !1), this._compositionMode && this.onChange(c);
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)(d.Y36(d.Qsj), d.Y36(d.SBq), d.Y36(de, 8));
          }),
          (h.ɵdir = d.lG2({
            type: h,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (c, E) {
              1 & c &&
                d.NdJ('input', function (Ee) {
                  return E._handleInput(Ee.target.value);
                })('blur', function () {
                  return E.onTouched();
                })('compositionstart', function () {
                  return E._compositionStart();
                })('compositionend', function (Ee) {
                  return E._compositionEnd(Ee.target.value);
                });
            },
            features: [d._Bn([pt]), d.qOj],
          })),
          h
        );
      })();
      const Se = !1,
        Ie = new d.OlP('NgValidators'),
        W = new d.OlP('NgAsyncValidators');
      function Rt(h) {
        return null != h;
      }
      function vn(h) {
        const g = (0, d.QGY)(h) ? (0, Ae.D)(h) : h;
        if (Se && !(0, d.CqO)(g)) {
          let c = 'Expected async validator to return Promise or Observable.';
          throw (
            ('object' == typeof h &&
              (c += ' Are you using a synchronous validator where an async validator is expected?'),
            new d.vHH(-1101, c))
          );
        }
        return g;
      }
      function zt(h) {
        let g = {};
        return (
          h.forEach((c) => {
            g = null != c ? { ...g, ...c } : g;
          }),
          0 === Object.keys(g).length ? null : g
        );
      }
      function at(h, g) {
        return g.map((c) => c(h));
      }
      function ln(h) {
        return h.map((g) =>
          (function Qe(h) {
            return !h.validate;
          })(g)
            ? g
            : (c) => g.validate(c),
        );
      }
      function Ht(h) {
        return null != h
          ? (function pr(h) {
              if (!h) return null;
              const g = h.filter(Rt);
              return 0 == g.length
                ? null
                : function (c) {
                    return zt(at(c, g));
                  };
            })(ln(h))
          : null;
      }
      function tr(h) {
        return null != h
          ? (function Cr(h) {
              if (!h) return null;
              const g = h.filter(Rt);
              return 0 == g.length
                ? null
                : function (c) {
                    return (function Xe(...h) {
                      const g = (0, qe.jO)(h),
                        { args: c, keys: E } = (0, oe.D)(h),
                        B = new he.y((Ee) => {
                          const { length: Ye } = c;
                          if (!Ye) return void Ee.complete();
                          const sn = new Array(Ye);
                          let er = Ye,
                            Ar = Ye;
                          for (let pi = 0; pi < Ye; pi++) {
                            let Io = !1;
                            (0, Ce.Xf)(c[pi]).subscribe(
                              (0, se.x)(
                                Ee,
                                (ki) => {
                                  Io || ((Io = !0), Ar--), (sn[pi] = ki);
                                },
                                () => er--,
                                void 0,
                                () => {
                                  (!er || !Io) && (Ar || Ee.next(E ? (0, je.n)(E, sn) : sn), Ee.complete());
                                },
                              ),
                            );
                          }
                        });
                      return g ? B.pipe((0, xe.Z)(g)) : B;
                    })(at(c, g).map(vn)).pipe((0, Ze.U)(zt));
                  };
            })(ln(h))
          : null;
      }
      function Tt(h, g) {
        return null === h ? [g] : Array.isArray(h) ? [...h, g] : [h, g];
      }
      function Tn(h) {
        return h ? (Array.isArray(h) ? h : [h]) : [];
      }
      function gr(h, g) {
        return Array.isArray(h) ? h.includes(g) : h === g;
      }
      function qt(h, g) {
        const c = Tn(g);
        return (
          Tn(h).forEach((B) => {
            gr(c, B) || c.push(B);
          }),
          c
        );
      }
      function en(h, g) {
        return Tn(g).filter((c) => !gr(h, c));
      }
      class kn {
        constructor() {
          (this._rawValidators = []), (this._rawAsyncValidators = []), (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(g) {
          (this._rawValidators = g || []), (this._composedValidatorFn = Ht(this._rawValidators));
        }
        _setAsyncValidators(g) {
          (this._rawAsyncValidators = g || []), (this._composedAsyncValidatorFn = tr(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(g) {
          this._onDestroyCallbacks.push(g);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((g) => g()), (this._onDestroyCallbacks = []);
        }
        reset(g) {
          this.control && this.control.reset(g);
        }
        hasError(g, c) {
          return !!this.control && this.control.hasError(g, c);
        }
        getError(g, c) {
          return this.control ? this.control.getError(g, c) : null;
        }
      }
      class gt extends kn {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class ze extends kn {
        constructor() {
          super(...arguments), (this._parent = null), (this.name = null), (this.valueAccessor = null);
        }
      }
      class ne {
        constructor(g) {
          this._cd = g;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let bt = (() => {
        class h extends ne {
          constructor(c) {
            super(c);
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)(d.Y36(ze, 2));
          }),
          (h.ɵdir = d.lG2({
            type: h,
            selectors: [
              ['', 'formControlName', ''],
              ['', 'ngModel', ''],
              ['', 'formControl', ''],
            ],
            hostVars: 14,
            hostBindings: function (c, E) {
              2 & c &&
                d.ekj('ng-untouched', E.isUntouched)('ng-touched', E.isTouched)('ng-pristine', E.isPristine)(
                  'ng-dirty',
                  E.isDirty,
                )('ng-valid', E.isValid)('ng-invalid', E.isInvalid)('ng-pending', E.isPending);
            },
            features: [d.qOj],
          })),
          h
        );
      })();
      const Vt = 'VALID',
        yn = 'INVALID',
        z = 'PENDING',
        L = 'DISABLED';
      function He(h) {
        return null != h && !Array.isArray(h) && 'object' == typeof h;
      }
      class On {
        constructor(g, c) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(g),
            this._assignAsyncValidators(c);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(g) {
          this._rawValidators = this._composedValidatorFn = g;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(g) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = g;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Vt;
        }
        get invalid() {
          return this.status === yn;
        }
        get pending() {
          return this.status == z;
        }
        get disabled() {
          return this.status === L;
        }
        get enabled() {
          return this.status !== L;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(g) {
          this._assignValidators(g);
        }
        setAsyncValidators(g) {
          this._assignAsyncValidators(g);
        }
        addValidators(g) {
          this.setValidators(qt(g, this._rawValidators));
        }
        addAsyncValidators(g) {
          this.setAsyncValidators(qt(g, this._rawAsyncValidators));
        }
        removeValidators(g) {
          this.setValidators(en(g, this._rawValidators));
        }
        removeAsyncValidators(g) {
          this.setAsyncValidators(en(g, this._rawAsyncValidators));
        }
        hasValidator(g) {
          return gr(this._rawValidators, g);
        }
        hasAsyncValidator(g) {
          return gr(this._rawAsyncValidators, g);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(g = {}) {
          (this.touched = !0), this._parent && !g.onlySelf && this._parent.markAsTouched(g);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((g) => g.markAllAsTouched());
        }
        markAsUntouched(g = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((c) => {
              c.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !g.onlySelf && this._parent._updateTouched(g);
        }
        markAsDirty(g = {}) {
          (this.pristine = !1), this._parent && !g.onlySelf && this._parent.markAsDirty(g);
        }
        markAsPristine(g = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((c) => {
              c.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !g.onlySelf && this._parent._updatePristine(g);
        }
        markAsPending(g = {}) {
          (this.status = z),
            !1 !== g.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !g.onlySelf && this._parent.markAsPending(g);
        }
        disable(g = {}) {
          const c = this._parentMarkedDirty(g.onlySelf);
          (this.status = L),
            (this.errors = null),
            this._forEachChild((E) => {
              E.disable({ ...g, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== g.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...g, skipPristineCheck: c }),
            this._onDisabledChange.forEach((E) => E(!0));
        }
        enable(g = {}) {
          const c = this._parentMarkedDirty(g.onlySelf);
          (this.status = Vt),
            this._forEachChild((E) => {
              E.enable({ ...g, onlySelf: !0 });
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: g.emitEvent }),
            this._updateAncestors({ ...g, skipPristineCheck: c }),
            this._onDisabledChange.forEach((E) => E(!1));
        }
        _updateAncestors(g) {
          this._parent &&
            !g.onlySelf &&
            (this._parent.updateValueAndValidity(g),
            g.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(g) {
          this._parent = g;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(g = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Vt || this.status === z) && this._runAsyncValidator(g.emitEvent)),
            !1 !== g.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !g.onlySelf && this._parent.updateValueAndValidity(g);
        }
        _updateTreeValidity(g = { emitEvent: !0 }) {
          this._forEachChild((c) => c._updateTreeValidity(g)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: g.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? L : Vt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(g) {
          if (this.asyncValidator) {
            (this.status = z), (this._hasOwnPendingAsyncValidator = !0);
            const c = vn(this.asyncValidator(this));
            this._asyncValidationSubscription = c.subscribe((E) => {
              (this._hasOwnPendingAsyncValidator = !1), this.setErrors(E, { emitEvent: g });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(), (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(g, c = {}) {
          (this.errors = g), this._updateControlsErrors(!1 !== c.emitEvent);
        }
        get(g) {
          let c = g;
          return null == c || (Array.isArray(c) || (c = c.split('.')), 0 === c.length)
            ? null
            : c.reduce((E, B) => E && E._find(B), this);
        }
        getError(g, c) {
          const E = c ? this.get(c) : this;
          return E && E.errors ? E.errors[g] : null;
        }
        hasError(g, c) {
          return !!this.getError(g, c);
        }
        get root() {
          let g = this;
          for (; g._parent; ) g = g._parent;
          return g;
        }
        _updateControlsErrors(g) {
          (this.status = this._calculateStatus()),
            g && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(g);
        }
        _initObservables() {
          (this.valueChanges = new d.vpe()), (this.statusChanges = new d.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? L
            : this.errors
            ? yn
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(z)
            ? z
            : this._anyControlsHaveStatus(yn)
            ? yn
            : Vt;
        }
        _anyControlsHaveStatus(g) {
          return this._anyControls((c) => c.status === g);
        }
        _anyControlsDirty() {
          return this._anyControls((g) => g.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((g) => g.touched);
        }
        _updatePristine(g = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !g.onlySelf && this._parent._updatePristine(g);
        }
        _updateTouched(g = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !g.onlySelf && this._parent._updateTouched(g);
        }
        _registerOnCollectionChange(g) {
          this._onCollectionChange = g;
        }
        _setUpdateStrategy(g) {
          He(g) && null != g.updateOn && (this._updateOn = g.updateOn);
        }
        _parentMarkedDirty(g) {
          return !g && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
        }
        _find(g) {
          return null;
        }
        _assignValidators(g) {
          (this._rawValidators = Array.isArray(g) ? g.slice() : g),
            (this._composedValidatorFn = (function $(h) {
              return Array.isArray(h) ? Ht(h) : h || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(g) {
          (this._rawAsyncValidators = Array.isArray(g) ? g.slice() : g),
            (this._composedAsyncValidatorFn = (function Re(h) {
              return Array.isArray(h) ? tr(h) : h || null;
            })(this._rawAsyncValidators));
        }
      }
      const V = new d.OlP('CallSetDisabledState', { providedIn: 'root', factory: () => x }),
        x = 'always';
      function N(h, g, c = x) {
        (function xt(h, g) {
          const c = (function Ln(h) {
            return h._rawValidators;
          })(h);
          null !== g.validator ? h.setValidators(Tt(c, g.validator)) : 'function' == typeof c && h.setValidators([c]);
          const E = (function nr(h) {
            return h._rawAsyncValidators;
          })(h);
          null !== g.asyncValidator
            ? h.setAsyncValidators(Tt(E, g.asyncValidator))
            : 'function' == typeof E && h.setAsyncValidators([E]);
          const B = () => h.updateValueAndValidity();
          ie(g._rawValidators, B), ie(g._rawAsyncValidators, B);
        })(h, g),
          g.valueAccessor.writeValue(h.value),
          (h.disabled || 'always' === c) && g.valueAccessor.setDisabledState?.(h.disabled),
          (function St(h, g) {
            g.valueAccessor.registerOnChange((c) => {
              (h._pendingValue = c),
                (h._pendingChange = !0),
                (h._pendingDirty = !0),
                'change' === h.updateOn && vt(h, g);
            });
          })(h, g),
          (function Nt(h, g) {
            const c = (E, B) => {
              g.valueAccessor.writeValue(E), B && g.viewToModelUpdate(E);
            };
            h.registerOnChange(c),
              g._registerOnDestroy(() => {
                h._unregisterOnChange(c);
              });
          })(h, g),
          (function it(h, g) {
            g.valueAccessor.registerOnTouched(() => {
              (h._pendingTouched = !0),
                'blur' === h.updateOn && h._pendingChange && vt(h, g),
                'submit' !== h.updateOn && h.markAsTouched();
            });
          })(h, g),
          (function Pe(h, g) {
            if (g.valueAccessor.setDisabledState) {
              const c = (E) => {
                g.valueAccessor.setDisabledState(E);
              };
              h.registerOnDisabledChange(c),
                g._registerOnDestroy(() => {
                  h._unregisterOnDisabledChange(c);
                });
            }
          })(h, g);
      }
      function ie(h, g) {
        h.forEach((c) => {
          c.registerOnValidatorChange && c.registerOnValidatorChange(g);
        });
      }
      function vt(h, g) {
        h._pendingDirty && h.markAsDirty(),
          h.setValue(h._pendingValue, { emitModelToViewChange: !1 }),
          g.viewToModelUpdate(h._pendingValue),
          (h._pendingChange = !1);
      }
      function ht(h, g) {
        const c = h.indexOf(g);
        c > -1 && h.splice(c, 1);
      }
      function Br(h) {
        return 'object' == typeof h && null !== h && 2 === Object.keys(h).length && 'value' in h && 'disabled' in h;
      }
      const an = class extends On {
          constructor(g = null, c, E) {
            super(
              (function A(h) {
                return (He(h) ? h.validators : h) || null;
              })(c),
              (function J(h, g) {
                return (He(g) ? g.asyncValidators : h) || null;
              })(E, c),
            ),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(g),
              this._setUpdateStrategy(c),
              this._initObservables(),
              this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }),
              He(c) && (c.nonNullable || c.initialValueIsDefault) && (this.defaultValue = Br(g) ? g.value : g);
          }
          setValue(g, c = {}) {
            (this.value = this._pendingValue = g),
              this._onChange.length &&
                !1 !== c.emitModelToViewChange &&
                this._onChange.forEach((E) => E(this.value, !1 !== c.emitViewToModelChange)),
              this.updateValueAndValidity(c);
          }
          patchValue(g, c = {}) {
            this.setValue(g, c);
          }
          reset(g = this.defaultValue, c = {}) {
            this._applyFormState(g),
              this.markAsPristine(c),
              this.markAsUntouched(c),
              this.setValue(this.value, c),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(g) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(g) {
            this._onChange.push(g);
          }
          _unregisterOnChange(g) {
            ht(this._onChange, g);
          }
          registerOnDisabledChange(g) {
            this._onDisabledChange.push(g);
          }
          _unregisterOnDisabledChange(g) {
            ht(this._onDisabledChange, g);
          }
          _forEachChild(g) {}
          _syncPendingControls() {
            return !(
              'submit' !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
            );
          }
          _applyFormState(g) {
            Br(g)
              ? ((this.value = this._pendingValue = g.value),
                g.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = g);
          }
        },
        Yi = { provide: ze, useExisting: (0, d.Gpc)(() => $r) },
        uo = (() => Promise.resolve())();
      let $r = (() => {
          class h extends ze {
            constructor(c, E, B, Ee, Ye, sn) {
              super(),
                (this._changeDetectorRef = Ye),
                (this.callSetDisabledState = sn),
                (this.control = new an()),
                (this._registered = !1),
                (this.update = new d.vpe()),
                (this._parent = c),
                this._setValidators(E),
                this._setAsyncValidators(B),
                (this.valueAccessor = (function cn(h, g) {
                  if (!g) return null;
                  let c, E, B;
                  return (
                    Array.isArray(g),
                    g.forEach((Ee) => {
                      Ee.constructor === Q
                        ? (c = Ee)
                        : (function Ut(h) {
                            return Object.getPrototypeOf(h.constructor) === we;
                          })(Ee)
                        ? (E = Ee)
                        : (B = Ee);
                    }),
                    B || E || c || null
                  );
                })(0, Ee));
            }
            ngOnChanges(c) {
              if ((this._checkForErrors(), !this._registered || 'name' in c)) {
                if (this._registered && (this._checkName(), this.formDirective)) {
                  const E = c.name.previousValue;
                  this.formDirective.removeControl({ name: E, path: this._getPath(E) });
                }
                this._setUpControl();
              }
              'isDisabled' in c && this._updateDisabled(c),
                (function ot(h, g) {
                  if (!h.hasOwnProperty('model')) return !1;
                  const c = h.model;
                  return !!c.isFirstChange() || !Object.is(g, c.currentValue);
                })(c, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(c) {
              (this.viewModel = c), this.update.emit(c);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return !this._parent || !(!this.options || !this.options.standalone);
            }
            _setUpStandalone() {
              N(this.control, this, this.callSetDisabledState), this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(), this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options && this.options.name && (this.name = this.options.name), this._isStandalone();
            }
            _updateValue(c) {
              uo.then(() => {
                this.control.setValue(c, { emitViewToModelChange: !1 }), this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(c) {
              const E = c.isDisabled.currentValue,
                B = 0 !== E && (0, d.D6c)(E);
              uo.then(() => {
                B && !this.control.disabled
                  ? this.control.disable()
                  : !B && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(c) {
              return this._parent
                ? (function T(h, g) {
                    return [...g.path, h];
                  })(c, this._parent)
                : [c];
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(
                d.Y36(gt, 9),
                d.Y36(Ie, 10),
                d.Y36(W, 10),
                d.Y36(ye, 10),
                d.Y36(d.sBO, 8),
                d.Y36(V, 8),
              );
            }),
            (h.ɵdir = d.lG2({
              type: h,
              selectors: [['', 'ngModel', '', 3, 'formControlName', '', 3, 'formControl', '']],
              inputs: {
                name: 'name',
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
                options: ['ngModelOptions', 'options'],
              },
              outputs: { update: 'ngModelChange' },
              exportAs: ['ngModel'],
              features: [d._Bn([Yi]), d.qOj, d.TTD],
            })),
            h
          );
        })(),
        un = (() => {
          class h {}
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵmod = d.oAB({ type: h })),
            (h.ɵinj = d.cJS({})),
            h
          );
        })();
      const bi = { provide: ye, useExisting: (0, d.Gpc)(() => Vo), multi: !0 };
      function Mi(h, g) {
        return null == h ? `${g}` : (g && 'object' == typeof g && (g = 'Object'), `${h}: ${g}`.slice(0, 50));
      }
      let Vo = (() => {
          class h extends we {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(c) {
              this._compareWith = c;
            }
            writeValue(c) {
              this.value = c;
              const B = Mi(this._getOptionId(c), c);
              this.setProperty('value', B);
            }
            registerOnChange(c) {
              this.onChange = (E) => {
                (this.value = this._getOptionValue(E)), c(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(c) {
              for (const E of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(E), c)) return E;
              return null;
            }
            _getOptionValue(c) {
              const E = (function Qi(h) {
                return h.split(':')[0];
              })(c);
              return this._optionMap.has(E) ? this._optionMap.get(E) : c;
            }
          }
          return (
            (h.ɵfac = (function () {
              let g;
              return function (E) {
                return (g || (g = d.n5z(h)))(E || h);
              };
            })()),
            (h.ɵdir = d.lG2({
              type: h,
              selectors: [
                ['select', 'formControlName', '', 3, 'multiple', ''],
                ['select', 'formControl', '', 3, 'multiple', ''],
                ['select', 'ngModel', '', 3, 'multiple', ''],
              ],
              hostBindings: function (c, E) {
                1 & c &&
                  d.NdJ('change', function (Ee) {
                    return E.onChange(Ee.target.value);
                  })('blur', function () {
                    return E.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [d._Bn([bi]), d.qOj],
            })),
            h
          );
        })(),
        Si = (() => {
          class h {
            constructor(c, E, B) {
              (this._element = c),
                (this._renderer = E),
                (this._select = B),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(c) {
              null != this._select &&
                (this._select._optionMap.set(this.id, c),
                this._setElementValue(Mi(this.id, c)),
                this._select.writeValue(this._select.value));
            }
            set value(c) {
              this._setElementValue(c), this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(c) {
              this._renderer.setProperty(this._element.nativeElement, 'value', c);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(Vo, 9));
            }),
            (h.ɵdir = d.lG2({ type: h, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            h
          );
        })();
      const Ii = { provide: ye, useExisting: (0, d.Gpc)(() => ui), multi: !0 };
      function vr(h, g) {
        return null == h
          ? `${g}`
          : ('string' == typeof g && (g = `'${g}'`),
            g && 'object' == typeof g && (g = 'Object'),
            `${h}: ${g}`.slice(0, 50));
      }
      let ui = (() => {
          class h extends we {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(c) {
              this._compareWith = c;
            }
            writeValue(c) {
              let E;
              if (((this.value = c), Array.isArray(c))) {
                const B = c.map((Ee) => this._getOptionId(Ee));
                E = (Ee, Ye) => {
                  Ee._setSelected(B.indexOf(Ye.toString()) > -1);
                };
              } else
                E = (B, Ee) => {
                  B._setSelected(!1);
                };
              this._optionMap.forEach(E);
            }
            registerOnChange(c) {
              this.onChange = (E) => {
                const B = [],
                  Ee = E.selectedOptions;
                if (void 0 !== Ee) {
                  const Ye = Ee;
                  for (let sn = 0; sn < Ye.length; sn++) {
                    const Ar = this._getOptionValue(Ye[sn].value);
                    B.push(Ar);
                  }
                } else {
                  const Ye = E.options;
                  for (let sn = 0; sn < Ye.length; sn++) {
                    const er = Ye[sn];
                    if (er.selected) {
                      const Ar = this._getOptionValue(er.value);
                      B.push(Ar);
                    }
                  }
                }
                (this.value = B), c(B);
              };
            }
            _registerOption(c) {
              const E = (this._idCounter++).toString();
              return this._optionMap.set(E, c), E;
            }
            _getOptionId(c) {
              for (const E of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(E)._value, c)) return E;
              return null;
            }
            _getOptionValue(c) {
              const E = (function Uo(h) {
                return h.split(':')[0];
              })(c);
              return this._optionMap.has(E) ? this._optionMap.get(E)._value : c;
            }
          }
          return (
            (h.ɵfac = (function () {
              let g;
              return function (E) {
                return (g || (g = d.n5z(h)))(E || h);
              };
            })()),
            (h.ɵdir = d.lG2({
              type: h,
              selectors: [
                ['select', 'multiple', '', 'formControlName', ''],
                ['select', 'multiple', '', 'formControl', ''],
                ['select', 'multiple', '', 'ngModel', ''],
              ],
              hostBindings: function (c, E) {
                1 & c &&
                  d.NdJ('change', function (Ee) {
                    return E.onChange(Ee.target);
                  })('blur', function () {
                    return E.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [d._Bn([Ii]), d.qOj],
            })),
            h
          );
        })(),
        Sr = (() => {
          class h {
            constructor(c, E, B) {
              (this._element = c),
                (this._renderer = E),
                (this._select = B),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(c) {
              null != this._select &&
                ((this._value = c), this._setElementValue(vr(this.id, c)), this._select.writeValue(this._select.value));
            }
            set value(c) {
              this._select
                ? ((this._value = c),
                  this._setElementValue(vr(this.id, c)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(c);
            }
            _setElementValue(c) {
              this._renderer.setProperty(this._element.nativeElement, 'value', c);
            }
            _setSelected(c) {
              this._renderer.setProperty(this._element.nativeElement, 'selected', c);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.Y36(d.SBq), d.Y36(d.Qsj), d.Y36(ui, 9));
            }),
            (h.ɵdir = d.lG2({ type: h, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            h
          );
        })(),
        _o = (() => {
          class h {}
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵmod = d.oAB({ type: h })),
            (h.ɵinj = d.cJS({ imports: [un] })),
            h
          );
        })(),
        ts = (() => {
          class h {
            static withConfig(c) {
              return { ngModule: h, providers: [{ provide: V, useValue: c.callSetDisabledState ?? x }] };
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵmod = d.oAB({ type: h })),
            (h.ɵinj = d.cJS({ imports: [_o] })),
            h
          );
        })();
      const Oi = ['East', 'West'],
        Go = [
          { division: 'Atlantic', conference: 'East' },
          { division: 'Central', conference: 'East' },
          { division: 'Southeast', conference: 'East' },
          { division: 'Northwest', conference: 'West' },
          { division: 'Pacific', conference: 'West' },
          { division: 'Southwest', conference: 'West' },
        ];
      let zo = (() => {
          class h {
            constructor(c, E, B) {
              (this.elementRef = c),
                (this.ngModel = E),
                (this.changeDetectorRef = B),
                (this.appResetIfOptionUnavailable = '');
            }
            get selectedOption() {
              return this.elementRef.nativeElement.selectedOptions[0];
            }
            ngAfterContentChecked() {
              Array.from(this.elementRef.nativeElement.options).some((E) => E.value === this.selectedOption?.value) ||
                ((this.elementRef.nativeElement.value = this.appResetIfOptionUnavailable),
                this.ngModel &&
                  (this.ngModel.control?.setValue(this.appResetIfOptionUnavailable),
                  this.changeDetectorRef.detectChanges()));
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.Y36(d.SBq), d.Y36($r, 10), d.Y36(d.sBO));
            }),
            (h.ɵdir = d.lG2({
              type: h,
              selectors: [['select', 'appResetIfOptionUnavailable', '']],
              inputs: { appResetIfOptionUnavailable: 'appResetIfOptionUnavailable' },
              standalone: !0,
            })),
            h
          );
        })(),
        fe = (() => {
          class h {
            transform(c) {
              return c || void 0;
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵpipe = d.Yjl({ name: 'falsyToUndefined', type: h, pure: !0, standalone: !0 })),
            h
          );
        })(),
        It = (() => {
          class h {
            transform(c, E) {
              return Array.from(c).filter((B) =>
                Object.entries(E)
                  .filter(([, Ee]) => void 0 !== Ee)
                  .every(([Ee, Ye]) => B[Ee] === Ye),
              );
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵpipe = d.Yjl({ name: 'shapeFilter', type: h, pure: !0, standalone: !0 })),
            h
          );
        })();
      function Wo(h, g) {
        if ((1 & h && (d.TgZ(0, 'option', 15), d._uU(1), d.qZA()), 2 & h)) {
          const c = g.$implicit;
          d.Q6J('value', c), d.xp6(1), d.hij(' ', c, ' ');
        }
      }
      function di(h, g) {
        if ((1 & h && (d.TgZ(0, 'option', 15), d._uU(1), d.qZA()), 2 & h)) {
          const c = g.$implicit;
          d.Q6J('value', c.division), d.xp6(1), d.hij(' ', c.division, ' ');
        }
      }
      function gn(h, g) {
        if ((1 & h && (d.TgZ(0, 'option', 15), d._uU(1), d.qZA()), 2 & h)) {
          const c = g.$implicit;
          d.Q6J('value', c.id), d.xp6(1), d.hij(' ', c.full_name, ' ');
        }
      }
      const wo = function (h) {
          return { conference: h };
        },
        lr = function (h, g) {
          return { conference: h, division: g };
        };
      let cr = (() => {
        class h {
          constructor() {
            (this.CONFERENCES = Oi),
              (this.DIVISIONS = Go),
              (this.teams = []),
              (this.teamIdSelected = new d.vpe()),
              (this.numberOfTrackingDaysChange = new d.vpe());
          }
          selectTeam(c) {
            this.teamIdSelected.emit(c);
          }
          selectNumberOfTrackingDays(c) {
            this.numberOfTrackingDaysChange.emit(c);
          }
          trackByTeamId(c, E) {
            return E.id.toString();
          }
          trackByDivision(c, E) {
            return E.division;
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)();
          }),
          (h.ɵcmp = d.Xpm({
            type: h,
            selectors: [['app-team-search-bar']],
            inputs: { teams: 'teams', numberOfTrackingDays: 'numberOfTrackingDays' },
            outputs: { teamIdSelected: 'teamIdSelected', numberOfTrackingDaysChange: 'numberOfTrackingDaysChange' },
            standalone: !0,
            features: [d.jDz],
            decls: 32,
            vars: 24,
            consts: [
              ['ngModel', ''],
              ['conferenceSelect', 'ngModel'],
              ['value', ''],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              ['ngModel', '', 'appResetIfOptionUnavailable', ''],
              ['divisionSelect', 'ngModel'],
              [3, 'value', 4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
              ['ngModel', '0', 'appResetIfOptionUnavailable', '0'],
              ['teamSelect', 'ngModel'],
              ['value', '0'],
              [1, 'primary', 3, 'disabled', 'click'],
              [3, 'ngModel', 'ngModelChange'],
              ['value', '6'],
              ['value', '12'],
              ['value', '20'],
              [3, 'value'],
            ],
            template: function (c, E) {
              if (1 & c) {
                const B = d.EpF();
                d.TgZ(0, 'div')(1, 'select', 0, 1)(3, 'option', 2),
                  d._uU(4, 'All conferences'),
                  d.qZA(),
                  d.YNc(5, Wo, 2, 2, 'option', 3),
                  d.qZA(),
                  d.TgZ(6, 'select', 4, 5)(8, 'option', 2),
                  d._uU(9, 'All divisions'),
                  d.qZA(),
                  d.YNc(10, di, 2, 2, 'option', 6),
                  d.ALo(11, 'shapeFilter'),
                  d.ALo(12, 'falsyToUndefined'),
                  d.qZA(),
                  d.TgZ(13, 'select', 7, 8)(15, 'option', 9),
                  d._uU(16, 'Select a team'),
                  d.qZA(),
                  d.YNc(17, gn, 2, 2, 'option', 6),
                  d.ALo(18, 'shapeFilter'),
                  d.ALo(19, 'falsyToUndefined'),
                  d.ALo(20, 'falsyToUndefined'),
                  d.qZA(),
                  d.TgZ(21, 'button', 10),
                  d.NdJ('click', function () {
                    d.CHM(B);
                    const Ye = d.MAs(14);
                    return d.KtG(E.selectTeam(Ye.value));
                  }),
                  d._uU(22, ' Track team '),
                  d.qZA(),
                  d.TgZ(23, 'span'),
                  d._uU(24, 'for the last'),
                  d.qZA(),
                  d.TgZ(25, 'select', 11),
                  d.NdJ('ngModelChange', function (Ye) {
                    return E.selectNumberOfTrackingDays(Ye);
                  }),
                  d.TgZ(26, 'option', 12),
                  d._uU(27, '6 days'),
                  d.qZA(),
                  d.TgZ(28, 'option', 13),
                  d._uU(29, '12 days'),
                  d.qZA(),
                  d.TgZ(30, 'option', 14),
                  d._uU(31, '20 days'),
                  d.qZA()()();
              }
              if (2 & c) {
                const B = d.MAs(2),
                  Ee = d.MAs(7),
                  Ye = d.MAs(14);
                d.xp6(5),
                  d.Q6J('ngForOf', E.CONFERENCES),
                  d.xp6(5),
                  d.Q6J('ngForOf', d.xi3(11, 7, E.DIVISIONS, d.VKq(19, wo, d.lcZ(12, 10, B.value))))(
                    'ngForTrackBy',
                    E.trackByDivision,
                  ),
                  d.xp6(7),
                  d.Q6J(
                    'ngForOf',
                    d.xi3(18, 12, E.teams, d.WLB(21, lr, d.lcZ(19, 15, B.value), d.lcZ(20, 17, Ee.value))),
                  )('ngForTrackBy', E.trackByTeamId),
                  d.xp6(4),
                  d.Q6J('disabled', '0' === Ye.value),
                  d.xp6(4),
                  d.Q6J('ngModel', E.numberOfTrackingDays);
              }
            },
            dependencies: [ts, Si, Sr, Vo, bt, $r, It, fe, Ve.ax, zo],
            changeDetection: 0,
          })),
          h
        );
      })();
      var Yo = R(576);
      function Zr(h) {
        return !!h && (h instanceof he.y || ((0, Yo.m)(h.lift) && (0, Yo.m)(h.subscribe)));
      }
      var qo = R(9841),
        Ns = R(7579);
      const Eo = { now: () => (Eo.delegate || Date).now(), delegate: void 0 };
      class Cn extends Ns.x {
        constructor(g = 1 / 0, c = 1 / 0, E = Eo) {
          super(),
            (this._bufferSize = g),
            (this._windowTime = c),
            (this._timestampProvider = E),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = c === 1 / 0),
            (this._bufferSize = Math.max(1, g)),
            (this._windowTime = Math.max(1, c));
        }
        next(g) {
          const { isStopped: c, _buffer: E, _infiniteTimeWindow: B, _timestampProvider: Ee, _windowTime: Ye } = this;
          c || (E.push(g), !B && E.push(Ee.now() + Ye)), this._trimBuffer(), super.next(g);
        }
        _subscribe(g) {
          this._throwIfClosed(), this._trimBuffer();
          const c = this._innerSubscribe(g),
            { _infiniteTimeWindow: E, _buffer: B } = this,
            Ee = B.slice();
          for (let Ye = 0; Ye < Ee.length && !g.closed; Ye += E ? 1 : 2) g.next(Ee[Ye]);
          return this._checkFinalizedStatuses(g), c;
        }
        _trimBuffer() {
          const { _bufferSize: g, _timestampProvider: c, _buffer: E, _infiniteTimeWindow: B } = this,
            Ee = (B ? 1 : 2) * g;
          if ((g < 1 / 0 && Ee < E.length && E.splice(0, E.length - Ee), !B)) {
            const Ye = c.now();
            let sn = 0;
            for (let er = 1; er < E.length && E[er] <= Ye; er += 2) sn = er;
            sn && E.splice(0, sn + 1);
          }
        }
      }
      var Kn = R(9635),
        Qr = R(727),
        Xr = R(4671),
        yr = R(4482);
      function fi(h, g = Xr.y) {
        return (
          (h = h ?? Ri),
          (0, yr.e)((c, E) => {
            let B,
              Ee = !0;
            c.subscribe(
              (0, se.x)(E, (Ye) => {
                const sn = g(Ye);
                (Ee || !h(B, sn)) && ((Ee = !1), (B = sn), E.next(Ye));
              }),
            );
          })
        );
      }
      function Ri(h, g) {
        return h === g;
      }
      var bo = R(8505),
        Pi = R(3900);
      let Dr = (() => {
          class h {}
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵprov = d.Yz7({
              token: h,
              factory: function () {
                return (function Ko(h) {
                  return h instanceof d.R0b;
                })((0, d.f3M)(d.R0b))
                  ? new So()
                  : (0, d.f3M)(Mo);
              },
              providedIn: 'root',
            })),
            h
          );
        })(),
        Mo = (() => {
          class h extends Dr {
            constructor(c) {
              super(), (this.appRef = c), (this.isScheduled = !1);
            }
            schedule() {
              this.isScheduled ||
                ((this.isScheduled = !0),
                requestAnimationFrame(() => {
                  this.appRef.tick(), (this.isScheduled = !1);
                }));
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.LFG(d.z2F));
            }),
            (h.ɵprov = d.Yz7({ token: h, factory: h.ɵfac, providedIn: 'root' })),
            h
          );
        })();
      class So extends Dr {
        schedule() {}
      }
      let Fr = (() => {
        class h {
          constructor(c, E) {
            (this.cdRef = c), (this.tickScheduler = E);
          }
          schedule() {
            this.cdRef.markForCheck(), this.tickScheduler.schedule();
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)(d.LFG(d.sBO), d.LFG(Dr));
          }),
          (h.ɵprov = d.Yz7({ token: h, factory: h.ɵfac })),
          h
        );
      })();
      function ns(h) {
        const g = (function Zo(h) {
            return (g) => h[g.type]?.(g);
          })(h),
          c = new Cn(1);
        return {
          nextPotentialObservable(E) {
            c.next(E);
          },
          handlePotentialObservableChanges: () =>
            c.pipe(
              fi(),
              (function rs() {
                return (0, Kn.z)(
                  (0, Pi.w)((h) => {
                    const g = (function xi(h) {
                      return Zr(h)
                        ? h
                        : (function Fi(h) {
                            return (
                              (function Li(h) {
                                return !!h && 'object' == typeof h && !Array.isArray(h);
                              })(h) &&
                              Object.keys(h).length > 0 &&
                              Object.values(h).every(Zr)
                            );
                          })(h)
                        ? (0, qo.a)(
                            (function Qo(h) {
                              return Object.keys(h).reduce((g, c) => ({ ...g, [c]: h[c].pipe(fi()) }), {});
                            })(h),
                          )
                        : (function Ni(h) {
                            return 'function' == typeof h?.then;
                          })(h)
                        ? (0, Ae.D)(h)
                        : new he.y((g) => {
                            g.next(h);
                          });
                    })(h);
                    let c = !0,
                      E = !0;
                    return new he.y((B) => {
                      const Ee = g.subscribe({
                        next(Ye) {
                          B.next({ type: 'next', value: Ye, reset: c, synchronous: E }), (c = !1);
                        },
                        error(Ye) {
                          B.next({ type: 'error', error: Ye, reset: c, synchronous: E }), (c = !1);
                        },
                        complete() {
                          B.next({ type: 'complete', reset: c, synchronous: E }), (c = !1);
                        },
                      });
                      return c && (B.next({ type: 'suspense', reset: c, synchronous: !0 }), (c = !1)), (E = !1), Ee;
                    });
                  }),
                );
              })(),
              fi(Pn),
              (0, bo.b)(g),
            ),
        };
      }
      function Pn(h, g) {
        return (
          h.type === g.type &&
          h.reset === g.reset &&
          ('next' === g.type ? h.value === g.value : 'error' !== g.type || h.error === g.error)
        );
      }
      let Lr = (() => {
          class h {
            constructor(c, E, B, Ee) {
              (this.mainTemplateRef = c),
                (this.viewContainerRef = E),
                (this.errorHandler = B),
                (this.renderScheduler = Ee),
                (this.isMainViewCreated = !1),
                (this.isSuspenseViewCreated = !1),
                (this.viewContext = { $implicit: void 0, ngrxLet: void 0, error: void 0, complete: !1 }),
                (this.renderEventManager = ns({
                  suspense: () => {
                    (this.viewContext.$implicit = void 0),
                      (this.viewContext.ngrxLet = void 0),
                      (this.viewContext.error = void 0),
                      (this.viewContext.complete = !1),
                      this.renderSuspenseView();
                  },
                  next: (Ye) => {
                    (this.viewContext.$implicit = Ye.value),
                      (this.viewContext.ngrxLet = Ye.value),
                      Ye.reset && ((this.viewContext.error = void 0), (this.viewContext.complete = !1)),
                      this.renderMainView(Ye.synchronous);
                  },
                  error: (Ye) => {
                    (this.viewContext.error = Ye.error),
                      Ye.reset &&
                        ((this.viewContext.$implicit = void 0),
                        (this.viewContext.ngrxLet = void 0),
                        (this.viewContext.complete = !1)),
                      this.renderMainView(Ye.synchronous),
                      this.errorHandler.handleError(Ye.error);
                  },
                  complete: (Ye) => {
                    (this.viewContext.complete = !0),
                      Ye.reset &&
                        ((this.viewContext.$implicit = void 0),
                        (this.viewContext.ngrxLet = void 0),
                        (this.viewContext.error = void 0)),
                      this.renderMainView(Ye.synchronous);
                  },
                })),
                (this.subscription = new Qr.w0());
            }
            set ngrxLet(c) {
              this.renderEventManager.nextPotentialObservable(c);
            }
            static ngTemplateContextGuard(c, E) {
              return !0;
            }
            ngOnInit() {
              this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            renderMainView(c) {
              this.isSuspenseViewCreated && ((this.isSuspenseViewCreated = !1), this.viewContainerRef.clear()),
                this.isMainViewCreated ||
                  ((this.isMainViewCreated = !0),
                  this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext)),
                c || this.renderScheduler.schedule();
            }
            renderSuspenseView() {
              this.isMainViewCreated && ((this.isMainViewCreated = !1), this.viewContainerRef.clear()),
                this.suspenseTemplateRef &&
                  !this.isSuspenseViewCreated &&
                  ((this.isSuspenseViewCreated = !0),
                  this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef));
            }
          }
          return (
            (h.ɵfac = function (c) {
              return new (c || h)(d.Y36(d.Rgc), d.Y36(d.s_b), d.Y36(d.qLn), d.Y36(Fr));
            }),
            (h.ɵdir = d.lG2({
              type: h,
              selectors: [['', 'ngrxLet', '']],
              inputs: { ngrxLet: 'ngrxLet', suspenseTemplateRef: ['ngrxLetSuspenseTpl', 'suspenseTemplateRef'] },
              features: [d._Bn([Fr])],
            })),
            h
          );
        })(),
        tn = (() => {
          class h {}
          return (
            (h.ɵfac = function (c) {
              return new (c || h)();
            }),
            (h.ɵmod = d.oAB({ type: h })),
            (h.ɵinj = d.cJS({})),
            h
          );
        })();
      const y = ['dialog'];
      function S(h, g) {
        if ((1 & h && (d.TgZ(0, 'h2'), d._uU(1), d.qZA()), 2 & h)) {
          const c = d.oxw();
          d.xp6(1), d.Oqu(c.title);
        }
      }
      const P = ['*', [['', 'actions', '']]],
        K = ['*', '[actions]'];
      let ce = (() => {
        class h {
          show() {
            this.dialog.nativeElement.showModal();
          }
          close() {
            this.dialog.nativeElement.close();
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)();
          }),
          (h.ɵcmp = d.Xpm({
            type: h,
            selectors: [['app-generic-dialog']],
            viewQuery: function (c, E) {
              if ((1 & c && d.Gf(y, 5), 2 & c)) {
                let B;
                d.iGM((B = d.CRH())) && (E.dialog = B.first);
              }
            },
            inputs: { title: 'title' },
            standalone: !0,
            features: [d.jDz],
            ngContentSelectors: K,
            decls: 10,
            vars: 1,
            consts: [
              ['dialog', ''],
              [1, 'close-icon', 3, 'click'],
              [4, 'ngIf'],
              [1, 'content'],
            ],
            template: function (c, E) {
              1 & c &&
                (d.F$t(P),
                d.TgZ(0, 'dialog', null, 0)(2, 'div')(3, 'span', 1),
                d.NdJ('click', function () {
                  return E.close();
                }),
                d._uU(4, '\xd7'),
                d.qZA(),
                d.YNc(5, S, 2, 1, 'h2', 2),
                d.qZA(),
                d.TgZ(6, 'div', 3),
                d.Hsn(7),
                d.qZA(),
                d.TgZ(8, 'div'),
                d.Hsn(9, 1),
                d.qZA()()),
                2 & c && (d.xp6(5), d.Q6J('ngIf', E.title));
            },
            dependencies: [Ve.ez, Ve.O5],
            styles: [
              'dialog[_ngcontent-%COMP%]{background-color:#5f9ea0;border-color:transparent;overflow:hidden;border-radius:5px;box-shadow:0 0 20px 8px #d0d0d0}.content[_ngcontent-%COMP%]{padding:10px 40px}',
            ],
          })),
          h
        );
      })();
      var Be = R(3666);
      function Et(h, g) {
        if ((1 & h && (d.TgZ(0, 'mark', 14), d._uU(1), d.qZA()), 2 & h)) {
          const c = g.$implicit;
          d.Tol(c), d.xp6(1), d.Oqu(c);
        }
      }
      const At = function (h) {
        return ['/results', h];
      };
      function Ft(h, g) {
        if (1 & h) {
          const c = d.EpF();
          d.TgZ(0, 'div', 1)(1, 'div')(2, 'h3'),
            d._uU(3),
            d.TgZ(4, 'span', 2),
            d.NdJ('click', function () {
              d.CHM(c);
              const B = d.MAs(31);
              return d.KtG(B.show());
            }),
            d._uU(5, '\xd7'),
            d.qZA()(),
            d.TgZ(6, 'h6'),
            d._uU(7),
            d.qZA()(),
            d._UZ(8, 'hr'),
            d.TgZ(9, 'div', 3)(10, 'div', 4)(11, 'div', 5)(12, 'p'),
            d._uU(13),
            d.ALo(14, 'async'),
            d.qZA(),
            d.TgZ(15, 'p'),
            d.YNc(16, Et, 2, 3, 'mark', 6),
            d.qZA(),
            d.TgZ(17, 'p'),
            d._uU(18, ' Avg pts scored: '),
            d.TgZ(19, 'strong'),
            d._uU(20),
            d.qZA()(),
            d.TgZ(21, 'p'),
            d._uU(22, ' Avg pts conceded: '),
            d.TgZ(23, 'strong'),
            d._uU(24),
            d.qZA()()(),
            d.TgZ(25, 'div', 5),
            d._UZ(26, 'img', 7),
            d.qZA()()(),
            d.TgZ(27, 'div')(28, 'button', 8),
            d._uU(29, 'See game results >>'),
            d.qZA()(),
            d.TgZ(30, 'app-generic-dialog', 9, 10),
            d.ynx(32),
            d._uU(33),
            d.BQk(),
            d.ynx(34, 11),
            d.TgZ(35, 'button', 12),
            d.NdJ('click', function () {
              d.CHM(c);
              const B = d.MAs(31);
              return d.KtG(B.close());
            }),
            d._uU(36, 'No'),
            d.qZA(),
            d.TgZ(37, 'button', 13),
            d.NdJ('click', function () {
              d.CHM(c);
              const B = d.MAs(31),
                Ee = d.oxw();
              return Ee.nbaService.removeTrackedTeam(Ee.team), d.KtG(B.close());
            }),
            d._uU(38, 'Yes'),
            d.qZA(),
            d.BQk(),
            d.qZA()();
        }
        if (2 & h) {
          const c = d.oxw();
          d.xp6(3),
            d.AsE(' ', c.team.full_name, ' [', c.team.abbreviation, '] '),
            d.xp6(4),
            d.hij('', c.team.conference, 'ern conference'),
            d.xp6(6),
            d.hij('Results of past ', d.lcZ(14, 11, c.nbaService.numberOfTrackingDays$), ' days:'),
            d.xp6(3),
            d.Q6J('ngForOf', c.stats.lastGames),
            d.xp6(4),
            d.Oqu(c.stats.averagePointsScored),
            d.xp6(4),
            d.Oqu(c.stats.averagePointsConceded),
            d.xp6(2),
            d.MGl('src', 'https://interstate21.com/nba-logos/', c.team.abbreviation, '.png', d.LSH),
            d.Q6J('alt', 'logo of ' + c.team.full_name),
            d.xp6(2),
            d.Q6J('routerLink', d.VKq(13, At, c.team.abbreviation)),
            d.xp6(5),
            d.hij('Are you sure to remove tracking of team ', c.team.full_name, ' ?');
        }
      }
      let Ct = (() => {
        class h {
          constructor(c) {
            (this.nbaService = c), (this.subscriptions = new Qr.w0());
          }
          ngOnInit() {
            this.subscriptions.add(this.nbaService.numberOfTrackingDays$.subscribe(() => this.fetchStats()));
          }
          ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
          fetchStats() {
            this.games$ = this.nbaService
              .getLastResults(this.team)
              .pipe((0, bo.b)((c) => (this.stats = this.nbaService.getStatsFromGames(c, this.team))));
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)(d.Y36(Be.J));
          }),
          (h.ɵcmp = d.Xpm({
            type: h,
            selectors: [['app-team-stats']],
            inputs: { team: 'team' },
            standalone: !0,
            features: [d.jDz],
            decls: 2,
            vars: 3,
            consts: [
              ['class', 'card', 4, 'ngIf'],
              [1, 'card'],
              [1, 'close-icon', 3, 'click'],
              [1, 'container'],
              [1, 'row'],
              [1, 'col-sm-6'],
              ['class', 'tag', 3, 'class', 4, 'ngFor', 'ngForOf'],
              [3, 'src', 'alt'],
              [1, 'tertiary', 3, 'routerLink'],
              ['title', 'Confirmation Dialog'],
              ['confirmDialog', ''],
              ['actions', ''],
              [1, 'secondary', 3, 'click'],
              [1, 'primary', 3, 'click'],
              [1, 'tag'],
            ],
            template: function (c, E) {
              1 & c && (d.YNc(0, Ft, 39, 15, 'div', 0), d.ALo(1, 'async')),
                2 & c && d.Q6J('ngIf', d.lcZ(1, 1, E.games$));
            },
            dependencies: [Ve.O5, Ve.ax, ee.rH, Ve.Ov, ce],
            styles: [
              '[_nghost-%COMP%]{padding:10px;margin:5px;display:block}mark.W[_ngcontent-%COMP%]{background-color:green}mark.L[_ngcontent-%COMP%]{background-color:red}mark[_ngcontent-%COMP%]{width:50px;margin-right:5px}.card[_ngcontent-%COMP%]{max-width:100%}',
            ],
          })),
          h
        );
      })();
      function Jt(h, g) {
        if (1 & h) {
          const c = d.EpF();
          d.TgZ(0, 'div', 2)(1, 'app-team-search-bar', 4),
            d.NdJ('teamIdSelected', function (B) {
              d.CHM(c);
              const Ee = d.oxw();
              return d.KtG(Ee.trackTeam(B));
            })('numberOfTrackingDaysChange', function (B) {
              d.CHM(c);
              const Ee = d.oxw();
              return d.KtG(Ee.nbaService.setNumberOfTrackingDays(B));
            }),
            d.qZA()();
        }
        if (2 & h) {
          const c = g.ngrxLet;
          d.xp6(1), d.Q6J('teams', c.teams)('numberOfTrackingDays', c.numberOfTrackingDays);
        }
      }
      function Lt(h, g) {
        1 & h && d._uU(0, 'Teams are loading...');
      }
      function mn(h, g) {
        1 & h && d._UZ(0, 'app-team-stats', 5), 2 & h && d.Q6J('team', g.$implicit);
      }
      const Tr = function (h, g) {
        return { teams: h, numberOfTrackingDays: g };
      };
      let xn = (() => {
        class h {
          constructor(c) {
            (this.nbaService = c), (this.allTeams$ = c.getAllTeams());
          }
          trackTeam(c) {
            this.nbaService.addTrackedTeam(Number(c));
          }
        }
        return (
          (h.ɵfac = function (c) {
            return new (c || h)(d.Y36(Be.J));
          }),
          (h.ɵcmp = d.Xpm({
            type: h,
            selectors: [['app-game-stats']],
            standalone: !0,
            features: [d.jDz],
            decls: 5,
            vars: 6,
            consts: [
              ['class', 'row', 4, 'ngrxLet', 'ngrxLetSuspenseTpl'],
              ['teamLoader', ''],
              [1, 'row'],
              ['class', 'col-sm-4', 3, 'team', 4, 'ngFor', 'ngForOf'],
              [1, 'col-sm-11', 3, 'teams', 'numberOfTrackingDays', 'teamIdSelected', 'numberOfTrackingDaysChange'],
              [1, 'col-sm-4', 3, 'team'],
            ],
            template: function (c, E) {
              if (
                (1 & c &&
                  (d.YNc(0, Jt, 2, 2, 'div', 0),
                  d.YNc(1, Lt, 1, 0, 'ng-template', null, 1, d.W1O),
                  d.TgZ(3, 'div', 2),
                  d.YNc(4, mn, 1, 1, 'app-team-stats', 3),
                  d.qZA()),
                2 & c)
              ) {
                const B = d.MAs(2);
                d.Q6J('ngrxLet', d.WLB(3, Tr, E.allTeams$, E.nbaService.numberOfTrackingDays$))(
                  'ngrxLetSuspenseTpl',
                  B,
                ),
                  d.xp6(4),
                  d.Q6J('ngForOf', E.nbaService.getTrackedTeams());
              }
            },
            dependencies: [Ct, cr, Ve.sg, tn, Lr],
          })),
          h
        );
      })();
      const dr = [
        {
          path: 'results/:teamAbbr',
          loadComponent: () =>
            R.e(376)
              .then(R.bind(R, 1376))
              .then((h) => h.GameResultsComponent),
        },
        { path: '**', loadComponent: () => xn },
      ];
      Oe_production && (0, d.G48)(),
        (0, Y.Cg)(te, {
          providers: [
            (0, ee.bU)(dr),
            (0, w.h_)(
              (0, w.CB)([
                function _e(h, g) {
                  let c = h.headers;
                  return (
                    Object.entries(Oe_freeNbaApi.headers).forEach(([B, Ee]) => {
                      c = c.set(B, Ee);
                    }),
                    g(h.clone({ url: `${Oe_freeNbaApi.rootUrl}/${h.url}`, headers: c }))
                  );
                },
              ]),
            ),
          ],
        }).catch((h) => console.error(h));
    },
    1135: (st, De, R) => {
      R.d(De, { X: () => d });
      var w = R(7579);
      class d extends w.x {
        constructor(ee) {
          super(), (this._value = ee);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(ee) {
          const te = super._subscribe(ee);
          return !te.closed && ee.next(this._value), te;
        }
        getValue() {
          const { hasError: ee, thrownError: te, _value: Oe } = this;
          if (ee) throw te;
          return this._throwIfClosed(), Oe;
        }
        next(ee) {
          super.next((this._value = ee));
        }
      }
    },
    9751: (st, De, R) => {
      R.d(De, { y: () => Ve });
      var w = R(2961),
        d = R(727),
        Y = R(8822),
        ee = R(9635),
        te = R(2416),
        Oe = R(576),
        _e = R(2806);
      let Ve = (() => {
        class Ce {
          constructor(se) {
            se && (this._subscribe = se);
          }
          lift(se) {
            const xe = new Ce();
            return (xe.source = this), (xe.operator = se), xe;
          }
          subscribe(se, xe, je) {
            const Xe = (function oe(Ce) {
              return (
                (Ce && Ce instanceof w.Lv) ||
                ((function he(Ce) {
                  return Ce && (0, Oe.m)(Ce.next) && (0, Oe.m)(Ce.error) && (0, Oe.m)(Ce.complete);
                })(Ce) &&
                  (0, d.Nn)(Ce))
              );
            })(se)
              ? se
              : new w.Hp(se, xe, je);
            return (
              (0, _e.x)(() => {
                const { operator: Ze, source: Ot } = this;
                Xe.add(Ze ? Ze.call(Xe, Ot) : Ot ? this._subscribe(Xe) : this._trySubscribe(Xe));
              }),
              Xe
            );
          }
          _trySubscribe(se) {
            try {
              return this._subscribe(se);
            } catch (xe) {
              se.error(xe);
            }
          }
          forEach(se, xe) {
            return new (xe = Ae(xe))((je, Xe) => {
              const Ze = new w.Hp({
                next: (Ot) => {
                  try {
                    se(Ot);
                  } catch (we) {
                    Xe(we), Ze.unsubscribe();
                  }
                },
                error: Xe,
                complete: je,
              });
              this.subscribe(Ze);
            });
          }
          _subscribe(se) {
            var xe;
            return null === (xe = this.source) || void 0 === xe ? void 0 : xe.subscribe(se);
          }
          [Y.L]() {
            return this;
          }
          pipe(...se) {
            return (0, ee.U)(se)(this);
          }
          toPromise(se) {
            return new (se = Ae(se))((xe, je) => {
              let Xe;
              this.subscribe(
                (Ze) => (Xe = Ze),
                (Ze) => je(Ze),
                () => xe(Xe),
              );
            });
          }
        }
        return (Ce.create = (qe) => new Ce(qe)), Ce;
      })();
      function Ae(Ce) {
        var qe;
        return null !== (qe = Ce ?? te.v.Promise) && void 0 !== qe ? qe : Promise;
      }
    },
    7579: (st, De, R) => {
      R.d(De, { x: () => _e });
      var w = R(9751),
        d = R(727);
      const ee = (0, R(3888).d)(
        (Ae) =>
          function () {
            Ae(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
          },
      );
      var te = R(8737),
        Oe = R(2806);
      let _e = (() => {
        class Ae extends w.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(oe) {
            const Ce = new Ve(this, this);
            return (Ce.operator = oe), Ce;
          }
          _throwIfClosed() {
            if (this.closed) throw new ee();
          }
          next(oe) {
            (0, Oe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const Ce of this.currentObservers) Ce.next(oe);
              }
            });
          }
          error(oe) {
            (0, Oe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = oe);
                const { observers: Ce } = this;
                for (; Ce.length; ) Ce.shift().error(oe);
              }
            });
          }
          complete() {
            (0, Oe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: oe } = this;
                for (; oe.length; ) oe.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
          }
          get observed() {
            var oe;
            return (null === (oe = this.observers) || void 0 === oe ? void 0 : oe.length) > 0;
          }
          _trySubscribe(oe) {
            return this._throwIfClosed(), super._trySubscribe(oe);
          }
          _subscribe(oe) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(oe), this._innerSubscribe(oe);
          }
          _innerSubscribe(oe) {
            const { hasError: Ce, isStopped: qe, observers: se } = this;
            return Ce || qe
              ? d.Lc
              : ((this.currentObservers = null),
                se.push(oe),
                new d.w0(() => {
                  (this.currentObservers = null), (0, te.P)(se, oe);
                }));
          }
          _checkFinalizedStatuses(oe) {
            const { hasError: Ce, thrownError: qe, isStopped: se } = this;
            Ce ? oe.error(qe) : se && oe.complete();
          }
          asObservable() {
            const oe = new w.y();
            return (oe.source = this), oe;
          }
        }
        return (Ae.create = (he, oe) => new Ve(he, oe)), Ae;
      })();
      class Ve extends _e {
        constructor(he, oe) {
          super(), (this.destination = he), (this.source = oe);
        }
        next(he) {
          var oe, Ce;
          null === (Ce = null === (oe = this.destination) || void 0 === oe ? void 0 : oe.next) ||
            void 0 === Ce ||
            Ce.call(oe, he);
        }
        error(he) {
          var oe, Ce;
          null === (Ce = null === (oe = this.destination) || void 0 === oe ? void 0 : oe.error) ||
            void 0 === Ce ||
            Ce.call(oe, he);
        }
        complete() {
          var he, oe;
          null === (oe = null === (he = this.destination) || void 0 === he ? void 0 : he.complete) ||
            void 0 === oe ||
            oe.call(he);
        }
        _subscribe(he) {
          var oe, Ce;
          return null !== (Ce = null === (oe = this.source) || void 0 === oe ? void 0 : oe.subscribe(he)) &&
            void 0 !== Ce
            ? Ce
            : d.Lc;
        }
      }
    },
    2961: (st, De, R) => {
      R.d(De, { Hp: () => je, Lv: () => Ce });
      var w = R(576),
        d = R(727),
        Y = R(2416),
        ee = R(7849);
      function te() {}
      const Oe = Ae('C', void 0, void 0);
      function Ae(ye, Me, Ke) {
        return { kind: ye, value: Me, error: Ke };
      }
      var he = R(3410),
        oe = R(2806);
      class Ce extends d.w0 {
        constructor(Me) {
          super(),
            (this.isStopped = !1),
            Me ? ((this.destination = Me), (0, d.Nn)(Me) && Me.add(this)) : (this.destination = we);
        }
        static create(Me, Ke, pt) {
          return new je(Me, Ke, pt);
        }
        next(Me) {
          this.isStopped
            ? Ot(
                (function Ve(ye) {
                  return Ae('N', ye, void 0);
                })(Me),
                this,
              )
            : this._next(Me);
        }
        error(Me) {
          this.isStopped
            ? Ot(
                (function _e(ye) {
                  return Ae('E', void 0, ye);
                })(Me),
                this,
              )
            : ((this.isStopped = !0), this._error(Me));
        }
        complete() {
          this.isStopped ? Ot(Oe, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(Me) {
          this.destination.next(Me);
        }
        _error(Me) {
          try {
            this.destination.error(Me);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const qe = Function.prototype.bind;
      function se(ye, Me) {
        return qe.call(ye, Me);
      }
      class xe {
        constructor(Me) {
          this.partialObserver = Me;
        }
        next(Me) {
          const { partialObserver: Ke } = this;
          if (Ke.next)
            try {
              Ke.next(Me);
            } catch (pt) {
              Xe(pt);
            }
        }
        error(Me) {
          const { partialObserver: Ke } = this;
          if (Ke.error)
            try {
              Ke.error(Me);
            } catch (pt) {
              Xe(pt);
            }
          else Xe(Me);
        }
        complete() {
          const { partialObserver: Me } = this;
          if (Me.complete)
            try {
              Me.complete();
            } catch (Ke) {
              Xe(Ke);
            }
        }
      }
      class je extends Ce {
        constructor(Me, Ke, pt) {
          let q;
          if ((super(), (0, w.m)(Me) || !Me)) q = { next: Me ?? void 0, error: Ke ?? void 0, complete: pt ?? void 0 };
          else {
            let de;
            this && Y.v.useDeprecatedNextContext
              ? ((de = Object.create(Me)),
                (de.unsubscribe = () => this.unsubscribe()),
                (q = {
                  next: Me.next && se(Me.next, de),
                  error: Me.error && se(Me.error, de),
                  complete: Me.complete && se(Me.complete, de),
                }))
              : (q = Me);
          }
          this.destination = new xe(q);
        }
      }
      function Xe(ye) {
        Y.v.useDeprecatedSynchronousErrorHandling ? (0, oe.O)(ye) : (0, ee.h)(ye);
      }
      function Ot(ye, Me) {
        const { onStoppedNotification: Ke } = Y.v;
        Ke && he.z.setTimeout(() => Ke(ye, Me));
      }
      const we = {
        closed: !0,
        next: te,
        error: function Ze(ye) {
          throw ye;
        },
        complete: te,
      };
    },
    727: (st, De, R) => {
      R.d(De, { Lc: () => Oe, w0: () => te, Nn: () => _e });
      var w = R(576);
      const Y = (0, R(3888).d)(
        (Ae) =>
          function (oe) {
            Ae(this),
              (this.message = oe
                ? `${oe.length} errors occurred during unsubscription:\n${oe
                    .map((Ce, qe) => `${qe + 1}) ${Ce.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = oe);
          },
      );
      var ee = R(8737);
      class te {
        constructor(he) {
          (this.initialTeardown = he), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
        }
        unsubscribe() {
          let he;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: oe } = this;
            if (oe)
              if (((this._parentage = null), Array.isArray(oe))) for (const se of oe) se.remove(this);
              else oe.remove(this);
            const { initialTeardown: Ce } = this;
            if ((0, w.m)(Ce))
              try {
                Ce();
              } catch (se) {
                he = se instanceof Y ? se.errors : [se];
              }
            const { _finalizers: qe } = this;
            if (qe) {
              this._finalizers = null;
              for (const se of qe)
                try {
                  Ve(se);
                } catch (xe) {
                  (he = he ?? []), xe instanceof Y ? (he = [...he, ...xe.errors]) : he.push(xe);
                }
            }
            if (he) throw new Y(he);
          }
        }
        add(he) {
          var oe;
          if (he && he !== this)
            if (this.closed) Ve(he);
            else {
              if (he instanceof te) {
                if (he.closed || he._hasParent(this)) return;
                he._addParent(this);
              }
              (this._finalizers = null !== (oe = this._finalizers) && void 0 !== oe ? oe : []).push(he);
            }
        }
        _hasParent(he) {
          const { _parentage: oe } = this;
          return oe === he || (Array.isArray(oe) && oe.includes(he));
        }
        _addParent(he) {
          const { _parentage: oe } = this;
          this._parentage = Array.isArray(oe) ? (oe.push(he), oe) : oe ? [oe, he] : he;
        }
        _removeParent(he) {
          const { _parentage: oe } = this;
          oe === he ? (this._parentage = null) : Array.isArray(oe) && (0, ee.P)(oe, he);
        }
        remove(he) {
          const { _finalizers: oe } = this;
          oe && (0, ee.P)(oe, he), he instanceof te && he._removeParent(this);
        }
      }
      te.EMPTY = (() => {
        const Ae = new te();
        return (Ae.closed = !0), Ae;
      })();
      const Oe = te.EMPTY;
      function _e(Ae) {
        return (
          Ae instanceof te ||
          (Ae && 'closed' in Ae && (0, w.m)(Ae.remove) && (0, w.m)(Ae.add) && (0, w.m)(Ae.unsubscribe))
        );
      }
      function Ve(Ae) {
        (0, w.m)(Ae) ? Ae() : Ae.unsubscribe();
      }
    },
    2416: (st, De, R) => {
      R.d(De, { v: () => w });
      const w = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    9841: (st, De, R) => {
      R.d(De, { a: () => he });
      var w = R(9751),
        d = R(4742),
        Y = R(2076),
        ee = R(4671),
        te = R(3268),
        Oe = R(7669),
        _e = R(1810),
        Ve = R(5403),
        Ae = R(9672);
      function he(...qe) {
        const se = (0, Oe.yG)(qe),
          xe = (0, Oe.jO)(qe),
          { args: je, keys: Xe } = (0, d.D)(qe);
        if (0 === je.length) return (0, Y.D)([], se);
        const Ze = new w.y(
          (function oe(qe, se, xe = ee.y) {
            return (je) => {
              Ce(
                se,
                () => {
                  const { length: Xe } = qe,
                    Ze = new Array(Xe);
                  let Ot = Xe,
                    we = Xe;
                  for (let ye = 0; ye < Xe; ye++)
                    Ce(
                      se,
                      () => {
                        const Me = (0, Y.D)(qe[ye], se);
                        let Ke = !1;
                        Me.subscribe(
                          (0, Ve.x)(
                            je,
                            (pt) => {
                              (Ze[ye] = pt), Ke || ((Ke = !0), we--), we || je.next(xe(Ze.slice()));
                            },
                            () => {
                              --Ot || je.complete();
                            },
                          ),
                        );
                      },
                      je,
                    );
                },
                je,
              );
            };
          })(je, se, Xe ? (Ot) => (0, _e.n)(Xe, Ot) : ee.y),
        );
        return xe ? Ze.pipe((0, te.Z)(xe)) : Ze;
      }
      function Ce(qe, se, xe) {
        qe ? (0, Ae.f)(xe, qe, se) : se();
      }
    },
    515: (st, De, R) => {
      R.d(De, { E: () => d });
      const d = new (R(9751).y)((te) => te.complete());
    },
    2076: (st, De, R) => {
      R.d(De, { D: () => pt });
      var w = R(8421),
        d = R(9672),
        Y = R(4482),
        ee = R(5403);
      function te(q, de = 0) {
        return (0, Y.e)((Q, Se) => {
          Q.subscribe(
            (0, ee.x)(
              Se,
              ($e) => (0, d.f)(Se, q, () => Se.next($e), de),
              () => (0, d.f)(Se, q, () => Se.complete(), de),
              ($e) => (0, d.f)(Se, q, () => Se.error($e), de),
            ),
          );
        });
      }
      function Oe(q, de = 0) {
        return (0, Y.e)((Q, Se) => {
          Se.add(q.schedule(() => Q.subscribe(Se), de));
        });
      }
      var Ae = R(9751),
        oe = R(2202),
        Ce = R(576);
      function se(q, de) {
        if (!q) throw new Error('Iterable cannot be null');
        return new Ae.y((Q) => {
          (0, d.f)(Q, de, () => {
            const Se = q[Symbol.asyncIterator]();
            (0, d.f)(
              Q,
              de,
              () => {
                Se.next().then(($e) => {
                  $e.done ? Q.complete() : Q.next($e.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      var xe = R(3670),
        je = R(8239),
        Xe = R(1144),
        Ze = R(6495),
        Ot = R(2206),
        we = R(4532),
        ye = R(3260);
      function pt(q, de) {
        return de
          ? (function Ke(q, de) {
              if (null != q) {
                if ((0, xe.c)(q))
                  return (function _e(q, de) {
                    return (0, w.Xf)(q).pipe(Oe(de), te(de));
                  })(q, de);
                if ((0, Xe.z)(q))
                  return (function he(q, de) {
                    return new Ae.y((Q) => {
                      let Se = 0;
                      return de.schedule(function () {
                        Se === q.length ? Q.complete() : (Q.next(q[Se++]), Q.closed || this.schedule());
                      });
                    });
                  })(q, de);
                if ((0, je.t)(q))
                  return (function Ve(q, de) {
                    return (0, w.Xf)(q).pipe(Oe(de), te(de));
                  })(q, de);
                if ((0, Ot.D)(q)) return se(q, de);
                if ((0, Ze.T)(q))
                  return (function qe(q, de) {
                    return new Ae.y((Q) => {
                      let Se;
                      return (
                        (0, d.f)(Q, de, () => {
                          (Se = q[oe.h]()),
                            (0, d.f)(
                              Q,
                              de,
                              () => {
                                let $e, dt;
                                try {
                                  ({ value: $e, done: dt } = Se.next());
                                } catch (Ie) {
                                  return void Q.error(Ie);
                                }
                                dt ? Q.complete() : Q.next($e);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => (0, Ce.m)(Se?.return) && Se.return()
                      );
                    });
                  })(q, de);
                if ((0, ye.L)(q))
                  return (function Me(q, de) {
                    return se((0, ye.Q)(q), de);
                  })(q, de);
              }
              throw (0, we.z)(q);
            })(q, de)
          : (0, w.Xf)(q);
      }
    },
    8421: (st, De, R) => {
      R.d(De, { Xf: () => qe });
      var w = R(655),
        d = R(1144),
        Y = R(8239),
        ee = R(9751),
        te = R(3670),
        Oe = R(2206),
        _e = R(4532),
        Ve = R(6495),
        Ae = R(3260),
        he = R(576),
        oe = R(7849),
        Ce = R(8822);
      function qe(ye) {
        if (ye instanceof ee.y) return ye;
        if (null != ye) {
          if ((0, te.c)(ye))
            return (function se(ye) {
              return new ee.y((Me) => {
                const Ke = ye[Ce.L]();
                if ((0, he.m)(Ke.subscribe)) return Ke.subscribe(Me);
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              });
            })(ye);
          if ((0, d.z)(ye))
            return (function xe(ye) {
              return new ee.y((Me) => {
                for (let Ke = 0; Ke < ye.length && !Me.closed; Ke++) Me.next(ye[Ke]);
                Me.complete();
              });
            })(ye);
          if ((0, Y.t)(ye))
            return (function je(ye) {
              return new ee.y((Me) => {
                ye.then(
                  (Ke) => {
                    Me.closed || (Me.next(Ke), Me.complete());
                  },
                  (Ke) => Me.error(Ke),
                ).then(null, oe.h);
              });
            })(ye);
          if ((0, Oe.D)(ye)) return Ze(ye);
          if ((0, Ve.T)(ye))
            return (function Xe(ye) {
              return new ee.y((Me) => {
                for (const Ke of ye) if ((Me.next(Ke), Me.closed)) return;
                Me.complete();
              });
            })(ye);
          if ((0, Ae.L)(ye))
            return (function Ot(ye) {
              return Ze((0, Ae.Q)(ye));
            })(ye);
        }
        throw (0, _e.z)(ye);
      }
      function Ze(ye) {
        return new ee.y((Me) => {
          (function we(ye, Me) {
            var Ke, pt, q, de;
            return (0, w.mG)(this, void 0, void 0, function* () {
              try {
                for (Ke = (0, w.KL)(ye); !(pt = yield Ke.next()).done; ) if ((Me.next(pt.value), Me.closed)) return;
              } catch (Q) {
                q = { error: Q };
              } finally {
                try {
                  pt && !pt.done && (de = Ke.return) && (yield de.call(Ke));
                } finally {
                  if (q) throw q.error;
                }
              }
              Me.complete();
            });
          })(ye, Me).catch((Ke) => Me.error(Ke));
        });
      }
    },
    9646: (st, De, R) => {
      R.d(De, { of: () => Y });
      var w = R(7669),
        d = R(2076);
      function Y(...ee) {
        const te = (0, w.yG)(ee);
        return (0, d.D)(ee, te);
      }
    },
    5403: (st, De, R) => {
      R.d(De, { x: () => d });
      var w = R(2961);
      function d(ee, te, Oe, _e, Ve) {
        return new Y(ee, te, Oe, _e, Ve);
      }
      class Y extends w.Lv {
        constructor(te, Oe, _e, Ve, Ae, he) {
          super(te),
            (this.onFinalize = Ae),
            (this.shouldUnsubscribe = he),
            (this._next = Oe
              ? function (oe) {
                  try {
                    Oe(oe);
                  } catch (Ce) {
                    te.error(Ce);
                  }
                }
              : super._next),
            (this._error = Ve
              ? function (oe) {
                  try {
                    Ve(oe);
                  } catch (Ce) {
                    te.error(Ce);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = _e
              ? function () {
                  try {
                    _e();
                  } catch (oe) {
                    te.error(oe);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var te;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Oe } = this;
            super.unsubscribe(), !Oe && (null === (te = this.onFinalize) || void 0 === te || te.call(this));
          }
        }
      }
    },
    4351: (st, De, R) => {
      R.d(De, { b: () => Y });
      var w = R(5577),
        d = R(576);
      function Y(ee, te) {
        return (0, d.m)(te) ? (0, w.z)(ee, te, 1) : (0, w.z)(ee, 1);
      }
    },
    9300: (st, De, R) => {
      R.d(De, { h: () => Y });
      var w = R(4482),
        d = R(5403);
      function Y(ee, te) {
        return (0, w.e)((Oe, _e) => {
          let Ve = 0;
          Oe.subscribe((0, d.x)(_e, (Ae) => ee.call(te, Ae, Ve++) && _e.next(Ae)));
        });
      }
    },
    4004: (st, De, R) => {
      R.d(De, { U: () => Y });
      var w = R(4482),
        d = R(5403);
      function Y(ee, te) {
        return (0, w.e)((Oe, _e) => {
          let Ve = 0;
          Oe.subscribe(
            (0, d.x)(_e, (Ae) => {
              _e.next(ee.call(te, Ae, Ve++));
            }),
          );
        });
      }
    },
    8189: (st, De, R) => {
      R.d(De, { J: () => Y });
      var w = R(5577),
        d = R(4671);
      function Y(ee = 1 / 0) {
        return (0, w.z)(d.y, ee);
      }
    },
    5577: (st, De, R) => {
      R.d(De, { z: () => Ve });
      var w = R(4004),
        d = R(8421),
        Y = R(4482),
        ee = R(9672),
        te = R(5403),
        _e = R(576);
      function Ve(Ae, he, oe = 1 / 0) {
        return (0, _e.m)(he)
          ? Ve((Ce, qe) => (0, w.U)((se, xe) => he(Ce, se, qe, xe))((0, d.Xf)(Ae(Ce, qe))), oe)
          : ('number' == typeof he && (oe = he),
            (0, Y.e)((Ce, qe) =>
              (function Oe(Ae, he, oe, Ce, qe, se, xe, je) {
                const Xe = [];
                let Ze = 0,
                  Ot = 0,
                  we = !1;
                const ye = () => {
                    we && !Xe.length && !Ze && he.complete();
                  },
                  Me = (pt) => (Ze < Ce ? Ke(pt) : Xe.push(pt)),
                  Ke = (pt) => {
                    se && he.next(pt), Ze++;
                    let q = !1;
                    (0, d.Xf)(oe(pt, Ot++)).subscribe(
                      (0, te.x)(
                        he,
                        (de) => {
                          qe?.(de), se ? Me(de) : he.next(de);
                        },
                        () => {
                          q = !0;
                        },
                        void 0,
                        () => {
                          if (q)
                            try {
                              for (Ze--; Xe.length && Ze < Ce; ) {
                                const de = Xe.shift();
                                xe ? (0, ee.f)(he, xe, () => Ke(de)) : Ke(de);
                              }
                              ye();
                            } catch (de) {
                              he.error(de);
                            }
                        },
                      ),
                    );
                  };
                return (
                  Ae.subscribe(
                    (0, te.x)(he, Me, () => {
                      (we = !0), ye();
                    }),
                  ),
                  () => {
                    je?.();
                  }
                );
              })(Ce, qe, Ae, oe),
            ));
      }
    },
    3900: (st, De, R) => {
      R.d(De, { w: () => ee });
      var w = R(8421),
        d = R(4482),
        Y = R(5403);
      function ee(te, Oe) {
        return (0, d.e)((_e, Ve) => {
          let Ae = null,
            he = 0,
            oe = !1;
          const Ce = () => oe && !Ae && Ve.complete();
          _e.subscribe(
            (0, Y.x)(
              Ve,
              (qe) => {
                Ae?.unsubscribe();
                let se = 0;
                const xe = he++;
                (0, w.Xf)(te(qe, xe)).subscribe(
                  (Ae = (0, Y.x)(
                    Ve,
                    (je) => Ve.next(Oe ? Oe(qe, je, xe, se++) : je),
                    () => {
                      (Ae = null), Ce();
                    },
                  )),
                );
              },
              () => {
                (oe = !0), Ce();
              },
            ),
          );
        });
      }
    },
    8505: (st, De, R) => {
      R.d(De, { b: () => te });
      var w = R(576),
        d = R(4482),
        Y = R(5403),
        ee = R(4671);
      function te(Oe, _e, Ve) {
        const Ae = (0, w.m)(Oe) || _e || Ve ? { next: Oe, error: _e, complete: Ve } : Oe;
        return Ae
          ? (0, d.e)((he, oe) => {
              var Ce;
              null === (Ce = Ae.subscribe) || void 0 === Ce || Ce.call(Ae);
              let qe = !0;
              he.subscribe(
                (0, Y.x)(
                  oe,
                  (se) => {
                    var xe;
                    null === (xe = Ae.next) || void 0 === xe || xe.call(Ae, se), oe.next(se);
                  },
                  () => {
                    var se;
                    (qe = !1), null === (se = Ae.complete) || void 0 === se || se.call(Ae), oe.complete();
                  },
                  (se) => {
                    var xe;
                    (qe = !1), null === (xe = Ae.error) || void 0 === xe || xe.call(Ae, se), oe.error(se);
                  },
                  () => {
                    var se, xe;
                    qe && (null === (se = Ae.unsubscribe) || void 0 === se || se.call(Ae)),
                      null === (xe = Ae.finalize) || void 0 === xe || xe.call(Ae);
                  },
                ),
              );
            })
          : ee.y;
      }
    },
    3410: (st, De, R) => {
      R.d(De, { z: () => w });
      const w = {
        setTimeout(d, Y, ...ee) {
          const { delegate: te } = w;
          return te?.setTimeout ? te.setTimeout(d, Y, ...ee) : setTimeout(d, Y, ...ee);
        },
        clearTimeout(d) {
          const { delegate: Y } = w;
          return (Y?.clearTimeout || clearTimeout)(d);
        },
        delegate: void 0,
      };
    },
    2202: (st, De, R) => {
      R.d(De, { h: () => d });
      const d = (function w() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      })();
    },
    8822: (st, De, R) => {
      R.d(De, { L: () => w });
      const w = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (st, De, R) => {
      R.d(De, { _6: () => Oe, jO: () => ee, yG: () => te });
      var w = R(576);
      function Y(_e) {
        return _e[_e.length - 1];
      }
      function ee(_e) {
        return (0, w.m)(Y(_e)) ? _e.pop() : void 0;
      }
      function te(_e) {
        return (function d(_e) {
          return _e && (0, w.m)(_e.schedule);
        })(Y(_e))
          ? _e.pop()
          : void 0;
      }
      function Oe(_e, Ve) {
        return 'number' == typeof Y(_e) ? _e.pop() : Ve;
      }
    },
    4742: (st, De, R) => {
      R.d(De, { D: () => te });
      const { isArray: w } = Array,
        { getPrototypeOf: d, prototype: Y, keys: ee } = Object;
      function te(_e) {
        if (1 === _e.length) {
          const Ve = _e[0];
          if (w(Ve)) return { args: Ve, keys: null };
          if (
            (function Oe(_e) {
              return _e && 'object' == typeof _e && d(_e) === Y;
            })(Ve)
          ) {
            const Ae = ee(Ve);
            return { args: Ae.map((he) => Ve[he]), keys: Ae };
          }
        }
        return { args: _e, keys: null };
      }
    },
    8737: (st, De, R) => {
      function w(d, Y) {
        if (d) {
          const ee = d.indexOf(Y);
          0 <= ee && d.splice(ee, 1);
        }
      }
      R.d(De, { P: () => w });
    },
    3888: (st, De, R) => {
      function w(d) {
        const ee = d((te) => {
          Error.call(te), (te.stack = new Error().stack);
        });
        return (ee.prototype = Object.create(Error.prototype)), (ee.prototype.constructor = ee), ee;
      }
      R.d(De, { d: () => w });
    },
    1810: (st, De, R) => {
      function w(d, Y) {
        return d.reduce((ee, te, Oe) => ((ee[te] = Y[Oe]), ee), {});
      }
      R.d(De, { n: () => w });
    },
    2806: (st, De, R) => {
      R.d(De, { O: () => ee, x: () => Y });
      var w = R(2416);
      let d = null;
      function Y(te) {
        if (w.v.useDeprecatedSynchronousErrorHandling) {
          const Oe = !d;
          if ((Oe && (d = { errorThrown: !1, error: null }), te(), Oe)) {
            const { errorThrown: _e, error: Ve } = d;
            if (((d = null), _e)) throw Ve;
          }
        } else te();
      }
      function ee(te) {
        w.v.useDeprecatedSynchronousErrorHandling && d && ((d.errorThrown = !0), (d.error = te));
      }
    },
    9672: (st, De, R) => {
      function w(d, Y, ee, te = 0, Oe = !1) {
        const _e = Y.schedule(function () {
          ee(), Oe ? d.add(this.schedule(null, te)) : this.unsubscribe();
        }, te);
        if ((d.add(_e), !Oe)) return _e;
      }
      R.d(De, { f: () => w });
    },
    4671: (st, De, R) => {
      function w(d) {
        return d;
      }
      R.d(De, { y: () => w });
    },
    1144: (st, De, R) => {
      R.d(De, { z: () => w });
      const w = (d) => d && 'number' == typeof d.length && 'function' != typeof d;
    },
    2206: (st, De, R) => {
      R.d(De, { D: () => d });
      var w = R(576);
      function d(Y) {
        return Symbol.asyncIterator && (0, w.m)(Y?.[Symbol.asyncIterator]);
      }
    },
    576: (st, De, R) => {
      function w(d) {
        return 'function' == typeof d;
      }
      R.d(De, { m: () => w });
    },
    3670: (st, De, R) => {
      R.d(De, { c: () => Y });
      var w = R(8822),
        d = R(576);
      function Y(ee) {
        return (0, d.m)(ee[w.L]);
      }
    },
    6495: (st, De, R) => {
      R.d(De, { T: () => Y });
      var w = R(2202),
        d = R(576);
      function Y(ee) {
        return (0, d.m)(ee?.[w.h]);
      }
    },
    8239: (st, De, R) => {
      R.d(De, { t: () => d });
      var w = R(576);
      function d(Y) {
        return (0, w.m)(Y?.then);
      }
    },
    3260: (st, De, R) => {
      R.d(De, { L: () => ee, Q: () => Y });
      var w = R(655),
        d = R(576);
      function Y(te) {
        return (0, w.FC)(this, arguments, function* () {
          const _e = te.getReader();
          try {
            for (;;) {
              const { value: Ve, done: Ae } = yield (0, w.qq)(_e.read());
              if (Ae) return yield (0, w.qq)(void 0);
              yield yield (0, w.qq)(Ve);
            }
          } finally {
            _e.releaseLock();
          }
        });
      }
      function ee(te) {
        return (0, d.m)(te?.getReader);
      }
    },
    4482: (st, De, R) => {
      R.d(De, { A: () => d, e: () => Y });
      var w = R(576);
      function d(ee) {
        return (0, w.m)(ee?.lift);
      }
      function Y(ee) {
        return (te) => {
          if (d(te))
            return te.lift(function (Oe) {
              try {
                return ee(Oe, this);
              } catch (_e) {
                this.error(_e);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (st, De, R) => {
      R.d(De, { Z: () => ee });
      var w = R(4004);
      const { isArray: d } = Array;
      function ee(te) {
        return (0, w.U)((Oe) =>
          (function Y(te, Oe) {
            return d(Oe) ? te(...Oe) : te(Oe);
          })(te, Oe),
        );
      }
    },
    9635: (st, De, R) => {
      R.d(De, { U: () => Y, z: () => d });
      var w = R(4671);
      function d(...ee) {
        return Y(ee);
      }
      function Y(ee) {
        return 0 === ee.length
          ? w.y
          : 1 === ee.length
          ? ee[0]
          : function (Oe) {
              return ee.reduce((_e, Ve) => Ve(_e), Oe);
            };
      }
    },
    7849: (st, De, R) => {
      R.d(De, { h: () => Y });
      var w = R(2416),
        d = R(3410);
      function Y(ee) {
        d.z.setTimeout(() => {
          const { onUnhandledError: te } = w.v;
          if (!te) throw ee;
          te(ee);
        });
      }
    },
    4532: (st, De, R) => {
      function w(d) {
        return new TypeError(
          `You provided ${
            null !== d && 'object' == typeof d ? 'an invalid object' : `'${d}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      R.d(De, { z: () => w });
    },
    655: (st, De, R) => {
      function Ce(W, Z, le, pe) {
        return new (le || (le = Promise))(function (me, Ue) {
          function ft(wt) {
            try {
              Je(pe.next(wt));
            } catch (Dt) {
              Ue(Dt);
            }
          }
          function Zt(wt) {
            try {
              Je(pe.throw(wt));
            } catch (Dt) {
              Ue(Dt);
            }
          }
          function Je(wt) {
            wt.done
              ? me(wt.value)
              : (function Te(me) {
                  return me instanceof le
                    ? me
                    : new le(function (Ue) {
                        Ue(me);
                      });
                })(wt.value).then(ft, Zt);
          }
          Je((pe = pe.apply(W, Z || [])).next());
        });
      }
      function ye(W) {
        return this instanceof ye ? ((this.v = W), this) : new ye(W);
      }
      function Me(W, Z, le) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var Te,
          pe = le.apply(W, Z || []),
          me = [];
        return (
          (Te = {}),
          Ue('next'),
          Ue('throw'),
          Ue('return'),
          (Te[Symbol.asyncIterator] = function () {
            return this;
          }),
          Te
        );
        function Ue(Rt) {
          pe[Rt] &&
            (Te[Rt] = function (vn) {
              return new Promise(function (zt, at) {
                me.push([Rt, vn, zt, at]) > 1 || ft(Rt, vn);
              });
            });
        }
        function ft(Rt, vn) {
          try {
            !(function Zt(Rt) {
              Rt.value instanceof ye ? Promise.resolve(Rt.value.v).then(Je, wt) : Dt(me[0][2], Rt);
            })(pe[Rt](vn));
          } catch (zt) {
            Dt(me[0][3], zt);
          }
        }
        function Je(Rt) {
          ft('next', Rt);
        }
        function wt(Rt) {
          ft('throw', Rt);
        }
        function Dt(Rt, vn) {
          Rt(vn), me.shift(), me.length && ft(me[0][0], me[0][1]);
        }
      }
      function pt(W) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var le,
          Z = W[Symbol.asyncIterator];
        return Z
          ? Z.call(W)
          : ((W = (function je(W) {
              var Z = 'function' == typeof Symbol && Symbol.iterator,
                le = Z && W[Z],
                pe = 0;
              if (le) return le.call(W);
              if (W && 'number' == typeof W.length)
                return {
                  next: function () {
                    return W && pe >= W.length && (W = void 0), { value: W && W[pe++], done: !W };
                  },
                };
              throw new TypeError(Z ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            })(W)),
            (le = {}),
            pe('next'),
            pe('throw'),
            pe('return'),
            (le[Symbol.asyncIterator] = function () {
              return this;
            }),
            le);
        function pe(me) {
          le[me] =
            W[me] &&
            function (Ue) {
              return new Promise(function (ft, Zt) {
                !(function Te(me, Ue, ft, Zt) {
                  Promise.resolve(Zt).then(function (Je) {
                    me({ value: Je, done: ft });
                  }, Ue);
                })(ft, Zt, (Ue = W[me](Ue)).done, Ue.value);
              });
            };
        }
      }
      R.d(De, { FC: () => Me, KL: () => pt, mG: () => Ce, qq: () => ye });
    },
    6895: (st, De, R) => {
      R.d(De, {
        HT: () => ee,
        JF: () => ui,
        K0: () => Oe,
        Mx: () => Yt,
        O5: () => Le,
        Ov: () => ir,
        S$: () => je,
        Ye: () => we,
        ax: () => zn,
        bD: () => ko,
        ez: () => ho,
        q: () => Y,
        sg: () => zn,
        w_: () => te,
      });
      var w = R(8256);
      let d = null;
      function Y() {
        return d;
      }
      function ee(m) {
        d || (d = m);
      }
      class te {}
      const Oe = new w.OlP('DocumentToken');
      let _e = (() => {
          class m {
            historyGo(y) {
              throw new Error('Not implemented');
            }
          }
          return (
            (m.ɵfac = function (y) {
              return new (y || m)();
            }),
            (m.ɵprov = w.Yz7({
              token: m,
              factory: function () {
                return (function Ve() {
                  return (0, w.LFG)(he);
                })();
              },
              providedIn: 'platform',
            })),
            m
          );
        })(),
        he = (() => {
          class m extends _e {
            constructor(y) {
              super(), (this._doc = y), (this._location = window.location), (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return Y().getBaseHref(this._doc);
            }
            onPopState(y) {
              const S = Y().getGlobalEventTarget(this._doc, 'window');
              return S.addEventListener('popstate', y, !1), () => S.removeEventListener('popstate', y);
            }
            onHashChange(y) {
              const S = Y().getGlobalEventTarget(this._doc, 'window');
              return S.addEventListener('hashchange', y, !1), () => S.removeEventListener('hashchange', y);
            }
            get href() {
              return this._location.href;
            }
            get protocol() {
              return this._location.protocol;
            }
            get hostname() {
              return this._location.hostname;
            }
            get port() {
              return this._location.port;
            }
            get pathname() {
              return this._location.pathname;
            }
            get search() {
              return this._location.search;
            }
            get hash() {
              return this._location.hash;
            }
            set pathname(y) {
              this._location.pathname = y;
            }
            pushState(y, S, P) {
              oe() ? this._history.pushState(y, S, P) : (this._location.hash = P);
            }
            replaceState(y, S, P) {
              oe() ? this._history.replaceState(y, S, P) : (this._location.hash = P);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            historyGo(y = 0) {
              this._history.go(y);
            }
            getState() {
              return this._history.state;
            }
          }
          return (
            (m.ɵfac = function (y) {
              return new (y || m)(w.LFG(Oe));
            }),
            (m.ɵprov = w.Yz7({
              token: m,
              factory: function () {
                return (function Ce() {
                  return new he((0, w.LFG)(Oe));
                })();
              },
              providedIn: 'platform',
            })),
            m
          );
        })();
      function oe() {
        return !!window.history.pushState;
      }
      function qe(m, C) {
        if (0 == m.length) return C;
        if (0 == C.length) return m;
        let y = 0;
        return (
          m.endsWith('/') && y++, C.startsWith('/') && y++, 2 == y ? m + C.substring(1) : 1 == y ? m + C : m + '/' + C
        );
      }
      function se(m) {
        const C = m.match(/#|\?|$/),
          y = (C && C.index) || m.length;
        return m.slice(0, y - ('/' === m[y - 1] ? 1 : 0)) + m.slice(y);
      }
      function xe(m) {
        return m && '?' !== m[0] ? '?' + m : m;
      }
      let je = (() => {
        class m {
          historyGo(y) {
            throw new Error('Not implemented');
          }
        }
        return (
          (m.ɵfac = function (y) {
            return new (y || m)();
          }),
          (m.ɵprov = w.Yz7({
            token: m,
            factory: function () {
              return (0, w.f3M)(Ze);
            },
            providedIn: 'root',
          })),
          m
        );
      })();
      const Xe = new w.OlP('appBaseHref');
      let Ze = (() => {
          class m extends je {
            constructor(y, S) {
              super(),
                (this._platformLocation = y),
                (this._removeListenerFns = []),
                (this._baseHref =
                  S ?? this._platformLocation.getBaseHrefFromDOM() ?? (0, w.f3M)(Oe).location?.origin ?? '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(y) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(y),
                this._platformLocation.onHashChange(y),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(y) {
              return qe(this._baseHref, y);
            }
            path(y = !1) {
              const S = this._platformLocation.pathname + xe(this._platformLocation.search),
                P = this._platformLocation.hash;
              return P && y ? `${S}${P}` : S;
            }
            pushState(y, S, P, K) {
              const ce = this.prepareExternalUrl(P + xe(K));
              this._platformLocation.pushState(y, S, ce);
            }
            replaceState(y, S, P, K) {
              const ce = this.prepareExternalUrl(P + xe(K));
              this._platformLocation.replaceState(y, S, ce);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(y = 0) {
              this._platformLocation.historyGo?.(y);
            }
          }
          return (
            (m.ɵfac = function (y) {
              return new (y || m)(w.LFG(_e), w.LFG(Xe, 8));
            }),
            (m.ɵprov = w.Yz7({ token: m, factory: m.ɵfac, providedIn: 'root' })),
            m
          );
        })(),
        we = (() => {
          class m {
            constructor(y) {
              (this._subject = new w.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = y);
              const S = this._locationStrategy.getBaseHref();
              (this._basePath = (function pt(m) {
                if (new RegExp('^(https?:)?//').test(m)) {
                  const [, y] = m.split(/\/\/[^\/]+/);
                  return y;
                }
                return m;
              })(se(Ke(S)))),
                this._locationStrategy.onPopState((P) => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: P.state, type: P.type });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(y = !1) {
              return this.normalize(this._locationStrategy.path(y));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(y, S = '') {
              return this.path() == this.normalize(y + xe(S));
            }
            normalize(y) {
              return m.stripTrailingSlash(
                (function Me(m, C) {
                  if (!m || !C.startsWith(m)) return C;
                  const y = C.substring(m.length);
                  return '' === y || ['/', ';', '?', '#'].includes(y[0]) ? y : C;
                })(this._basePath, Ke(y)),
              );
            }
            prepareExternalUrl(y) {
              return y && '/' !== y[0] && (y = '/' + y), this._locationStrategy.prepareExternalUrl(y);
            }
            go(y, S = '', P = null) {
              this._locationStrategy.pushState(P, '', y, S),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(y + xe(S)), P);
            }
            replaceState(y, S = '', P = null) {
              this._locationStrategy.replaceState(P, '', y, S),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(y + xe(S)), P);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(y = 0) {
              this._locationStrategy.historyGo?.(y);
            }
            onUrlChange(y) {
              return (
                this._urlChangeListeners.push(y),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((S) => {
                    this._notifyUrlChangeListeners(S.url, S.state);
                  })),
                () => {
                  const S = this._urlChangeListeners.indexOf(y);
                  this._urlChangeListeners.splice(S, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(), (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(y = '', S) {
              this._urlChangeListeners.forEach((P) => P(y, S));
            }
            subscribe(y, S, P) {
              return this._subject.subscribe({ next: y, error: S, complete: P });
            }
          }
          return (
            (m.normalizeQueryParams = xe),
            (m.joinWithSlash = qe),
            (m.stripTrailingSlash = se),
            (m.ɵfac = function (y) {
              return new (y || m)(w.LFG(je));
            }),
            (m.ɵprov = w.Yz7({
              token: m,
              factory: function () {
                return (function ye() {
                  return new we((0, w.LFG)(je));
                })();
              },
              providedIn: 'root',
            })),
            m
          );
        })();
      function Ke(m) {
        return m.replace(/\/index.html$/, '');
      }
      function Yt(m, C) {
        C = encodeURIComponent(C);
        for (const y of m.split(';')) {
          const S = y.indexOf('='),
            [P, K] = -1 == S ? [y, ''] : [y.slice(0, S), y.slice(S + 1)];
          if (P.trim() === C) return decodeURIComponent(K);
        }
        return null;
      }
      class Gn {
        constructor(C, y, S, P) {
          (this.$implicit = C), (this.ngForOf = y), (this.index = S), (this.count = P);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let zn = (() => {
        class m {
          set ngForOf(y) {
            (this._ngForOf = y), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(y, S, P) {
            (this._viewContainer = y),
              (this._template = S),
              (this._differs = P),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              !this._differ && y && (this._differ = this._differs.find(y).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const S = this._viewContainer;
            y.forEachOperation((P, K, ce) => {
              if (null == P.previousIndex)
                S.createEmbeddedView(this._template, new Gn(P.item, this._ngForOf, -1, -1), null === ce ? void 0 : ce);
              else if (null == ce) S.remove(null === K ? void 0 : K);
              else if (null !== K) {
                const Be = S.get(K);
                S.move(Be, ce), bn(Be, P);
              }
            });
            for (let P = 0, K = S.length; P < K; P++) {
              const Be = S.get(P).context;
              (Be.index = P), (Be.count = K), (Be.ngForOf = this._ngForOf);
            }
            y.forEachIdentityChange((P) => {
              bn(S.get(P.currentIndex), P);
            });
          }
          static ngTemplateContextGuard(y, S) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (y) {
            return new (y || m)(w.Y36(w.s_b), w.Y36(w.Rgc), w.Y36(w.ZZ4));
          }),
          (m.ɵdir = w.lG2({
            type: m,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
            standalone: !0,
          })),
          m
        );
      })();
      function bn(m, C) {
        m.context.$implicit = C.item;
      }
      let Le = (() => {
        class m {
          constructor(y, S) {
            (this._viewContainer = y),
              (this._context = new ot()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = S);
          }
          set ngIf(y) {
            (this._context.$implicit = this._context.ngIf = y), this._updateView();
          }
          set ngIfThen(y) {
            Ut('ngIfThen', y), (this._thenTemplateRef = y), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(y) {
            Ut('ngIfElse', y), (this._elseTemplateRef = y), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(y, S) {
            return !0;
          }
        }
        return (
          (m.ɵfac = function (y) {
            return new (y || m)(w.Y36(w.s_b), w.Y36(w.Rgc));
          }),
          (m.ɵdir = w.lG2({
            type: m,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
            standalone: !0,
          })),
          m
        );
      })();
      class ot {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Ut(m, C) {
        if (C && !C.createEmbeddedView) throw new Error(`${m} must be a TemplateRef, but received '${(0, w.AaK)(C)}'.`);
      }
      class Qn {
        createSubscription(C, y) {
          return C.subscribe({
            next: y,
            error: (S) => {
              throw S;
            },
          });
        }
        dispose(C) {
          C.unsubscribe();
        }
      }
      class hn {
        createSubscription(C, y) {
          return C.then(y, (S) => {
            throw S;
          });
        }
        dispose(C) {}
      }
      const so = new hn(),
        Hr = new Qn();
      let ir = (() => {
          class m {
            constructor(y) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = y);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(y) {
              return this._obj
                ? y !== this._obj
                  ? (this._dispose(), this.transform(y))
                  : this._latestValue
                : (y && this._subscribe(y), this._latestValue);
            }
            _subscribe(y) {
              (this._obj = y),
                (this._strategy = this._selectStrategy(y)),
                (this._subscription = this._strategy.createSubscription(y, (S) => this._updateLatestValue(y, S)));
            }
            _selectStrategy(y) {
              if ((0, w.QGY)(y)) return so;
              if ((0, w.F4k)(y)) return Hr;
              throw (function on(m, C) {
                return new w.vHH(2100, !1);
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(y, S) {
              y === this._obj && ((this._latestValue = S), this._ref.markForCheck());
            }
          }
          return (
            (m.ɵfac = function (y) {
              return new (y || m)(w.Y36(w.sBO, 16));
            }),
            (m.ɵpipe = w.Yjl({ name: 'async', type: m, pure: !1, standalone: !0 })),
            m
          );
        })(),
        ho = (() => {
          class m {}
          return (
            (m.ɵfac = function (y) {
              return new (y || m)();
            }),
            (m.ɵmod = w.oAB({ type: m })),
            (m.ɵinj = w.cJS({})),
            m
          );
        })();
      const ko = 'browser';
      class ui {}
    },
    529: (st, De, R) => {
      R.d(De, { CB: () => bt, eN: () => Z, h_: () => rr });
      var w = R(6895),
        d = R(8256),
        Y = R(9646),
        ee = R(9751),
        te = R(4351),
        Oe = R(9300),
        _e = R(4004);
      class Ve {}
      class Ae {}
      class he {
        constructor(F) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            F
              ? (this.lazyInit =
                  'string' == typeof F
                    ? () => {
                        (this.headers = new Map()),
                          F.split('\n').forEach((j) => {
                            const ge = j.indexOf(':');
                            if (ge > 0) {
                              const ue = j.slice(0, ge),
                                tt = ue.toLowerCase(),
                                rt = j.slice(ge + 1).trim();
                              this.maybeSetNormalizedName(ue, tt),
                                this.headers.has(tt) ? this.headers.get(tt).push(rt) : this.headers.set(tt, [rt]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(F).forEach((j) => {
                            let ge = F[j];
                            const ue = j.toLowerCase();
                            'string' == typeof ge && (ge = [ge]),
                              ge.length > 0 && (this.headers.set(ue, ge), this.maybeSetNormalizedName(j, ue));
                          });
                      })
              : (this.headers = new Map());
        }
        has(F) {
          return this.init(), this.headers.has(F.toLowerCase());
        }
        get(F) {
          this.init();
          const j = this.headers.get(F.toLowerCase());
          return j && j.length > 0 ? j[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(F) {
          return this.init(), this.headers.get(F.toLowerCase()) || null;
        }
        append(F, j) {
          return this.clone({ name: F, value: j, op: 'a' });
        }
        set(F, j) {
          return this.clone({ name: F, value: j, op: 's' });
        }
        delete(F, j) {
          return this.clone({ name: F, value: j, op: 'd' });
        }
        maybeSetNormalizedName(F, j) {
          this.normalizedNames.has(j) || this.normalizedNames.set(j, F);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof he ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach((F) => this.applyUpdate(F)), (this.lazyUpdate = null)));
        }
        copyFrom(F) {
          F.init(),
            Array.from(F.headers.keys()).forEach((j) => {
              this.headers.set(j, F.headers.get(j)), this.normalizedNames.set(j, F.normalizedNames.get(j));
            });
        }
        clone(F) {
          const j = new he();
          return (
            (j.lazyInit = this.lazyInit && this.lazyInit instanceof he ? this.lazyInit : this),
            (j.lazyUpdate = (this.lazyUpdate || []).concat([F])),
            j
          );
        }
        applyUpdate(F) {
          const j = F.name.toLowerCase();
          switch (F.op) {
            case 'a':
            case 's':
              let ge = F.value;
              if (('string' == typeof ge && (ge = [ge]), 0 === ge.length)) return;
              this.maybeSetNormalizedName(F.name, j);
              const ue = ('a' === F.op ? this.headers.get(j) : void 0) || [];
              ue.push(...ge), this.headers.set(j, ue);
              break;
            case 'd':
              const tt = F.value;
              if (tt) {
                let rt = this.headers.get(j);
                if (!rt) return;
                (rt = rt.filter((Wt) => -1 === tt.indexOf(Wt))),
                  0 === rt.length ? (this.headers.delete(j), this.normalizedNames.delete(j)) : this.headers.set(j, rt);
              } else this.headers.delete(j), this.normalizedNames.delete(j);
          }
        }
        forEach(F) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((j) => F(this.normalizedNames.get(j), this.headers.get(j)));
        }
      }
      class Ce {
        encodeKey(F) {
          return je(F);
        }
        encodeValue(F) {
          return je(F);
        }
        decodeKey(F) {
          return decodeURIComponent(F);
        }
        decodeValue(F) {
          return decodeURIComponent(F);
        }
      }
      const se = /%(\d[a-f0-9])/gi,
        xe = { 40: '@', '3A': ':', 24: '$', '2C': ',', '3B': ';', '3D': '=', '3F': '?', '2F': '/' };
      function je(ae) {
        return encodeURIComponent(ae).replace(se, (F, j) => xe[j] ?? F);
      }
      function Xe(ae) {
        return `${ae}`;
      }
      class Ze {
        constructor(F = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = F.encoder || new Ce()), F.fromString)) {
            if (F.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function qe(ae, F) {
              const j = new Map();
              return (
                ae.length > 0 &&
                  ae
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach((ue) => {
                      const tt = ue.indexOf('='),
                        [rt, Wt] =
                          -1 == tt
                            ? [F.decodeKey(ue), '']
                            : [F.decodeKey(ue.slice(0, tt)), F.decodeValue(ue.slice(tt + 1))],
                        ct = j.get(rt) || [];
                      ct.push(Wt), j.set(rt, ct);
                    }),
                j
              );
            })(F.fromString, this.encoder);
          } else
            F.fromObject
              ? ((this.map = new Map()),
                Object.keys(F.fromObject).forEach((j) => {
                  const ge = F.fromObject[j],
                    ue = Array.isArray(ge) ? ge.map(Xe) : [Xe(ge)];
                  this.map.set(j, ue);
                }))
              : (this.map = null);
        }
        has(F) {
          return this.init(), this.map.has(F);
        }
        get(F) {
          this.init();
          const j = this.map.get(F);
          return j ? j[0] : null;
        }
        getAll(F) {
          return this.init(), this.map.get(F) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(F, j) {
          return this.clone({ param: F, value: j, op: 'a' });
        }
        appendAll(F) {
          const j = [];
          return (
            Object.keys(F).forEach((ge) => {
              const ue = F[ge];
              Array.isArray(ue)
                ? ue.forEach((tt) => {
                    j.push({ param: ge, value: tt, op: 'a' });
                  })
                : j.push({ param: ge, value: ue, op: 'a' });
            }),
            this.clone(j)
          );
        }
        set(F, j) {
          return this.clone({ param: F, value: j, op: 's' });
        }
        delete(F, j) {
          return this.clone({ param: F, value: j, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((F) => {
                const j = this.encoder.encodeKey(F);
                return this.map
                  .get(F)
                  .map((ge) => j + '=' + this.encoder.encodeValue(ge))
                  .join('&');
              })
              .filter((F) => '' !== F)
              .join('&')
          );
        }
        clone(F) {
          const j = new Ze({ encoder: this.encoder });
          return (j.cloneFrom = this.cloneFrom || this), (j.updates = (this.updates || []).concat(F)), j;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach((F) => this.map.set(F, this.cloneFrom.map.get(F))),
              this.updates.forEach((F) => {
                switch (F.op) {
                  case 'a':
                  case 's':
                    const j = ('a' === F.op ? this.map.get(F.param) : void 0) || [];
                    j.push(Xe(F.value)), this.map.set(F.param, j);
                    break;
                  case 'd':
                    if (void 0 === F.value) {
                      this.map.delete(F.param);
                      break;
                    }
                    {
                      let ge = this.map.get(F.param) || [];
                      const ue = ge.indexOf(Xe(F.value));
                      -1 !== ue && ge.splice(ue, 1),
                        ge.length > 0 ? this.map.set(F.param, ge) : this.map.delete(F.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class we {
        constructor() {
          this.map = new Map();
        }
        set(F, j) {
          return this.map.set(F, j), this;
        }
        get(F) {
          return this.map.has(F) || this.map.set(F, F.defaultValue()), this.map.get(F);
        }
        delete(F) {
          return this.map.delete(F), this;
        }
        has(F) {
          return this.map.has(F);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Me(ae) {
        return typeof ArrayBuffer < 'u' && ae instanceof ArrayBuffer;
      }
      function Ke(ae) {
        return typeof Blob < 'u' && ae instanceof Blob;
      }
      function pt(ae) {
        return typeof FormData < 'u' && ae instanceof FormData;
      }
      class de {
        constructor(F, j, ge, ue) {
          let tt;
          if (
            ((this.url = j),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = F.toUpperCase()),
            (function ye(ae) {
              switch (ae) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || ue
              ? ((this.body = void 0 !== ge ? ge : null), (tt = ue))
              : (tt = ge),
            tt &&
              ((this.reportProgress = !!tt.reportProgress),
              (this.withCredentials = !!tt.withCredentials),
              tt.responseType && (this.responseType = tt.responseType),
              tt.headers && (this.headers = tt.headers),
              tt.context && (this.context = tt.context),
              tt.params && (this.params = tt.params)),
            this.headers || (this.headers = new he()),
            this.context || (this.context = new we()),
            this.params)
          ) {
            const rt = this.params.toString();
            if (0 === rt.length) this.urlWithParams = j;
            else {
              const Wt = j.indexOf('?');
              this.urlWithParams = j + (-1 === Wt ? '?' : Wt < j.length - 1 ? '&' : '') + rt;
            }
          } else (this.params = new Ze()), (this.urlWithParams = j);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Me(this.body) ||
              Ke(this.body) ||
              pt(this.body) ||
              (function q(ae) {
                return typeof URLSearchParams < 'u' && ae instanceof URLSearchParams;
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof Ze
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || pt(this.body)
            ? null
            : Ke(this.body)
            ? this.body.type || null
            : Me(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Ze
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || 'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(F = {}) {
          const j = F.method || this.method,
            ge = F.url || this.url,
            ue = F.responseType || this.responseType,
            tt = void 0 !== F.body ? F.body : this.body,
            rt = void 0 !== F.withCredentials ? F.withCredentials : this.withCredentials,
            Wt = void 0 !== F.reportProgress ? F.reportProgress : this.reportProgress;
          let ct = F.headers || this.headers,
            Vt = F.params || this.params;
          const yn = F.context ?? this.context;
          return (
            void 0 !== F.setHeaders && (ct = Object.keys(F.setHeaders).reduce((z, L) => z.set(L, F.setHeaders[L]), ct)),
            F.setParams && (Vt = Object.keys(F.setParams).reduce((z, L) => z.set(L, F.setParams[L]), Vt)),
            new de(j, ge, tt, {
              params: Vt,
              headers: ct,
              context: yn,
              reportProgress: Wt,
              responseType: ue,
              withCredentials: rt,
            })
          );
        }
      }
      var Q = (() => (
        ((Q = Q || {})[(Q.Sent = 0)] = 'Sent'),
        (Q[(Q.UploadProgress = 1)] = 'UploadProgress'),
        (Q[(Q.ResponseHeader = 2)] = 'ResponseHeader'),
        (Q[(Q.DownloadProgress = 3)] = 'DownloadProgress'),
        (Q[(Q.Response = 4)] = 'Response'),
        (Q[(Q.User = 5)] = 'User'),
        Q
      ))();
      class Se {
        constructor(F, j = 200, ge = 'OK') {
          (this.headers = F.headers || new he()),
            (this.status = void 0 !== F.status ? F.status : j),
            (this.statusText = F.statusText || ge),
            (this.url = F.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class $e extends Se {
        constructor(F = {}) {
          super(F), (this.type = Q.ResponseHeader);
        }
        clone(F = {}) {
          return new $e({
            headers: F.headers || this.headers,
            status: void 0 !== F.status ? F.status : this.status,
            statusText: F.statusText || this.statusText,
            url: F.url || this.url || void 0,
          });
        }
      }
      class dt extends Se {
        constructor(F = {}) {
          super(F), (this.type = Q.Response), (this.body = void 0 !== F.body ? F.body : null);
        }
        clone(F = {}) {
          return new dt({
            body: void 0 !== F.body ? F.body : this.body,
            headers: F.headers || this.headers,
            status: void 0 !== F.status ? F.status : this.status,
            statusText: F.statusText || this.statusText,
            url: F.url || this.url || void 0,
          });
        }
      }
      class Ie extends Se {
        constructor(F) {
          super(F, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${F.url || '(unknown url)'}`
                : `Http failure response for ${F.url || '(unknown url)'}: ${F.status} ${F.statusText}`),
            (this.error = F.error || null);
        }
      }
      function W(ae, F) {
        return {
          body: F,
          headers: ae.headers,
          context: ae.context,
          observe: ae.observe,
          params: ae.params,
          reportProgress: ae.reportProgress,
          responseType: ae.responseType,
          withCredentials: ae.withCredentials,
        };
      }
      let Z = (() => {
        class ae {
          constructor(j) {
            this.handler = j;
          }
          request(j, ge, ue = {}) {
            let tt;
            if (j instanceof de) tt = j;
            else {
              let ct, Vt;
              (ct = ue.headers instanceof he ? ue.headers : new he(ue.headers)),
                ue.params && (Vt = ue.params instanceof Ze ? ue.params : new Ze({ fromObject: ue.params })),
                (tt = new de(j, ge, void 0 !== ue.body ? ue.body : null, {
                  headers: ct,
                  context: ue.context,
                  params: Vt,
                  reportProgress: ue.reportProgress,
                  responseType: ue.responseType || 'json',
                  withCredentials: ue.withCredentials,
                }));
            }
            const rt = (0, Y.of)(tt).pipe((0, te.b)((ct) => this.handler.handle(ct)));
            if (j instanceof de || 'events' === ue.observe) return rt;
            const Wt = rt.pipe((0, Oe.h)((ct) => ct instanceof dt));
            switch (ue.observe || 'body') {
              case 'body':
                switch (tt.responseType) {
                  case 'arraybuffer':
                    return Wt.pipe(
                      (0, _e.U)((ct) => {
                        if (null !== ct.body && !(ct.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return ct.body;
                      }),
                    );
                  case 'blob':
                    return Wt.pipe(
                      (0, _e.U)((ct) => {
                        if (null !== ct.body && !(ct.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return ct.body;
                      }),
                    );
                  case 'text':
                    return Wt.pipe(
                      (0, _e.U)((ct) => {
                        if (null !== ct.body && 'string' != typeof ct.body)
                          throw new Error('Response is not a string.');
                        return ct.body;
                      }),
                    );
                  default:
                    return Wt.pipe((0, _e.U)((ct) => ct.body));
                }
              case 'response':
                return Wt;
              default:
                throw new Error(`Unreachable: unhandled observe type ${ue.observe}}`);
            }
          }
          delete(j, ge = {}) {
            return this.request('DELETE', j, ge);
          }
          get(j, ge = {}) {
            return this.request('GET', j, ge);
          }
          head(j, ge = {}) {
            return this.request('HEAD', j, ge);
          }
          jsonp(j, ge) {
            return this.request('JSONP', j, {
              params: new Ze().append(ge, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(j, ge = {}) {
            return this.request('OPTIONS', j, ge);
          }
          patch(j, ge, ue = {}) {
            return this.request('PATCH', j, W(ue, ge));
          }
          post(j, ge, ue = {}) {
            return this.request('POST', j, W(ue, ge));
          }
          put(j, ge, ue = {}) {
            return this.request('PUT', j, W(ue, ge));
          }
        }
        return (
          (ae.ɵfac = function (j) {
            return new (j || ae)(d.LFG(Ve));
          }),
          (ae.ɵprov = d.Yz7({ token: ae, factory: ae.ɵfac })),
          ae
        );
      })();
      function le(ae, F) {
        return F(ae);
      }
      const Ue = new d.OlP('HTTP_INTERCEPTOR_FNS');
      let Zt = (() => {
        class ae extends Ve {
          constructor(j, ge) {
            super(), (this.backend = j), (this.injector = ge), (this.chain = null);
          }
          handle(j) {
            if (null === this.chain) {
              const ge = Array.from(new Set(this.injector.get(Ue)));
              this.chain = ge.reduceRight(
                (ue, tt) =>
                  (function Te(ae, F, j) {
                    return (ge, ue) => j.runInContext(() => F(ge, (tt) => ae(tt, ue)));
                  })(ue, tt, this.injector),
                le,
              );
            }
            return this.chain(j, (ge) => this.backend.handle(ge));
          }
        }
        return (
          (ae.ɵfac = function (j) {
            return new (j || ae)(d.LFG(Ae), d.LFG(d.lqb));
          }),
          (ae.ɵprov = d.Yz7({ token: ae, factory: ae.ɵfac })),
          ae
        );
      })();
      const Cr = /^\)\]\}',?\n/;
      let Tt = (() => {
        class ae {
          constructor(j) {
            this.xhrFactory = j;
          }
          handle(j) {
            if ('JSONP' === j.method)
              throw new Error('Attempted to construct Jsonp request without HttpClientJsonpModule installed.');
            return new ee.y((ge) => {
              const ue = this.xhrFactory.build();
              if (
                (ue.open(j.method, j.urlWithParams),
                j.withCredentials && (ue.withCredentials = !0),
                j.headers.forEach((A, $) => ue.setRequestHeader(A, $.join(','))),
                j.headers.has('Accept') || ue.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                !j.headers.has('Content-Type'))
              ) {
                const A = j.detectContentTypeHeader();
                null !== A && ue.setRequestHeader('Content-Type', A);
              }
              if (j.responseType) {
                const A = j.responseType.toLowerCase();
                ue.responseType = 'json' !== A ? A : 'text';
              }
              const tt = j.serializeBody();
              let rt = null;
              const Wt = () => {
                  if (null !== rt) return rt;
                  const A = ue.statusText || 'OK',
                    $ = new he(ue.getAllResponseHeaders()),
                    J =
                      (function tr(ae) {
                        return 'responseURL' in ae && ae.responseURL
                          ? ae.responseURL
                          : /^X-Request-URL:/m.test(ae.getAllResponseHeaders())
                          ? ae.getResponseHeader('X-Request-URL')
                          : null;
                      })(ue) || j.url;
                  return (rt = new $e({ headers: $, status: ue.status, statusText: A, url: J })), rt;
                },
                ct = () => {
                  let { headers: A, status: $, statusText: J, url: Re } = Wt(),
                    He = null;
                  204 !== $ && (He = typeof ue.response > 'u' ? ue.responseText : ue.response),
                    0 === $ && ($ = He ? 200 : 0);
                  let _t = $ >= 200 && $ < 300;
                  if ('json' === j.responseType && 'string' == typeof He) {
                    const et = He;
                    He = He.replace(Cr, '');
                    try {
                      He = '' !== He ? JSON.parse(He) : null;
                    } catch (On) {
                      (He = et), _t && ((_t = !1), (He = { error: On, text: He }));
                    }
                  }
                  _t
                    ? (ge.next(new dt({ body: He, headers: A, status: $, statusText: J, url: Re || void 0 })),
                      ge.complete())
                    : ge.error(new Ie({ error: He, headers: A, status: $, statusText: J, url: Re || void 0 }));
                },
                Vt = (A) => {
                  const { url: $ } = Wt(),
                    J = new Ie({
                      error: A,
                      status: ue.status || 0,
                      statusText: ue.statusText || 'Unknown Error',
                      url: $ || void 0,
                    });
                  ge.error(J);
                };
              let yn = !1;
              const z = (A) => {
                  yn || (ge.next(Wt()), (yn = !0));
                  let $ = { type: Q.DownloadProgress, loaded: A.loaded };
                  A.lengthComputable && ($.total = A.total),
                    'text' === j.responseType && ue.responseText && ($.partialText = ue.responseText),
                    ge.next($);
                },
                L = (A) => {
                  let $ = { type: Q.UploadProgress, loaded: A.loaded };
                  A.lengthComputable && ($.total = A.total), ge.next($);
                };
              return (
                ue.addEventListener('load', ct),
                ue.addEventListener('error', Vt),
                ue.addEventListener('timeout', Vt),
                ue.addEventListener('abort', Vt),
                j.reportProgress &&
                  (ue.addEventListener('progress', z),
                  null !== tt && ue.upload && ue.upload.addEventListener('progress', L)),
                ue.send(tt),
                ge.next({ type: Q.Sent }),
                () => {
                  ue.removeEventListener('error', Vt),
                    ue.removeEventListener('abort', Vt),
                    ue.removeEventListener('load', ct),
                    ue.removeEventListener('timeout', Vt),
                    j.reportProgress &&
                      (ue.removeEventListener('progress', z),
                      null !== tt && ue.upload && ue.upload.removeEventListener('progress', L)),
                    ue.readyState !== ue.DONE && ue.abort();
                }
              );
            });
          }
        }
        return (
          (ae.ɵfac = function (j) {
            return new (j || ae)(d.LFG(w.JF));
          }),
          (ae.ɵprov = d.Yz7({ token: ae, factory: ae.ɵfac })),
          ae
        );
      })();
      const Ln = new d.OlP('XSRF_ENABLED'),
        Tn = new d.OlP('XSRF_COOKIE_NAME', { providedIn: 'root', factory: () => 'XSRF-TOKEN' }),
        qt = new d.OlP('XSRF_HEADER_NAME', { providedIn: 'root', factory: () => 'X-XSRF-TOKEN' });
      class en {}
      let kn = (() => {
        class ae {
          constructor(j, ge, ue) {
            (this.doc = j),
              (this.platform = ge),
              (this.cookieName = ue),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ('server' === this.platform) return null;
            const j = this.doc.cookie || '';
            return (
              j !== this.lastCookieString &&
                (this.parseCount++, (this.lastToken = (0, w.Mx)(j, this.cookieName)), (this.lastCookieString = j)),
              this.lastToken
            );
          }
        }
        return (
          (ae.ɵfac = function (j) {
            return new (j || ae)(d.LFG(w.K0), d.LFG(d.Lbi), d.LFG(Tn));
          }),
          (ae.ɵprov = d.Yz7({ token: ae, factory: ae.ɵfac })),
          ae
        );
      })();
      function gt(ae, F) {
        const j = ae.url.toLowerCase();
        if (
          !(0, d.f3M)(Ln) ||
          'GET' === ae.method ||
          'HEAD' === ae.method ||
          j.startsWith('http://') ||
          j.startsWith('https://')
        )
          return F(ae);
        const ge = (0, d.f3M)(en).getToken(),
          ue = (0, d.f3M)(qt);
        return null != ge && !ae.headers.has(ue) && (ae = ae.clone({ headers: ae.headers.set(ue, ge) })), F(ae);
      }
      var ne = (() => (
        ((ne = ne || {})[(ne.Interceptors = 0)] = 'Interceptors'),
        (ne[(ne.LegacyInterceptors = 1)] = 'LegacyInterceptors'),
        (ne[(ne.CustomXsrfConfiguration = 2)] = 'CustomXsrfConfiguration'),
        (ne[(ne.NoXsrfProtection = 3)] = 'NoXsrfProtection'),
        (ne[(ne.JsonpSupport = 4)] = 'JsonpSupport'),
        (ne[(ne.RequestsMadeViaParent = 5)] = 'RequestsMadeViaParent'),
        ne
      ))();
      function rr(...ae) {
        const F = [
          Z,
          Tt,
          Zt,
          { provide: Ve, useExisting: Zt },
          { provide: Ae, useExisting: Tt },
          { provide: Ue, useValue: gt, multi: !0 },
          { provide: Ln, useValue: !0 },
          { provide: en, useClass: kn },
        ];
        for (const j of ae) F.push(...j.ɵproviders);
        return (0, d.MR2)(F);
      }
      function bt(ae) {
        return (function Vn(ae, F) {
          return { ɵkind: ae, ɵproviders: F };
        })(
          ne.Interceptors,
          ae.map((F) => ({ provide: Ue, useValue: F, multi: !0 })),
        );
      }
    },
    8256: (st, De, R) => {
      R.d(De, {
        tb: () => cg,
        AFp: () => Jp,
        ip1: () => Xp,
        CZH: () => su,
        z2F: () => uu,
        sBO: () => pw,
        Sil: () => KC,
        _Vd: () => Ks,
        EJc: () => YC,
        Xts: () => Wu,
        SBq: () => Zs,
        lqb: () => Bi,
        qLn: () => Qs,
        vpe: () => Lo,
        XFs: () => ne,
        OlP: () => rn,
        zs3: () => Hi,
        ZZ4: () => mc,
        aQg: () => vc,
        soG: () => au,
        YKP: () => rp,
        h0i: () => Os,
        R0b: () => jr,
        Lbi: () => GC,
        g9A: () => tg,
        Qsj: () => hv,
        FYo: () => Td,
        JOm: () => Ro,
        Rgc: () => ca,
        dDg: () => ow,
        eoX: () => ug,
        GfV: () => Ad,
        s_b: () => ru,
        ifc: () => He,
        MMx: () => Gl,
        Lck: () => $_,
        G48: () => hw,
        Gpc: () => Ot,
        f3M: () => ct,
        $WT: () => Qt,
        MR2: () => Xm,
        c2e: () => zC,
        zSh: () => Zu,
        wAp: () => ut,
        vHH: () => q,
        lri: () => sg,
        rWj: () => ag,
        D6c: () => Aw,
        cg1: () => Ll,
        kL8: () => Th,
        dqk: () => kt,
        iPO: () => cw,
        Z0I: () => Ln,
        eJc: () => ec,
        CqO: () => Rf,
        QGY: () => Il,
        F4k: () => Of,
        RDi: () => Am,
        AaK: () => je,
        qOj: () => _l,
        TTD: () => po,
        _Bn: () => np,
        jDz: () => ip,
        xp6: () => Ld,
        uIk: () => El,
        Tol: () => nh,
        ekj: () => Pl,
        Suo: () => Ap,
        Xpm: () => x,
        lG2: () => Yt,
        Yz7: () => Ht,
        cJS: () => tr,
        oAB: () => ie,
        Yjl: () => St,
        Y36: () => ms,
        _UZ: () => Sl,
        BQk: () => Ya,
        ynx: () => Wa,
        qZA: () => za,
        TgZ: () => Ga,
        EpF: () => Af,
        n5z: () => ss,
        LFG: () => rt,
        $8M: () => as,
        NdJ: () => Tl,
        CRH: () => Op,
        oxw: () => Lf,
        ALo: () => Dp,
        lcZ: () => _p,
        xi3: () => Cp,
        Hsn: () => Vf,
        F$t: () => kf,
        Q6J: () => bl,
        MGl: () => qa,
        VKq: () => fp,
        WLB: () => hp,
        iGM: () => Ip,
        MAs: () => If,
        KtG: () => di,
        CHM: () => Wo,
        LSH: () => zu,
        P3R: () => md,
        YNc: () => Sf,
        W1O: () => Np,
        _uU: () => lh,
        Oqu: () => Nl,
        hij: () => Qa,
        AsE: () => Fl,
        Gf: () => Tp,
      });
      var w = R(7579),
        d = R(727),
        Y = R(9751),
        ee = R(8189),
        te = R(8421),
        Oe = R(515),
        _e = R(7669),
        Ve = R(2076),
        he = R(2961),
        oe = R(4482);
      function qe(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new he.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function se(e) {
        for (let t in e) if (e[t] === se) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function xe(e, t) {
        for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function je(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(je).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function Xe(e, t) {
        return null == e || '' === e ? (null === t ? '' : t) : null == t || '' === t ? e : e + ' ' + t;
      }
      const Ze = se({ __forward_ref__: se });
      function Ot(e) {
        return (
          (e.__forward_ref__ = Ot),
          (e.toString = function () {
            return je(this());
          }),
          e
        );
      }
      function we(e) {
        return ye(e) ? e() : e;
      }
      function ye(e) {
        return 'function' == typeof e && e.hasOwnProperty(Ze) && e.__forward_ref__ === Ot;
      }
      function Me(e) {
        return e && !!e.ɵproviders;
      }
      const pt = 'https://g.co/ng/security#xss';
      class q extends Error {
        constructor(t, n) {
          super(de(t, n)), (this.code = t);
        }
      }
      function de(e, t) {
        return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
      }
      function Q(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Se(e) {
        return 'function' == typeof e
          ? e.name || e.toString()
          : 'object' == typeof e && null != e && 'function' == typeof e.type
          ? e.type.name || e.type.toString()
          : Q(e);
      }
      function W(e, t) {
        throw new q(-201, !1);
      }
      function zt(e, t) {
        null == e &&
          (function at(e, t, n, r) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`));
          })(t, e, null, '!=');
      }
      function Ht(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function tr(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Tt(e) {
        return nr(e, en) || nr(e, gt);
      }
      function Ln(e) {
        return null !== Tt(e);
      }
      function nr(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function qt(e) {
        return e && (e.hasOwnProperty(kn) || e.hasOwnProperty(ze)) ? e[kn] : null;
      }
      const en = se({ ɵprov: se }),
        kn = se({ ɵinj: se }),
        gt = se({ ngInjectableDef: se }),
        ze = se({ ngInjectorDef: se });
      var ne = (() => (
        ((ne = ne || {})[(ne.Default = 0)] = 'Default'),
        (ne[(ne.Host = 1)] = 'Host'),
        (ne[(ne.Self = 2)] = 'Self'),
        (ne[(ne.SkipSelf = 4)] = 'SkipSelf'),
        (ne[(ne.Optional = 8)] = 'Optional'),
        ne
      ))();
      let Vn;
      function bt(e) {
        const t = Vn;
        return (Vn = e), t;
      }
      function An(e, t, n) {
        const r = Tt(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & ne.Optional
          ? null
          : void 0 !== t
          ? t
          : void W(je(e));
      }
      const kt = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' && typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && self))(),
        mr = {},
        En = '__NG_DI_FLAG__',
        wr = 'ngTempTokenPath',
        Zn = 'ngTokenPath',
        ae = /\n/gm,
        F = '\u0275',
        j = '__source';
      let ge;
      function ue(e) {
        const t = ge;
        return (ge = e), t;
      }
      function tt(e, t = ne.Default) {
        if (void 0 === ge) throw new q(-203, !1);
        return null === ge ? An(e, void 0, t) : ge.get(e, t & ne.Optional ? null : void 0, t);
      }
      function rt(e, t = ne.Default) {
        return (
          (function rr() {
            return Vn;
          })() || tt
        )(we(e), t);
      }
      function ct(e, t = ne.Default) {
        return rt(e, Vt(t));
      }
      function Vt(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
      }
      function yn(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = we(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new q(900, !1);
            let o,
              i = ne.Default;
            for (let a = 0; a < r.length; a++) {
              const f = r[a],
                v = L(f);
              'number' == typeof v ? (-1 === v ? (o = f.token) : (i |= v)) : (o = f);
            }
            t.push(rt(o, i));
          } else t.push(rt(r));
        }
        return t;
      }
      function z(e, t) {
        return (e[En] = t), (e.prototype[En] = t), e;
      }
      function L(e) {
        return e[En];
      }
      function J(e) {
        return { toString: e }.toString();
      }
      var Re = (() => (((Re = Re || {})[(Re.OnPush = 0)] = 'OnPush'), (Re[(Re.Default = 1)] = 'Default'), Re))(),
        He = (() => {
          return (
            ((e = He || (He = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            He
          );
          var e;
        })();
      const _t = {},
        et = [],
        On = se({ ɵcmp: se }),
        Dn = se({ ɵdir: se }),
        io = se({ ɵpipe: se }),
        or = se({ ɵmod: se }),
        Un = se({ ɵfac: se }),
        Er = se({ __NG_ELEMENT_ID__: se });
      let V = 0;
      function x(e) {
        return J(() => {
          const t = Gn(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Re.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              data: e.data || {},
              encapsulation: e.encapsulation || He.Emulated,
              id: 'c' + V++,
              styles: e.styles || et,
              _: null,
              schemas: e.schemas || null,
              tView: null,
            };
          zn(n);
          const r = e.dependencies;
          return (n.directiveDefs = bn(r, !1)), (n.pipeDefs = bn(r, !0)), n;
        });
      }
      function N(e) {
        return it(e) || vt(e);
      }
      function U(e) {
        return null !== e;
      }
      function ie(e) {
        return J(() => ({
          type: e.type,
          bootstrap: e.bootstrap || et,
          declarations: e.declarations || et,
          imports: e.imports || et,
          exports: e.exports || et,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function xt(e, t) {
        if (null == e) return _t;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])), (n[o] = r), t && (t[o] = i);
          }
        return n;
      }
      function Yt(e) {
        return J(() => {
          const t = Gn(e);
          return zn(t), t;
        });
      }
      function St(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function it(e) {
        return e[On] || null;
      }
      function vt(e) {
        return e[Dn] || null;
      }
      function Nt(e) {
        return e[io] || null;
      }
      function Qt(e) {
        const t = it(e) || vt(e) || Nt(e);
        return null !== t && t.standalone;
      }
      function $t(e, t) {
        const n = e[or] || null;
        if (!n && !0 === t) throw new Error(`Type ${je(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Gn(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          selectors: e.selectors || et,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: xt(e.inputs, t),
          outputs: xt(e.outputs),
        };
      }
      function zn(e) {
        e.features?.forEach((t) => t(e));
      }
      function bn(e, t) {
        if (!e) return null;
        const n = t ? Nt : N;
        return () => ('function' == typeof e ? e() : e).map((r) => n(r)).filter(U);
      }
      const Wn = 0,
        Le = 1,
        ot = 2,
        Ut = 3,
        jt = 4,
        cn = 5,
        Xt = 6,
        Yn = 7,
        Gt = 8,
        jn = 9,
        br = 10,
        ht = 11,
        Br = 12,
        an = 13,
        on = 14,
        Qn = 15,
        hn = 16,
        so = 17,
        Hr = 18,
        ir = 19,
        ao = 20,
        wi = 21,
        Kt = 22,
        uo = 1,
        $r = 2,
        lo = 7,
        Gr = 8,
        ur = 9,
        pn = 10;
      function un(e) {
        return Array.isArray(e) && 'object' == typeof e[uo];
      }
      function qn(e) {
        return Array.isArray(e) && !0 === e[uo];
      }
      function zr(e) {
        return 0 != (4 & e.flags);
      }
      function xr(e) {
        return e.componentOffset > -1;
      }
      function Xn(e) {
        return 1 == (1 & e.flags);
      }
      function Bn(e) {
        return !!e.template;
      }
      function Ei(e) {
        return 0 != (256 & e[ot]);
      }
      function Sr(e, t) {
        return e.hasOwnProperty(Un) ? e[Un] : null;
      }
      class Yr {
        constructor(t, n, r) {
          (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function po() {
        return Ir;
      }
      function Ir(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Ti), Ji;
      }
      function Ji() {
        const e = qr(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === _t) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Ti(e, t, n, r) {
        const o = this.declaredInputs[n],
          i =
            qr(e) ||
            (function mo(e, t) {
              return (e[go] = t);
            })(e, { previous: _t, current: null }),
          a = i.current || (i.current = {}),
          f = i.previous,
          v = f[o];
        (a[o] = new Yr(v && v.currentValue, t, f === _t)), (e[r] = t);
      }
      po.ngInherit = !0;
      const go = '__ngSimpleChanges__';
      function qr(e) {
        return e[go] || null;
      }
      const Rn = function (e, t, n) {};
      function nn(e) {
        for (; Array.isArray(e); ) e = e[Wn];
        return e;
      }
      function Ho(e, t) {
        return nn(t[e]);
      }
      function Mn(e, t) {
        return nn(t[e.index]);
      }
      function $o(e, t) {
        return e.data[t];
      }
      function Kr(e, t) {
        return e[t];
      }
      function _n(e, t) {
        const n = t[e];
        return un(n) ? n : n[Wn];
      }
      function _o(e) {
        return 64 == (64 & e[ot]);
      }
      function Jn(e, t) {
        return null == t ? null : e[t];
      }
      function Co(e) {
        e[Hr] = 0;
      }
      function ci(e, t) {
        e[cn] += t;
        let n = e,
          r = e[Ut];
        for (; null !== r && ((1 === t && 1 === n[cn]) || (-1 === t && 0 === n[cn])); )
          (r[cn] += t), (n = r), (r = r[Ut]);
      }
      const We = { lFrame: Ni(null), bindingsEnabled: !0 };
      function Oi() {
        return We.bindingsEnabled;
      }
      function fe() {
        return We.lFrame.lView;
      }
      function It() {
        return We.lFrame.tView;
      }
      function Wo(e) {
        return (We.lFrame.contextLView = e), e[Gt];
      }
      function di(e) {
        return (We.lFrame.contextLView = null), e;
      }
      function gn() {
        let e = wo();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function wo() {
        return We.lFrame.currentTNode;
      }
      function cr(e, t) {
        const n = We.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Yo() {
        return We.lFrame.isParent;
      }
      function Zr() {
        We.lFrame.isParent = !1;
      }
      function Cn() {
        const e = We.lFrame;
        let t = e.bindingRootIndex;
        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
      }
      function Xr() {
        return We.lFrame.bindingIndex++;
      }
      function yr(e) {
        const t = We.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function bo(e, t) {
        const n = We.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Ko(t);
      }
      function Ko(e) {
        We.lFrame.currentDirectiveIndex = e;
      }
      function Mo() {
        return We.lFrame.currentQueryIndex;
      }
      function So(e) {
        We.lFrame.currentQueryIndex = e;
      }
      function Fr(e) {
        const t = e[Le];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[Xt] : null;
      }
      function hi(e, t, n) {
        if (n & ne.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent), null !== o || n & ne.Host || ((o = Fr(i)), null === o || ((i = i[Qn]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (We.lFrame = xi());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Zo(e) {
        const t = xi(),
          n = e[Le];
        (We.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function xi() {
        const e = We.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Ni(e) : t;
      }
      function Ni(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Fi() {
        const e = We.lFrame;
        return (We.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Li = Fi;
      function Qo() {
        const e = Fi();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Pn() {
        return We.lFrame.selectedIndex;
      }
      function Lr(e) {
        We.lFrame.selectedIndex = e;
      }
      function tn() {
        const e = We.lFrame;
        return $o(e.tView, e.selectedIndex);
      }
      function ce(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: f,
              ngAfterViewInit: v,
              ngAfterViewChecked: _,
              ngOnDestroy: b,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            f &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, f)),
            v && (e.viewHooks || (e.viewHooks = [])).push(-n, v),
            _ &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, _),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, _)),
            null != b && (e.destroyHooks || (e.destroyHooks = [])).push(n, b);
        }
      }
      function Be(e, t, n) {
        Ft(e, t, 3, n);
      }
      function Et(e, t, n, r) {
        (3 & e[ot]) === n && Ft(e, t, n, r);
      }
      function At(e, t) {
        let n = e[ot];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[ot] = n));
      }
      function Ft(e, t, n, r) {
        const i = r ?? -1,
          a = t.length - 1;
        let f = 0;
        for (let v = void 0 !== r ? 65535 & e[Hr] : 0; v < a; v++)
          if ('number' == typeof t[v + 1]) {
            if (((f = t[v]), null != r && f >= r)) break;
          } else
            t[v] < 0 && (e[Hr] += 65536),
              (f < i || -1 == i) && (Ct(e, n, t, v), (e[Hr] = (4294901760 & e[Hr]) + v + 2)),
              v++;
      }
      function Ct(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          f = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[ot] >> 11 < e[Hr] >> 16 && (3 & e[ot]) === t) {
            (e[ot] += 2048), Rn(4, f, i);
            try {
              i.call(f);
            } finally {
              Rn(5, f, i);
            }
          }
        } else {
          Rn(4, f, i);
          try {
            i.call(f);
          } finally {
            Rn(5, f, i);
          }
        }
      }
      const Jt = -1;
      class Lt {
        constructor(t, n, r) {
          (this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = n), (this.injectImpl = r);
        }
      }
      function E(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              a = n[r++],
              f = n[r++];
            e.setAttribute(t, a, f, i);
          } else {
            const i = o,
              a = n[++r];
            Ee(i) ? e.setProperty(t, i, a) : e.setAttribute(t, i, a), r++;
          }
        }
        return r;
      }
      function B(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Ee(e) {
        return 64 === e.charCodeAt(0);
      }
      function Ye(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o ? (n = o) : 0 === n || sn(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function sn(e, t, n, r, o) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const f = e[i++];
            if ('number' == typeof f) {
              if (f === t) {
                a = -1;
                break;
              }
              if (f > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const f = e[i];
          if ('number' == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function er(e) {
        return e !== Jt;
      }
      function Ar(e) {
        return 32767 & e;
      }
      function Io(e, t) {
        let n = (function pi(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Qn]), n--;
        return r;
      }
      let ki = !0;
      function gi(e) {
        const t = ki;
        return (ki = e), t;
      }
      const pa = 255,
        os = 5;
      let fu = 0;
      const kr = {};
      function is(e, t) {
        const n = ga(e, t);
        if (-1 !== n) return n;
        const r = t[Le];
        r.firstCreatePass && ((e.injectorIndex = t.length), fr(r.data, e), fr(t, null), fr(r.blueprint, null));
        const o = mi(e, t),
          i = e.injectorIndex;
        if (er(o)) {
          const a = Ar(o),
            f = Io(o, t),
            v = f[Le].data;
          for (let _ = 0; _ < 8; _++) t[i + _] = f[a + _] | v[a + _];
        }
        return (t[i + 8] = o), i;
      }
      function fr(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function ga(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function mi(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = yu(o)), null === r)) return Jt;
          if ((n++, (o = o[Qn]), -1 !== r.injectorIndex)) return r.injectorIndex | (n << 16);
        }
        return Jt;
      }
      function Fs(e, t, n) {
        !(function hu(e, t, n) {
          let r;
          'string' == typeof n ? (r = n.charCodeAt(0) || 0) : n.hasOwnProperty(Er) && (r = n[Er]),
            null == r && (r = n[Er] = fu++);
          const o = r & pa;
          t.data[e + (o >> os)] |= 1 << o;
        })(e, t, n);
      }
      function ma(e, t, n) {
        if (n & ne.Optional || void 0 !== e) return e;
        W();
      }
      function gu(e, t, n, r) {
        if ((n & ne.Optional && void 0 === r && (r = null), !(n & (ne.Self | ne.Host)))) {
          const o = e[jn],
            i = bt(void 0);
          try {
            return o ? o.get(t, r, n & ne.Optional) : An(t, r, n & ne.Optional);
          } finally {
            bt(i);
          }
        }
        return ma(r, 0, n);
      }
      function mu(e, t, n, r = ne.Default, o) {
        if (null !== e) {
          if (1024 & t[ot]) {
            const a = (function Dc(e, t, n, r, o) {
              let i = e,
                a = t;
              for (; null !== i && null !== a && 1024 & a[ot] && !(256 & a[ot]); ) {
                const f = va(i, a, n, r | ne.Self, kr);
                if (f !== kr) return f;
                let v = i.parent;
                if (!v) {
                  const _ = a[wi];
                  if (_) {
                    const b = _.get(n, kr, r);
                    if (b !== kr) return b;
                  }
                  (v = yu(a)), (a = a[Qn]);
                }
                i = v;
              }
              return o;
            })(e, t, n, r, kr);
            if (a !== kr) return a;
          }
          const i = va(e, t, n, r, kr);
          if (i !== kr) return i;
        }
        return gu(t, n, r, o);
      }
      function va(e, t, n, r, o) {
        const i = (function vu(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Er) ? e[Er] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & pa : To) : t;
        })(n);
        if ('function' == typeof i) {
          if (!hi(t, e, r)) return r & ne.Host ? ma(o, 0, r) : gu(t, n, r, o);
          try {
            const a = i(r);
            if (null != a || r & ne.Optional) return a;
            W();
          } finally {
            Li();
          }
        } else if ('number' == typeof i) {
          let a = null,
            f = ga(e, t),
            v = Jt,
            _ = r & ne.Host ? t[hn][Xt] : null;
          for (
            (-1 === f || r & ne.SkipSelf) &&
            ((v = -1 === f ? mi(e, t) : t[f + 8]),
            v !== Jt && ya(r, !1) ? ((a = t[Le]), (f = Ar(v)), (t = Io(v, t))) : (f = -1));
            -1 !== f;

          ) {
            const b = t[Le];
            if (Xo(i, f, b.data)) {
              const O = Ls(f, t, n, a, r, _);
              if (O !== kr) return O;
            }
            (v = t[f + 8]),
              v !== Jt && ya(r, t[Le].data[f + 8] === _) && Xo(i, f, t)
                ? ((a = b), (f = Ar(v)), (t = Io(v, t)))
                : (f = -1);
          }
        }
        return o;
      }
      function Ls(e, t, n, r, o, i) {
        const a = t[Le],
          f = a.data[e + 8],
          b = Vi(f, a, n, null == r ? xr(f) && ki : r != a && 0 != (3 & f.type), o & ne.Host && i === f);
        return null !== b ? Vr(t, a, b, f) : kr;
      }
      function Vi(e, t, n, r, o) {
        const i = e.providerIndexes,
          a = t.data,
          f = 1048575 & i,
          v = e.directiveStart,
          b = i >> 20,
          k = o ? f + b : e.directiveEnd;
        for (let G = r ? f : f + b; G < k; G++) {
          const re = a[G];
          if ((G < v && n === re) || (G >= v && re.type === n)) return G;
        }
        if (o) {
          const G = a[v];
          if (G && Bn(G) && G.type === n) return v;
        }
        return null;
      }
      function Vr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function mn(e) {
            return e instanceof Lt;
          })(o)
        ) {
          const a = o;
          a.resolving &&
            (function $e(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new q(-200, `Circular dependency in DI detected for ${e}${n}`);
            })(Se(i[n]));
          const f = gi(a.canSeeViewProviders);
          a.resolving = !0;
          const v = a.injectImpl ? bt(a.injectImpl) : null;
          hi(e, r, ne.Default);
          try {
            (o = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function K(e, t, n) {
                  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
                  if (r) {
                    const a = Ir(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, a);
                  }
                  o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== v && bt(v), gi(f), (a.resolving = !1), Li();
          }
        }
        return o;
      }
      function Xo(e, t, n) {
        return !!(n[t + (e >> os)] & (1 << e));
      }
      function ya(e, t) {
        return !(e & ne.Self || (e & ne.Host && t));
      }
      class Jo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return mu(this._tNode, this._lView, t, Vt(r), n);
        }
      }
      function To() {
        return new Jo(gn(), fe());
      }
      function ss(e) {
        return J(() => {
          const t = e.prototype.constructor,
            n = t[Un] || ks(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Un] || ks(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function ks(e) {
        return ye(e)
          ? () => {
              const t = ks(we(e));
              return t && t();
            }
          : Sr(e);
      }
      function yu(e) {
        const t = e[Le],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[Xt] : null;
      }
      function as(e) {
        return (function pu(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (B(i)) break;
              if (0 === i) o += 2;
              else if ('number' == typeof i) for (o++; o < r && 'string' == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(gn(), e);
      }
      const Ao = '__parameters__';
      function ti(e, t, n) {
        return J(() => {
          const r = (function _a(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const a = new o(...i);
            return (f.annotation = a), f;
            function f(v, _, b) {
              const O = v.hasOwnProperty(Ao) ? v[Ao] : Object.defineProperty(v, Ao, { value: [] })[Ao];
              for (; O.length <= b; ) O.push(null);
              return (O[b] = O[b] || []).push(a), v;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)), (o.prototype.ngMetadataName = e), (o.annotationCls = o), o
          );
        });
      }
      class rn {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Ht({ token: this, providedIn: n.providedIn || 'root', factory: n.factory }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function u(e, t) {
        e.forEach((n) => (Array.isArray(n) ? u(n, t) : t(n)));
      }
      function l(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function s(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function p(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function X(e, t, n) {
        let r = Ne(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function I(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; ) (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function ke(e, t) {
        const n = Ne(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Ne(e, t) {
        return (function Sn(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Ea = z(ti('Optional'), 8),
        ba = z(ti('SkipSelf'), 4);
      var Ro = (() => (
        ((Ro = Ro || {})[(Ro.Important = 1)] = 'Important'), (Ro[(Ro.DashCase = 2)] = 'DashCase'), Ro
      ))();
      const Eu = new Map();
      let Xg = 0;
      const Mu = '__ngContext__';
      function sr(e, t) {
        un(t)
          ? ((e[Mu] = t[ao]),
            (function em(e) {
              Eu.set(e[ao], e);
            })(t))
          : (e[Mu] = t);
      }
      let Su;
      function Iu(e, t) {
        return Su(e, t);
      }
      function Gs(e) {
        const t = e[Ut];
        return qn(t) ? t[Ut] : t;
      }
      function Tu(e) {
        return Hc(e[an]);
      }
      function Au(e) {
        return Hc(e[jt]);
      }
      function Hc(e) {
        for (; null !== e && !qn(e); ) e = e[jt];
        return e;
      }
      function cs(e, t, n, r, o) {
        if (null != r) {
          let i,
            a = !1;
          qn(r) ? (i = r) : un(r) && ((a = !0), (r = r[Wn]));
          const f = nn(r);
          0 === e && null !== n
            ? null == o
              ? qc(t, n, f)
              : Ui(t, n, f, o || null, !0)
            : 1 === e && null !== n
            ? Ui(t, n, f, o || null, !0)
            : 2 === e
            ? (function Lu(e, t, n) {
                const r = Ia(e, t);
                r &&
                  (function _m(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, f, a)
            : 3 === e && t.destroyNode(f),
            null != i &&
              (function Em(e, t, n, r, o) {
                const i = n[lo];
                i !== nn(n) && cs(t, e, r, i, o);
                for (let f = pn; f < n.length; f++) {
                  const v = n[f];
                  zs(v[Le], v, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Ru(e, t, n) {
        return e.createElement(t, n);
      }
      function Gc(e, t) {
        const n = e[ur],
          r = n.indexOf(t),
          o = t[Ut];
        512 & t[ot] && ((t[ot] &= -513), ci(o, -1)), n.splice(r, 1);
      }
      function Pu(e, t) {
        if (e.length <= pn) return;
        const n = pn + t,
          r = e[n];
        if (r) {
          const o = r[so];
          null !== o && o !== e && Gc(o, r), t > 0 && (e[n - 1][jt] = r[jt]);
          const i = s(e, pn + t);
          !(function fm(e, t) {
            zs(e, t, t[ht], 2, null, null), (t[Wn] = null), (t[Xt] = null);
          })(r[Le], r);
          const a = i[ir];
          null !== a && a.detachView(i[Le]), (r[Ut] = null), (r[jt] = null), (r[ot] &= -65);
        }
        return r;
      }
      function zc(e, t) {
        if (!(128 & t[ot])) {
          const n = t[ht];
          n.destroyNode && zs(e, t, n, 3, null, null),
            (function gm(e) {
              let t = e[an];
              if (!t) return xu(e[Le], e);
              for (; t; ) {
                let n = null;
                if (un(t)) n = t[an];
                else {
                  const r = t[pn];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[jt] && t !== e; ) un(t) && xu(t[Le], t), (t = t[Ut]);
                  null === t && (t = e), un(t) && xu(t[Le], t), (n = t && t[jt]);
                }
                t = n;
              }
            })(t);
        }
      }
      function xu(e, t) {
        if (!(128 & t[ot])) {
          (t[ot] &= -65),
            (t[ot] |= 128),
            (function Dm(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof Lt)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const f = o[i[a]],
                          v = i[a + 1];
                        Rn(4, f, v);
                        try {
                          v.call(f);
                        } finally {
                          Rn(5, f, v);
                        }
                      }
                    else {
                      Rn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Rn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function ym(e, t) {
              const n = e.cleanup,
                r = t[Yn];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const a = n[i + 3];
                    a >= 0 ? r[(o = a)]() : r[(o = -a)].unsubscribe(), (i += 2);
                  } else {
                    const a = r[(o = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[Yn] = null;
              }
            })(e, t),
            1 === t[Le].type && t[ht].destroy();
          const n = t[so];
          if (null !== n && qn(t[Ut])) {
            n !== t[Ut] && Gc(n, t);
            const r = t[ir];
            null !== r && r.detachView(e);
          }
          !(function tm(e) {
            Eu.delete(e[ao]);
          })(t);
        }
      }
      function Wc(e, t, n) {
        return (function Yc(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Wn];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === He.None || i === He.Emulated) return null;
            }
            return Mn(r, n);
          }
        })(e, t.parent, n);
      }
      function Ui(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function qc(e, t, n) {
        e.appendChild(t, n);
      }
      function Kc(e, t, n, r, o) {
        null !== r ? Ui(e, t, n, r, o) : qc(e, t, n);
      }
      function Ia(e, t) {
        return e.parentNode(t);
      }
      function Zc(e, t, n) {
        return Xc(e, t, n);
      }
      let Nu,
        Uu,
        Ra,
        Xc = function Qc(e, t, n) {
          return 40 & e.type ? Mn(e, n) : null;
        };
      function Ta(e, t, n, r) {
        const o = Wc(e, r, t),
          i = t[ht],
          f = Zc(r.parent || t[Xt], r, t);
        if (null != o)
          if (Array.isArray(n)) for (let v = 0; v < n.length; v++) Kc(i, o, n[v], f, !1);
          else Kc(i, o, n, f, !1);
        void 0 !== Nu && Nu(i, r, t, n, o);
      }
      function Aa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Mn(t, e);
          if (4 & n) return Fu(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Aa(e, r);
            {
              const o = e[t.index];
              return qn(o) ? Fu(-1, o) : nn(o);
            }
          }
          if (32 & n) return Iu(t, e)() || nn(e[t.index]);
          {
            const r = ed(e, t);
            return null !== r ? (Array.isArray(r) ? r[0] : Aa(Gs(e[hn]), r)) : Aa(e, t.next);
          }
        }
        return null;
      }
      function ed(e, t) {
        return null !== t ? e[hn][Xt].projection[t.projection] : null;
      }
      function Fu(e, t) {
        const n = pn + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[Le].firstChild;
          if (null !== o) return Aa(r, o);
        }
        return t[lo];
      }
      function ku(e, t, n, r, o, i, a) {
        for (; null != n; ) {
          const f = r[n.index],
            v = n.type;
          if ((a && 0 === t && (f && sr(nn(f), r), (n.flags |= 2)), 32 != (32 & n.flags)))
            if (8 & v) ku(e, t, n.child, r, o, i, !1), cs(t, e, o, f, i);
            else if (32 & v) {
              const _ = Iu(n, r);
              let b;
              for (; (b = _()); ) cs(t, e, o, b, i);
              cs(t, e, o, f, i);
            } else 16 & v ? td(e, t, r, n, o, i) : cs(t, e, o, f, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function zs(e, t, n, r, o, i) {
        ku(n, r, e.firstChild, t, o, i, !1);
      }
      function td(e, t, n, r, o, i) {
        const a = n[hn],
          v = a[Xt].projection[r.projection];
        if (Array.isArray(v)) for (let _ = 0; _ < v.length; _++) cs(t, e, o, v[_], i);
        else ku(e, t, v, a[Ut], o, i, !0);
      }
      function nd(e, t, n) {
        '' === n ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
      }
      function rd(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && E(e, t, r),
          null !== o && nd(e, t, o),
          null !== i &&
            (function Mm(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      function Am(e) {
        Uu = e;
      }
      function ad(e) {
        return (
          (function ju() {
            if (void 0 === Ra && ((Ra = null), kt.trustedTypes))
              try {
                Ra = kt.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Ra;
          })()?.createScriptURL(e) || e
        );
      }
      class ud {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${pt})`;
        }
      }
      function Di(e) {
        return e instanceof ud ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ws(e, t) {
        const n = (function Fm(e) {
          return (e instanceof ud && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${pt})`);
        }
        return n === t;
      }
      const Um = /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var Fn = (() => (
        ((Fn = Fn || {})[(Fn.NONE = 0)] = 'NONE'),
        (Fn[(Fn.HTML = 1)] = 'HTML'),
        (Fn[(Fn.STYLE = 2)] = 'STYLE'),
        (Fn[(Fn.SCRIPT = 3)] = 'SCRIPT'),
        (Fn[(Fn.URL = 4)] = 'URL'),
        (Fn[(Fn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        Fn
      ))();
      function zu(e) {
        const t = qs();
        return t
          ? t.sanitize(Fn.URL, e) || ''
          : Ws(e, 'URL')
          ? Di(e)
          : (function Bu(e) {
              return (e = String(e)).match(Um) ? e : 'unsafe:' + e;
            })(Q(e));
      }
      function gd(e) {
        const t = qs();
        if (t) return ad(t.sanitize(Fn.RESOURCE_URL, e) || '');
        if (Ws(e, 'ResourceURL')) return ad(Di(e));
        throw new q(904, !1);
      }
      function md(e, t, n) {
        return (function Qm(e, t) {
          return ('src' === t &&
            ('embed' === e || 'frame' === e || 'iframe' === e || 'media' === e || 'script' === e)) ||
            ('href' === t && ('base' === e || 'link' === e))
            ? gd
            : zu;
        })(
          t,
          n,
        )(e);
      }
      function qs() {
        const e = fe();
        return e && e[Br];
      }
      const Wu = new rn('ENVIRONMENT_INITIALIZER'),
        vd = new rn('INJECTOR', -1),
        yd = new rn('INJECTOR_DEF_TYPES');
      class Dd {
        get(t, n = mr) {
          if (n === mr) {
            const r = new Error(`NullInjectorError: No provider for ${je(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function Xm(e) {
        return { ɵproviders: e };
      }
      function Jm(...e) {
        return { ɵproviders: _d(0, e), ɵfromNgModule: !0 };
      }
      function _d(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          u(t, (i) => {
            const a = i;
            Yu(a, n, [], r) && (o || (o = []), o.push(a));
          }),
          void 0 !== o && Cd(o, n),
          n
        );
      }
      function Cd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          qu(o, (i) => {
            t.push(i);
          });
        }
      }
      function Yu(e, t, n, r) {
        if (!(e = we(e))) return !1;
        let o = null,
          i = qt(e);
        const a = !i && it(e);
        if (i || a) {
          if (a && !a.standalone) return !1;
          o = e;
        } else {
          const v = e.ngModule;
          if (((i = qt(v)), !i)) return !1;
          o = v;
        }
        const f = r.has(o);
        if (a) {
          if (f) return !1;
          if ((r.add(o), a.dependencies)) {
            const v = 'function' == typeof a.dependencies ? a.dependencies() : a.dependencies;
            for (const _ of v) Yu(_, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !f) {
              let _;
              r.add(o);
              try {
                u(i.imports, (b) => {
                  Yu(b, t, n, r) && (_ || (_ = []), _.push(b));
                });
              } finally {
              }
              void 0 !== _ && Cd(_, t);
            }
            if (!f) {
              const _ = Sr(o) || (() => new o());
              t.push(
                { provide: o, useFactory: _, deps: et },
                { provide: yd, useValue: o, multi: !0 },
                { provide: Wu, useValue: () => rt(o), multi: !0 },
              );
            }
            const v = i.providers;
            null == v ||
              f ||
              qu(v, (b) => {
                t.push(b);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function qu(e, t) {
        for (let n of e) Me(n) && (n = n.ɵproviders), Array.isArray(n) ? qu(n, t) : t(n);
      }
      const ev = se({ provide: String, useValue: se });
      function Ku(e) {
        return null !== e && 'object' == typeof e && ev in e;
      }
      function ji(e) {
        return 'function' == typeof e;
      }
      const Zu = new rn('Set Injector scope.'),
        xa = {},
        nv = {};
      let Qu;
      function Na() {
        return void 0 === Qu && (Qu = new Dd()), Qu;
      }
      class Bi {}
      class bd extends Bi {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Ju(t, (a) => this.processProvider(a)),
            this.records.set(vd, fs(void 0, this)),
            o.has('environment') && this.records.set(Bi, fs(void 0, this));
          const i = this.records.get(Zu);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(yd.multi, et, ne.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = ue(this),
            r = bt(void 0);
          try {
            return t();
          } finally {
            ue(n), bt(r);
          }
        }
        get(t, n = mr, r = ne.Default) {
          this.assertNotDestroyed(), (r = Vt(r));
          const o = ue(this),
            i = bt(void 0);
          try {
            if (!(r & ne.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const v =
                  (function av(e) {
                    return 'function' == typeof e || ('object' == typeof e && e instanceof rn);
                  })(t) && Tt(t);
                (f = v && this.injectableDefInScope(v) ? fs(Xu(t), xa) : null), this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & ne.Self ? Na() : this.parent).get(t, (n = r & ne.Optional && n === mr ? null : n));
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[wr] = a[wr] || []).unshift(je(t)), o)) throw a;
              return (function A(e, t, n, r) {
                const o = e[wr];
                throw (
                  (t[j] && o.unshift(t[j]),
                  (e.message = (function $(e, t, n, r = null) {
                    e = e && '\n' === e.charAt(0) && e.charAt(1) == F ? e.slice(2) : e;
                    let o = je(t);
                    if (Array.isArray(t)) o = t.map(je).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let f = t[a];
                          i.push(a + ':' + ('string' == typeof f ? JSON.stringify(f) : je(f)));
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(ae, '\n  ')}`;
                  })('\n' + e.message, o, n, r)),
                  (e[Zn] = o),
                  (e[wr] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            bt(i), ue(o);
          }
        }
        resolveInjectorInitializers() {
          const t = ue(this),
            n = bt(void 0);
          try {
            const r = this.get(Wu.multi, et, ne.Self);
            for (const o of r) o();
          } finally {
            ue(t), bt(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(je(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new q(205, !1);
        }
        processProvider(t) {
          let n = ji((t = we(t))) ? t : we(t && t.provide);
          const r = (function ov(e) {
            return Ku(e) ? fs(void 0, e.useValue) : fs(Md(e), xa);
          })(t);
          if (ji(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o || ((o = fs(void 0, xa, !0)), (o.factory = () => yn(o.multi)), this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === xa && ((n.value = nv), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function sv(e) {
                return null !== e && 'object' == typeof e && 'function' == typeof e.ngOnDestroy;
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = we(t.providedIn);
          return 'string' == typeof n ? 'any' === n || this.scopes.has(n) : this.injectorDefTypes.has(n);
        }
      }
      function Xu(e) {
        const t = Tt(e),
          n = null !== t ? t.factory : Sr(e);
        if (null !== n) return n;
        if (e instanceof rn) throw new q(204, !1);
        if (e instanceof Function)
          return (function rv(e) {
            const t = e.length;
            if (t > 0) throw (p(t, '?'), new q(204, !1));
            const n = (function Tn(e) {
              const t = e && (e[en] || e[gt]);
              return t
                ? ((function gr(e) {
                    if (e.hasOwnProperty('name')) return e.name;
                    ('' + e).match(/^function\s*([^\s(]+)/);
                  })(e),
                  t)
                : null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new q(204, !1);
      }
      function Md(e, t, n) {
        let r;
        if (ji(e)) {
          const o = we(e);
          return Sr(o) || Xu(o);
        }
        if (Ku(e)) r = () => we(e.useValue);
        else if (
          (function Ed(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...yn(e.deps || []));
        else if (
          (function wd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => rt(we(e.useExisting));
        else {
          const o = we(e && (e.useClass || e.provide));
          if (
            !(function iv(e) {
              return !!e.deps;
            })(e)
          )
            return Sr(o) || Xu(o);
          r = () => new o(...yn(e.deps));
        }
        return r;
      }
      function fs(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Ju(e, t) {
        for (const n of e) Array.isArray(n) ? Ju(n, t) : n && Me(n) ? Ju(n.ɵproviders, t) : t(n);
      }
      class uv {}
      class Sd {}
      class cv {
        resolveComponentFactory(t) {
          throw (function lv(e) {
            const t = Error(`No component factory found for ${je(e)}. Did you add it to @NgModule.entryComponents?`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ks = (() => {
        class e {}
        return (e.NULL = new cv()), e;
      })();
      function dv() {
        return hs(gn(), fe());
      }
      function hs(e, t) {
        return new Zs(Mn(e, t));
      }
      let Zs = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = dv), e;
      })();
      function fv(e) {
        return e instanceof Zs ? e.nativeElement : e;
      }
      class Td {}
      let hv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function pv() {
                const e = fe(),
                  n = _n(gn().index, e);
                return (un(n) ? n : e)[ht];
              })()),
            e
          );
        })(),
        gv = (() => {
          class e {}
          return (e.ɵprov = Ht({ token: e, providedIn: 'root', factory: () => null })), e;
        })();
      class Ad {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const mv = new Ad('15.2.3'),
        el = {},
        tl = 'ngOriginalError';
      function nl(e) {
        return e[tl];
      }
      class Qs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t), n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && nl(t);
          for (; n && nl(n); ) n = nl(n);
          return n || null;
        }
      }
      function oi(e) {
        return e instanceof Function ? e() : e;
      }
      function Rd(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Pd = 'ng-template';
      function Iv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && 'class' === o) {
            if (((o = e[r]), -1 !== Rd(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && 'string' == typeof (o = e[r++]); ) if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function xd(e) {
        return 4 === e.type && e.value !== Pd;
      }
      function Tv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Pd);
      }
      function Av(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function Pv(e) {
            for (let t = 0; t < e.length; t++) if (B(e[t])) return t;
            return e.length;
          })(o);
        let a = !1;
        for (let f = 0; f < t.length; f++) {
          const v = t[f];
          if ('number' != typeof v) {
            if (!a)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== v && !Tv(e, v, n)) || ('' === v && 1 === t.length))) {
                  if (to(r)) return !1;
                  a = !0;
                }
              } else {
                const _ = 8 & r ? v : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!Iv(e.attrs, _, n)) {
                    if (to(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const O = Ov(8 & r ? 'class' : v, o, xd(e), n);
                if (-1 === O) {
                  if (to(r)) return !1;
                  a = !0;
                  continue;
                }
                if ('' !== _) {
                  let k;
                  k = O > i ? '' : o[O + 1].toLowerCase();
                  const G = 8 & r ? k : null;
                  if ((G && -1 !== Rd(G, _, 0)) || (2 & r && _ !== k)) {
                    if (to(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !to(r) && !to(v)) return !1;
            if (a && to(v)) continue;
            (a = !1), (r = v | (1 & r));
          }
        }
        return to(r) || a;
      }
      function to(e) {
        return 0 == (1 & e);
      }
      function Ov(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const a = t[o];
            if (a === e) return o;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let f = t[++o];
                for (; 'string' == typeof f; ) f = t[++o];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function xv(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Nd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (Av(e, t[r], n)) return !0;
        return !1;
      }
      function Nv(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Fd(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Fv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = '',
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ('string' == typeof a)
            if (2 & r) {
              const f = e[++n];
              o += '[' + a + (f.length > 0 ? '="' + f + '"' : '') + ']';
            } else 8 & r ? (o += '.' + a) : 4 & r && (o += ' ' + a);
          else '' !== o && !to(a) && ((t += Fd(i, o)), (o = '')), (r = a), (i = i || !to(r));
          n++;
        }
        return '' !== o && (t += Fd(i, o)), t;
      }
      const yt = {};
      function Ld(e) {
        kd(It(), fe(), Pn() + e, !1);
      }
      function kd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[ot])) {
            const i = e.preOrderCheckHooks;
            null !== i && Be(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Et(t, i, 0, n);
          }
        Lr(n);
      }
      function Bd(e, t = null, n = null, r) {
        const o = Hd(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Hd(e, t = null, n = null, r, o = new Set()) {
        const i = [n || et, Jm(e)];
        return (r = r || ('object' == typeof e ? void 0 : je(e))), new bd(i, t || Na(), r || null, o);
      }
      let Hi = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return Bd({ name: '' }, r, n, '');
            {
              const o = n.name ?? '';
              return Bd({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = mr),
          (e.NULL = new Dd()),
          (e.ɵprov = Ht({ token: e, providedIn: 'any', factory: () => rt(vd) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function ms(e, t = ne.Default) {
        const n = fe();
        return null === n ? rt(e, t) : mu(gn(), n, we(e), t);
      }
      function Kd(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              So(n[r]), a.contentQueries(2, t[i], i);
            }
          }
      }
      function La(e, t, n, r, o, i, a, f, v, _, b) {
        const O = t.blueprint.slice();
        return (
          (O[Wn] = o),
          (O[ot] = 76 | r),
          (null !== b || (e && 1024 & e[ot])) && (O[ot] |= 1024),
          Co(O),
          (O[Ut] = O[Qn] = e),
          (O[Gt] = n),
          (O[br] = a || (e && e[br])),
          (O[ht] = f || (e && e[ht])),
          (O[Br] = v || (e && e[Br]) || null),
          (O[jn] = _ || (e && e[jn]) || null),
          (O[Xt] = i),
          (O[ao] = (function Jg() {
            return Xg++;
          })()),
          (O[wi] = b),
          (O[hn] = 2 == t.type ? e[hn] : O),
          O
        );
      }
      function vs(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function al(e, t, n, r, o) {
            const i = wo(),
              a = Yo(),
              v = (e.data[t] = (function uy(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tView: null,
                  next: null,
                  prev: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = v),
              null !== i &&
                (a
                  ? null == i.child && null !== v.parent && (i.child = v)
                  : null === i.next && ((i.next = v), (v.prev = i))),
              v
            );
          })(e, t, n, r, o)),
            (function fi() {
              return We.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const a = (function lr() {
            const e = We.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return cr(i, !0), i;
      }
      function Xs(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function ul(e, t, n) {
        Zo(t);
        try {
          const r = e.viewQuery;
          null !== r && yl(1, r, n);
          const o = e.template;
          null !== o && Zd(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Kd(e, t),
            e.staticViewQueries && yl(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function iy(e, t) {
              for (let n = 0; n < t.length; n++) Iy(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), r);
        } finally {
          (t[ot] &= -5), Qo();
        }
      }
      function ka(e, t, n, r) {
        const o = t[ot];
        if (128 != (128 & o)) {
          Zo(t);
          try {
            Co(t),
              (function Qr(e) {
                return (We.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Zd(e, t, n, 2, r);
            const a = 3 == (3 & o);
            if (a) {
              const _ = e.preOrderCheckHooks;
              null !== _ && Be(t, _, null);
            } else {
              const _ = e.preOrderHooks;
              null !== _ && Et(t, _, 0, null), At(t, 0);
            }
            if (
              ((function My(e) {
                for (let t = Tu(e); null !== t; t = Au(t)) {
                  if (!t[$r]) continue;
                  const n = t[ur];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    512 & o[ot] || ci(o[Ut], 1), (o[ot] |= 512);
                  }
                }
              })(t),
              (function by(e) {
                for (let t = Tu(e); null !== t; t = Au(t))
                  for (let n = pn; n < t.length; n++) {
                    const r = t[n],
                      o = r[Le];
                    _o(r) && ka(o, r, o.template, r[Gt]);
                  }
              })(t),
              null !== e.contentQueries && Kd(e, t),
              a)
            ) {
              const _ = e.contentCheckHooks;
              null !== _ && Be(t, _);
            } else {
              const _ = e.contentHooks;
              null !== _ && Et(t, _, 1), At(t, 1);
            }
            !(function ry(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) Lr(~o);
                    else {
                      const i = o,
                        a = n[++r],
                        f = n[++r];
                      bo(a, i), f(2, t[i]);
                    }
                  }
                } finally {
                  Lr(-1);
                }
            })(e, t);
            const f = e.components;
            null !== f &&
              (function oy(e, t) {
                for (let n = 0; n < t.length; n++) Sy(e, t[n]);
              })(t, f);
            const v = e.viewQuery;
            if ((null !== v && yl(2, v, r), a)) {
              const _ = e.viewCheckHooks;
              null !== _ && Be(t, _);
            } else {
              const _ = e.viewHooks;
              null !== _ && Et(t, _, 2), At(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[ot] &= -41),
              512 & t[ot] && ((t[ot] &= -513), ci(t[Ut], -1));
          } finally {
            Qo();
          }
        }
      }
      function Zd(e, t, n, r, o) {
        const i = Pn(),
          a = 2 & r;
        try {
          Lr(-1), a && t.length > Kt && kd(e, t, Kt, !1), Rn(a ? 2 : 0, o), n(r, o);
        } finally {
          Lr(i), Rn(a ? 3 : 1, o);
        }
      }
      function ll(e, t, n) {
        if (zr(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        }
      }
      function cl(e, t, n) {
        Oi() &&
          ((function py(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            xr(n) &&
              (function Cy(e, t, n) {
                const r = Mn(t, e),
                  o = Qd(n),
                  i = e[br],
                  a = Va(e, La(e, o, null, n.onPush ? 32 : 16, r, t, i, i.createRenderer(r, n), null, null, null));
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || is(n, t),
              sr(r, t);
            const a = n.initialInputs;
            for (let f = o; f < i; f++) {
              const v = e.data[f],
                _ = Vr(t, e, f, n);
              sr(_, t), null !== a && wy(0, f - o, _, v, 0, a), Bn(v) && (_n(n.index, t)[Gt] = Vr(t, e, f, n));
            }
          })(e, t, n, Mn(n, t)),
          64 == (64 & n.flags) && rf(e, t, n));
      }
      function dl(e, t, n = Mn) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              f = -1 === a ? n(t, e) : e[a];
            e[o++] = f;
          }
        }
      }
      function Qd(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = fl(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
            ))
          : t;
      }
      function fl(e, t, n, r, o, i, a, f, v, _) {
        const b = Kt + r,
          O = b + o,
          k = (function sy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : yt);
            return n;
          })(b, O),
          G = 'function' == typeof _ ? _() : _;
        return (k[Le] = {
          type: e,
          blueprint: k,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: k.slice().fill(null, b),
          bindingStartIndex: b,
          expandoStartIndex: O,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof a ? a() : a,
          firstChild: null,
          schemas: v,
          consts: G,
          incompleteFirstPass: !1,
        });
      }
      function Xd(e, t, n, r) {
        const o = af(t);
        null === n ? o.push(r) : (o.push(n), e.firstCreatePass && uf(e).push(r, o.length - 1));
      }
      function Jd(e, t, n, r) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            n = null === n ? {} : n;
            const i = e[o];
            null === r ? ef(n, t, o, i) : r.hasOwnProperty(o) && ef(n, t, r[o], i);
          }
        return n;
      }
      function ef(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function Pr(e, t, n, r, o, i, a, f) {
        const v = Mn(t, n);
        let b,
          _ = t.inputs;
        !f && null != _ && (b = _[r])
          ? (Dl(e, n, b, r, o), xr(t) && tf(n, t.index))
          : 3 & t.type &&
            ((r = (function cy(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (o = null != a ? a(o, t.value || '', r) : o),
            i.setProperty(v, r, o));
      }
      function tf(e, t) {
        const n = _n(t, e);
        16 & n[ot] || (n[ot] |= 32);
      }
      function hl(e, t, n, r) {
        if (Oi()) {
          const o = null === r ? null : { '': -1 },
            i = (function my(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const a = n[i];
                  if (Nd(t, a.selectors, !1))
                    if ((r || (r = []), Bn(a)))
                      if (null !== a.findHostDirectiveDefs) {
                        const f = [];
                        (o = o || new Map()), a.findHostDirectiveDefs(a, f, o), r.unshift(...f, a), pl(e, t, f.length);
                      } else r.unshift(a), pl(e, t, 0);
                    else (o = o || new Map()), a.findHostDirectiveDefs?.(a, r, o), r.push(a);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let a, f;
          null === i ? (a = f = null) : ([a, f] = i),
            null !== a && nf(e, t, n, a, o, f),
            o &&
              (function vy(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new q(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = Ye(n.mergedAttrs, n.attrs);
      }
      function nf(e, t, n, r, o, i) {
        for (let _ = 0; _ < r.length; _++) Fs(is(n, t), e, r[_].type);
        !(function Dy(e, t, n) {
          (e.flags |= 1), (e.directiveStart = t), (e.directiveEnd = t + n), (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let _ = 0; _ < r.length; _++) {
          const b = r[_];
          b.providersResolver && b.providersResolver(b);
        }
        let a = !1,
          f = !1,
          v = Xs(e, t, r.length, null);
        for (let _ = 0; _ < r.length; _++) {
          const b = r[_];
          (n.mergedAttrs = Ye(n.mergedAttrs, b.hostAttrs)),
            _y(e, n, t, v, b),
            yy(v, b, o),
            null !== b.contentQueries && (n.flags |= 4),
            (null !== b.hostBindings || null !== b.hostAttrs || 0 !== b.hostVars) && (n.flags |= 64);
          const O = b.type.prototype;
          !a &&
            (O.ngOnChanges || O.ngOnInit || O.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), (a = !0)),
            !f &&
              (O.ngOnChanges || O.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), (f = !0)),
            v++;
        }
        !(function ly(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            a = t.attrs,
            f = [];
          let v = null,
            _ = null;
          for (let b = t.directiveStart; b < o; b++) {
            const O = i[b],
              k = n ? n.get(O) : null,
              re = k ? k.outputs : null;
            (v = Jd(O.inputs, b, v, k ? k.inputs : null)), (_ = Jd(O.outputs, b, _, re));
            const be = null === v || null === a || xd(t) ? null : Ey(v, b, a);
            f.push(be);
          }
          null !== v && (v.hasOwnProperty('class') && (t.flags |= 8), v.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = f),
            (t.inputs = v),
            (t.outputs = _);
        })(e, n, i);
      }
      function rf(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          a = (function Pi() {
            return We.lFrame.currentDirectiveIndex;
          })();
        try {
          Lr(i);
          for (let f = r; f < o; f++) {
            const v = e.data[f],
              _ = t[f];
            Ko(f), (null !== v.hostBindings || 0 !== v.hostVars || null !== v.hostAttrs) && gy(v, _);
          }
        } finally {
          Lr(-1), Ko(a);
        }
      }
      function gy(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function pl(e, t, n) {
        (t.componentOffset = n), (e.components || (e.components = [])).push(t.index);
      }
      function yy(e, t, n) {
        if (n) {
          if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Bn(t) && (n[''] = e);
        }
      }
      function _y(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Sr(o.type)),
          a = new Lt(i, Bn(o), ms);
        (e.blueprint[r] = a),
          (n[r] = a),
          (function fy(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let a = e.hostBindingOpCodes;
              null === a && (a = e.hostBindingOpCodes = []);
              const f = ~t.index;
              (function hy(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(a) != f && a.push(f),
                a.push(n, r, i);
            }
          })(e, t, r, Xs(e, n, o.hostVars, yt), o);
      }
      function Po(e, t, n, r, o, i) {
        const a = Mn(e, t);
        !(function gl(e, t, n, r, o, i, a) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const f = null == a ? Q(i) : a(i, r || '', o);
            e.setAttribute(t, o, f, n);
          }
        })(t[ht], a, i, e.value, n, r, o);
      }
      function wy(e, t, n, r, o, i) {
        const a = i[t];
        if (null !== a) {
          const f = r.setInput;
          for (let v = 0; v < a.length; ) {
            const _ = a[v++],
              b = a[v++],
              O = a[v++];
            null !== f ? r.setInput(n, O, _, b) : (n[b] = O);
          }
        }
      }
      function Ey(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const a = e[i];
                for (let f = 0; f < a.length; f += 2)
                  if (a[f] === t) {
                    r.push(i, a[f + 1], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function sf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function Sy(e, t) {
        const n = _n(t, e);
        if (_o(n)) {
          const r = n[Le];
          48 & n[ot] ? ka(r, n, r.template, n[Gt]) : n[cn] > 0 && ml(n);
        }
      }
      function ml(e) {
        for (let r = Tu(e); null !== r; r = Au(r))
          for (let o = pn; o < r.length; o++) {
            const i = r[o];
            if (_o(i))
              if (512 & i[ot]) {
                const a = i[Le];
                ka(a, i, a.template, i[Gt]);
              } else i[cn] > 0 && ml(i);
          }
        const n = e[Le].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = _n(n[r], e);
            _o(o) && o[cn] > 0 && ml(o);
          }
      }
      function Iy(e, t) {
        const n = _n(t, e),
          r = n[Le];
        (function Ty(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
        })(r, n),
          ul(r, n, n[Gt]);
      }
      function Va(e, t) {
        return e[an] ? (e[on][jt] = t) : (e[an] = t), (e[on] = t), t;
      }
      function vl(e) {
        for (; e; ) {
          e[ot] |= 32;
          const t = Gs(e);
          if (Ei(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Ua(e, t, n, r = !0) {
        const o = t[br];
        o.begin && o.begin();
        try {
          ka(e, t, e.template, n);
        } catch (a) {
          throw (r && cf(t, a), a);
        } finally {
          o.end && o.end();
        }
      }
      function yl(e, t, n) {
        So(0), t(e, n);
      }
      function af(e) {
        return e[Yn] || (e[Yn] = []);
      }
      function uf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function cf(e, t) {
        const n = e[jn],
          r = n ? n.get(Qs, null) : null;
        r && r.handleError(t);
      }
      function Dl(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            f = n[i++],
            v = t[a],
            _ = e.data[a];
          null !== _.setInput ? _.setInput(v, o, r, f) : (v[f] = o);
        }
      }
      function ii(e, t, n) {
        const r = Ho(t, e);
        !(function $c(e, t, n) {
          e.setValue(t, n);
        })(e[ht], r, n);
      }
      function ja(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const f = t[a];
            'number' == typeof f ? (i = f) : 1 == i ? (o = Xe(o, f)) : 2 == i && (r = Xe(r, f + ': ' + t[++a] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r), n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Ba(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(nn(i)), qn(i)))
            for (let f = pn; f < i.length; f++) {
              const v = i[f],
                _ = v[Le].firstChild;
              null !== _ && Ba(v[Le], v, _, r);
            }
          const a = n.type;
          if (8 & a) Ba(e, t, n.child, r);
          else if (32 & a) {
            const f = Iu(n, t);
            let v;
            for (; (v = f()); ) r.push(v);
          } else if (16 & a) {
            const f = ed(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const v = Gs(t[hn]);
              Ba(v[Le], v, f, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class Js {
        get rootNodes() {
          const t = this._lView,
            n = t[Le];
          return Ba(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Gt];
        }
        set context(t) {
          this._lView[Gt] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[ot]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Ut];
            if (qn(t)) {
              const n = t[Gr],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Pu(t, r), s(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          zc(this._lView[Le], this._lView);
        }
        onDestroy(t) {
          Xd(this._lView[Le], this._lView, null, t);
        }
        markForCheck() {
          vl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[ot] &= -65;
        }
        reattach() {
          this._lView[ot] |= 64;
        }
        detectChanges() {
          Ua(this._lView[Le], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new q(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function pm(e, t) {
              zs(e, t, t[ht], 2, null, null);
            })(this._lView[Le], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new q(902, !1);
          this._appRef = t;
        }
      }
      class Ay extends Js {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Ua(t[Le], t, t[Gt], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class df extends Ks {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = it(t);
          return new ea(n, this.ngModule);
        }
      }
      function ff(e) {
        const t = [];
        for (let n in e) e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Ry {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Vt(r);
          const o = this.injector.get(t, el, r);
          return o !== el || n === el ? o : this.parentInjector.get(t, n, r);
        }
      }
      class ea extends Sd {
        get inputs() {
          return ff(this.componentDef.inputs);
        }
        get outputs() {
          return ff(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Lv(e) {
              return e.map(Fv).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof Bi ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const a = i ? new Ry(t, i) : t,
            f = a.get(Td, null);
          if (null === f) throw new q(407, !1);
          const v = a.get(gv, null),
            _ = f.createRenderer(null, this.componentDef),
            b = this.componentDef.selectors[0][0] || 'div',
            O = r
              ? (function ay(e, t, n) {
                  return e.selectRootElement(t, n === He.ShadowDom);
                })(_, r, this.componentDef.encapsulation)
              : Ru(
                  _,
                  b,
                  (function Oy(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                  })(b),
                ),
            k = this.componentDef.onPush ? 288 : 272,
            G = fl(0, null, null, 1, 0, null, null, null, null, null),
            re = La(null, G, null, k, null, null, f, _, v, a, null);
          let be, Fe;
          Zo(re);
          try {
            const Ge = this.componentDef;
            let nt,
              ve = null;
            Ge.findHostDirectiveDefs
              ? ((nt = []), (ve = new Map()), Ge.findHostDirectiveDefs(Ge, nt, ve), nt.push(Ge))
              : (nt = [Ge]);
            const mt = (function xy(e, t) {
                const n = e[Le],
                  r = Kt;
                return (e[r] = t), vs(n, r, 2, '#host', null);
              })(re, O),
              dn = (function Ny(e, t, n, r, o, i, a, f) {
                const v = o[Le];
                !(function Fy(e, t, n, r) {
                  for (const o of e) t.mergedAttrs = Ye(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs && (ja(t, t.mergedAttrs, !0), null !== n && rd(r, n, t));
                })(r, e, t, a);
                const _ = i.createRenderer(t, n),
                  b = La(o, Qd(n), null, n.onPush ? 32 : 16, o[e.index], e, i, _, f || null, null, null);
                return v.firstCreatePass && pl(v, e, r.length - 1), Va(o, b), (o[e.index] = b);
              })(mt, O, Ge, nt, re, f, _);
            (Fe = $o(G, Kt)),
              O &&
                (function ky(e, t, n, r) {
                  if (r) E(e, n, ['ng-version', mv.full]);
                  else {
                    const { attrs: o, classes: i } = (function kv(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        o = 2;
                      for (; r < e.length; ) {
                        let i = e[r];
                        if ('string' == typeof i) 2 === o ? '' !== i && t.push(i, e[++r]) : 8 === o && n.push(i);
                        else {
                          if (!to(o)) break;
                          o = i;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    o && E(e, n, o), i && i.length > 0 && nd(e, n, i.join(' '));
                  }
                })(_, Ge, O, r),
              void 0 !== n &&
                (function Vy(e, t, n) {
                  const r = (e.projection = []);
                  for (let o = 0; o < t.length; o++) {
                    const i = n[o];
                    r.push(null != i ? Array.from(i) : null);
                  }
                })(Fe, this.ngContentSelectors, n),
              (be = (function Ly(e, t, n, r, o, i) {
                const a = gn(),
                  f = o[Le],
                  v = Mn(a, o);
                nf(f, o, a, n, null, r);
                for (let b = 0; b < n.length; b++) sr(Vr(o, f, a.directiveStart + b, a), o);
                rf(f, o, a), v && sr(v, o);
                const _ = Vr(o, f, a.directiveStart + a.componentOffset, a);
                if (((e[Gt] = o[Gt] = _), null !== i)) for (const b of i) b(_, t);
                return ll(f, a, e), _;
              })(dn, Ge, nt, ve, re, [Uy])),
              ul(G, re, null);
          } finally {
            Qo();
          }
          return new Py(this.componentType, be, hs(Fe, re), re, Fe);
        }
      }
      class Py extends uv {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Ay(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            Dl(i[Le], i, o, t, n), tf(i, this._tNode.index);
          }
        }
        get injector() {
          return new Jo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function Uy() {
        const e = gn();
        ce(fe()[Le], e);
      }
      function _l(e) {
        let t = (function hf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (Bn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new q(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const a = e;
              (a.inputs = Cl(e.inputs)), (a.declaredInputs = Cl(e.declaredInputs)), (a.outputs = Cl(e.outputs));
              const f = o.hostBindings;
              f && $y(e, f);
              const v = o.viewQuery,
                _ = o.contentQueries;
              if (
                (v && By(e, v),
                _ && Hy(e, _),
                xe(e.inputs, o.inputs),
                xe(e.declaredInputs, o.declaredInputs),
                xe(e.outputs, o.outputs),
                Bn(o) && o.data.animation)
              ) {
                const b = e.data;
                b.animation = (b.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const f = i[a];
                f && f.ngInherit && f(e), f === _l && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function jy(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars), (o.hostAttrs = Ye(o.hostAttrs, (n = Ye(n, o.hostAttrs))));
          }
        })(r);
      }
      function Cl(e) {
        return e === _t ? {} : e === et ? [] : e;
      }
      function By(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function Hy(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function $y(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function Ha(e) {
        return !!wl(e) && (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e));
      }
      function wl(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function xo(e, t, n) {
        return (e[t] = n);
      }
      function ar(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function $i(e, t, n, r) {
        const o = ar(e, t, n);
        return ar(e, t + 1, r) || o;
      }
      function El(e, t, n, r) {
        const o = fe();
        return ar(o, Xr(), t) && (It(), Po(tn(), o, e, t, n, r)), El;
      }
      function Ds(e, t, n, r) {
        return ar(e, Xr(), n) ? t + Q(n) + r : yt;
      }
      function _s(e, t, n, r, o, i) {
        const f = $i(
          e,
          (function Kn() {
            return We.lFrame.bindingIndex;
          })(),
          n,
          o,
        );
        return yr(2), f ? t + Q(n) + r + Q(o) + i : yt;
      }
      function Sf(e, t, n, r, o, i, a, f) {
        const v = fe(),
          _ = It(),
          b = e + Kt,
          O = _.firstCreatePass
            ? (function Jy(e, t, n, r, o, i, a, f, v) {
                const _ = t.consts,
                  b = vs(t, e, 4, a || null, Jn(_, f));
                hl(t, n, b, Jn(_, v)), ce(t, b);
                const O = (b.tView = fl(2, b, r, o, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, _));
                return null !== t.queries && (t.queries.template(t, b), (O.queries = t.queries.embeddedTView(b))), b;
              })(b, _, v, t, n, r, o, i, a)
            : _.data[b];
        cr(O, !1);
        const k = v[ht].createComment('');
        Ta(_, v, k, O), sr(k, v), Va(v, (v[b] = sf(k, v, k, O))), Xn(O) && cl(_, v, O), null != a && dl(v, O, f);
      }
      function If(e) {
        return Kr(
          (function qo() {
            return We.lFrame.contextLView;
          })(),
          Kt + e,
        );
      }
      function bl(e, t, n) {
        const r = fe();
        return ar(r, Xr(), t) && Pr(It(), tn(), r, e, t, r[ht], n, !1), bl;
      }
      function Ml(e, t, n, r, o) {
        const a = o ? 'class' : 'style';
        Dl(e, n, t.inputs[a], a, r);
      }
      function Ga(e, t, n, r) {
        const o = fe(),
          i = It(),
          a = Kt + e,
          f = o[ht],
          v = i.firstCreatePass
            ? (function tD(e, t, n, r, o, i) {
                const a = t.consts,
                  v = vs(t, e, 2, r, Jn(a, o));
                return (
                  hl(t, n, v, Jn(a, i)),
                  null !== v.attrs && ja(v, v.attrs, !1),
                  null !== v.mergedAttrs && ja(v, v.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, v),
                  v
                );
              })(a, i, o, t, n, r)
            : i.data[a],
          _ = (o[a] = Ru(
            f,
            t,
            (function P() {
              return We.lFrame.currentNamespace;
            })(),
          )),
          b = Xn(v);
        return (
          cr(v, !0),
          rd(f, _, v),
          32 != (32 & v.flags) && Ta(i, o, _, v),
          0 ===
            (function xs() {
              return We.lFrame.elementDepthCount;
            })() && sr(_, o),
          (function ts() {
            We.lFrame.elementDepthCount++;
          })(),
          b && (cl(i, o, v), ll(i, v, o)),
          null !== r && dl(o, v),
          Ga
        );
      }
      function za() {
        let e = gn();
        Yo() ? Zr() : ((e = e.parent), cr(e, !1));
        const t = e;
        !(function ha() {
          We.lFrame.elementDepthCount--;
        })();
        const n = It();
        return (
          n.firstCreatePass && (ce(n, e), zr(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function dr(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            Ml(n, t, fe(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function h(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Ml(n, t, fe(), t.stylesWithoutHost, !1),
          za
        );
      }
      function Sl(e, t, n, r) {
        return Ga(e, t, n, r), za(), Sl;
      }
      function Wa(e, t, n) {
        const r = fe(),
          o = It(),
          i = e + Kt,
          a = o.firstCreatePass
            ? (function nD(e, t, n, r, o) {
                const i = t.consts,
                  a = Jn(i, r),
                  f = vs(t, e, 8, 'ng-container', a);
                return (
                  null !== a && ja(f, a, !0),
                  hl(t, n, f, Jn(i, o)),
                  null !== t.queries && t.queries.elementStart(t, f),
                  f
                );
              })(i, o, r, t, n)
            : o.data[i];
        cr(a, !0);
        const f = (r[i] = r[ht].createComment(''));
        return Ta(o, r, f, a), sr(f, r), Xn(a) && (cl(o, r, a), ll(o, a, r)), null != n && dl(r, a), Wa;
      }
      function Ya() {
        let e = gn();
        const t = It();
        return (
          Yo() ? Zr() : ((e = e.parent), cr(e, !1)),
          t.firstCreatePass && (ce(t, e), zr(e) && t.queries.elementEnd(e)),
          Ya
        );
      }
      function Af() {
        return fe();
      }
      function Il(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Of(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Rf = Of;
      function Tl(e, t, n, r) {
        const o = fe(),
          i = It(),
          a = gn();
        return (
          (function xf(e, t, n, r, o, i, a) {
            const f = Xn(r),
              _ = e.firstCreatePass && uf(e),
              b = t[Gt],
              O = af(t);
            let k = !0;
            if (3 & r.type || a) {
              const be = Mn(r, t),
                Fe = a ? a(be) : be,
                Ge = O.length,
                nt = a ? (mt) => a(nn(mt[r.index])) : r.index;
              let ve = null;
              if (
                (!a &&
                  f &&
                  (ve = (function rD(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const a = o[i];
                        if (a === n && o[i + 1] === r) {
                          const f = t[Yn],
                            v = o[i + 2];
                          return f.length > v ? f[v] : null;
                        }
                        'string' == typeof a && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== ve)
              )
                ((ve.__ngLastListenerFn__ || ve).__ngNextListenerFn__ = i), (ve.__ngLastListenerFn__ = i), (k = !1);
              else {
                i = Ff(r, t, b, i, !1);
                const mt = n.listen(Fe, o, i);
                O.push(i, mt), _ && _.push(o, nt, Ge, Ge + 1);
              }
            } else i = Ff(r, t, b, i, !1);
            const G = r.outputs;
            let re;
            if (k && null !== G && (re = G[o])) {
              const be = re.length;
              if (be)
                for (let Fe = 0; Fe < be; Fe += 2) {
                  const dn = t[re[Fe]][re[Fe + 1]].subscribe(i),
                    In = O.length;
                  O.push(i, dn), _ && _.push(o, r.index, In, -(In + 1));
                }
            }
          })(i, o, o[ht], a, e, t, r),
          Tl
        );
      }
      function Nf(e, t, n, r) {
        try {
          return Rn(6, t, n), !1 !== n(r);
        } catch (o) {
          return cf(e, o), !1;
        } finally {
          Rn(7, t, n);
        }
      }
      function Ff(e, t, n, r, o) {
        return function i(a) {
          if (a === Function) return r;
          vl(e.componentOffset > -1 ? _n(e.index, t) : t);
          let v = Nf(t, n, r, a),
            _ = i.__ngNextListenerFn__;
          for (; _; ) (v = Nf(t, n, _, a) && v), (_ = _.__ngNextListenerFn__);
          return o && !1 === v && (a.preventDefault(), (a.returnValue = !1)), v;
        };
      }
      function Lf(e = 1) {
        return (function ns(e) {
          return (We.lFrame.contextLView = (function rs(e, t) {
            for (; e > 0; ) (t = t[Qn]), e--;
            return t;
          })(e, We.lFrame.contextLView))[Gt];
        })(e);
      }
      function oD(e, t) {
        let n = null;
        const r = (function Rv(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          if ('*' !== i) {
            if (null === r ? Nd(e, i, !0) : Nv(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function kf(e) {
        const t = fe()[hn][Xt];
        if (!t.projection) {
          const r = (t.projection = p(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            const a = e ? oD(i, e) : 0;
            null !== a && (o[a] ? (o[a].projectionNext = i) : (r[a] = i), (o[a] = i)), (i = i.next);
          }
        }
      }
      function Vf(e, t = 0, n) {
        const r = fe(),
          o = It(),
          i = vs(o, Kt + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          Zr(),
          32 != (32 & i.flags) &&
            (function wm(e, t, n) {
              td(t[ht], 0, t, n, Wc(e, n, t), Zc(n.parent || t[Xt], n, t));
            })(o, r, i);
      }
      function qa(e, t, n, r, o) {
        const i = fe(),
          a = Ds(i, t, n, r);
        return a !== yt && Pr(It(), tn(), i, e, a, i[ht], o, !1), qa;
      }
      function Ka(e, t) {
        return (e << 17) | (t << 2);
      }
      function _i(e) {
        return (e >> 17) & 32767;
      }
      function Al(e) {
        return 2 | e;
      }
      function Gi(e) {
        return (131068 & e) >> 2;
      }
      function Ol(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Rl(e) {
        return 1 | e;
      }
      function qf(e, t, n, r, o) {
        const i = e[n + 1],
          a = null === t;
        let f = r ? _i(i) : Gi(i),
          v = !1;
        for (; 0 !== f && (!1 === v || a); ) {
          const b = e[f + 1];
          cD(e[f], t) && ((v = !0), (e[f + 1] = r ? Rl(b) : Al(b))), (f = r ? _i(b) : Gi(b));
        }
        v && (e[n + 1] = r ? Al(i) : Rl(i));
      }
      function cD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && Ne(e, t) >= 0)
        );
      }
      const $n = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Kf(e) {
        return e.substring($n.key, $n.keyEnd);
      }
      function Zf(e, t) {
        const n = $n.textEnd;
        return n === t
          ? -1
          : ((t = $n.keyEnd =
              (function pD(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, ($n.key = t), n)),
            Is(e, t, n));
      }
      function Is(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Pl(e, t) {
        return (
          (function no(e, t, n, r) {
            const o = fe(),
              i = It(),
              a = yr(2);
            i.firstUpdatePass && oh(i, e, a, r),
              t !== yt &&
                ar(o, a, t) &&
                sh(
                  i,
                  i.data[Pn()],
                  o,
                  o[ht],
                  e,
                  (o[a + 1] = (function bD(e, t) {
                    return null == e || ('string' == typeof t ? (e += t) : 'object' == typeof e && (e = je(Di(e)))), e;
                  })(t, n)),
                  r,
                  a,
                );
          })(e, t, null, !0),
          Pl
        );
      }
      function nh(e) {
        !(function ro(e, t, n, r) {
          const o = It(),
            i = yr(2);
          o.firstUpdatePass && oh(o, null, i, r);
          const a = fe();
          if (n !== yt && ar(a, i, n)) {
            const f = o.data[Pn()];
            if (uh(f, r) && !rh(o, i)) {
              let v = r ? f.classesWithoutHost : f.stylesWithoutHost;
              null !== v && (n = Xe(v, n || '')), Ml(o, f, a, n, r);
            } else
              !(function ED(e, t, n, r, o, i, a, f) {
                o === yt && (o = et);
                let v = 0,
                  _ = 0,
                  b = 0 < o.length ? o[0] : null,
                  O = 0 < i.length ? i[0] : null;
                for (; null !== b || null !== O; ) {
                  const k = v < o.length ? o[v + 1] : void 0,
                    G = _ < i.length ? i[_ + 1] : void 0;
                  let be,
                    re = null;
                  b === O
                    ? ((v += 2), (_ += 2), k !== G && ((re = O), (be = G)))
                    : null === O || (null !== b && b < O)
                    ? ((v += 2), (re = b))
                    : ((_ += 2), (re = O), (be = G)),
                    null !== re && sh(e, t, n, r, re, be, a, f),
                    (b = v < o.length ? o[v] : null),
                    (O = _ < i.length ? i[_] : null);
                }
              })(
                o,
                f,
                a,
                a[ht],
                a[i + 1],
                (a[i + 1] = (function wD(e, t, n) {
                  if (null == n || '' === n) return et;
                  const r = [],
                    o = Di(n);
                  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
                  else if ('object' == typeof o) for (const i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
                  else 'string' == typeof o && t(r, o);
                  return r;
                })(e, t, n)),
                r,
                i,
              );
          }
        })(X, Fo, e, !0);
      }
      function Fo(e, t) {
        for (
          let n = (function fD(e) {
            return (
              (function Xf(e) {
                ($n.key = 0), ($n.keyEnd = 0), ($n.value = 0), ($n.valueEnd = 0), ($n.textEnd = e.length);
              })(e),
              Zf(e, Is(e, 0, $n.textEnd))
            );
          })(t);
          n >= 0;
          n = Zf(t, n)
        )
          X(e, Kf(t), !0);
      }
      function rh(e, t) {
        return t >= e.expandoStartIndex;
      }
      function oh(e, t, n, r) {
        const o = e.data;
        if (null === o[n + 1]) {
          const i = o[Pn()],
            a = rh(e, n);
          uh(i, r) && null === t && !a && (t = !1),
            (t = (function yD(e, t, n, r) {
              const o = (function Dr(e) {
                const t = We.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let i = r ? t.residualClasses : t.residualStyles;
              if (null === o)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = na((n = xl(null, e, t, n, r)), t.attrs, r)), (i = null));
              else {
                const a = t.directiveStylingLast;
                if (-1 === a || e[a] !== o)
                  if (((n = xl(o, e, t, n, r)), null === i)) {
                    let v = (function DD(e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Gi(r)) return e[_i(r)];
                    })(e, t, r);
                    void 0 !== v &&
                      Array.isArray(v) &&
                      ((v = xl(null, e, t, v[1], r)),
                      (v = na(v, t.attrs, r)),
                      (function _D(e, t, n, r) {
                        e[_i(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, v));
                  } else
                    i = (function CD(e, t, n) {
                      let r;
                      const o = t.directiveEnd;
                      for (let i = 1 + t.directiveStylingLast; i < o; i++) r = na(r, e[i].hostAttrs, n);
                      return na(r, t.attrs, n);
                    })(e, t, r);
              }
              return void 0 !== i && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n;
            })(o, i, t, r)),
            (function uD(e, t, n, r, o, i) {
              let a = i ? t.classBindings : t.styleBindings,
                f = _i(a),
                v = Gi(a);
              e[r] = n;
              let b,
                _ = !1;
              if ((Array.isArray(n) ? ((b = n[1]), (null === b || Ne(n, b) > 0) && (_ = !0)) : (b = n), o))
                if (0 !== v) {
                  const k = _i(e[f + 1]);
                  (e[r + 1] = Ka(k, f)),
                    0 !== k && (e[k + 1] = Ol(e[k + 1], r)),
                    (e[f + 1] = (function sD(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[f + 1], r));
                } else (e[r + 1] = Ka(f, 0)), 0 !== f && (e[f + 1] = Ol(e[f + 1], r)), (f = r);
              else (e[r + 1] = Ka(v, 0)), 0 === f ? (f = r) : (e[v + 1] = Ol(e[v + 1], r)), (v = r);
              _ && (e[r + 1] = Al(e[r + 1])),
                qf(e, b, r, !0),
                qf(e, b, r, !1),
                (function lD(e, t, n, r, o) {
                  const i = o ? e.residualClasses : e.residualStyles;
                  null != i && 'string' == typeof t && Ne(i, t) >= 0 && (n[r + 1] = Rl(n[r + 1]));
                })(t, b, e, r, i),
                (a = Ka(f, v)),
                i ? (t.classBindings = a) : (t.styleBindings = a);
            })(o, i, t, n, a, r);
        }
      }
      function xl(e, t, n, r, o) {
        let i = null;
        const a = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (-1 === f ? (f = n.directiveStart) : f++; f < a && ((i = t[f]), (r = na(r, i.hostAttrs, o)), i !== e); )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function na(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            'number' == typeof a
              ? (o = a)
              : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]), X(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function sh(e, t, n, r, o, i, a, f) {
        if (!(3 & t.type)) return;
        const v = e.data,
          _ = v[f + 1],
          b = (function aD(e) {
            return 1 == (1 & e);
          })(_)
            ? ah(v, t, n, o, Gi(_), a)
            : void 0;
        Za(b) ||
          (Za(i) ||
            ((function iD(e) {
              return 2 == (2 & e);
            })(_) &&
              (i = ah(v, null, n, o, f, a))),
          (function bm(e, t, n, r, o) {
            if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
            else {
              let i = -1 === r.indexOf('-') ? void 0 : Ro.DashCase;
              null == o
                ? e.removeStyle(n, r, i)
                : ('string' == typeof o && o.endsWith('!important') && ((o = o.slice(0, -10)), (i |= Ro.Important)),
                  e.setStyle(n, r, o, i));
            }
          })(r, a, Ho(Pn(), n), o, i));
      }
      function ah(e, t, n, r, o, i) {
        const a = null === t;
        let f;
        for (; o > 0; ) {
          const v = e[o],
            _ = Array.isArray(v),
            b = _ ? v[1] : v,
            O = null === b;
          let k = n[o + 1];
          k === yt && (k = O ? et : void 0);
          let G = O ? ke(k, r) : b === r ? k : void 0;
          if ((_ && !Za(G) && (G = ke(v, r)), Za(G) && ((f = G), a))) return f;
          const re = e[o + 1];
          o = a ? _i(re) : Gi(re);
        }
        if (null !== t) {
          let v = i ? t.residualClasses : t.residualStyles;
          null != v && (f = ke(v, r));
        }
        return f;
      }
      function Za(e) {
        return void 0 !== e;
      }
      function uh(e, t) {
        return 0 != (e.flags & (t ? 8 : 16));
      }
      function lh(e, t = '') {
        const n = fe(),
          r = It(),
          o = e + Kt,
          i = r.firstCreatePass ? vs(r, o, 1, t, null) : r.data[o],
          a = (n[o] = (function Ou(e, t) {
            return e.createText(t);
          })(n[ht], t));
        Ta(r, n, a, i), cr(i, !1);
      }
      function Nl(e) {
        return Qa('', e, ''), Nl;
      }
      function Qa(e, t, n) {
        const r = fe(),
          o = Ds(r, e, t, n);
        return o !== yt && ii(r, Pn(), o), Qa;
      }
      function Fl(e, t, n, r, o) {
        const i = fe(),
          a = _s(i, e, t, n, r, o);
        return a !== yt && ii(i, Pn(), a), Fl;
      }
      const zi = void 0;
      var GD = [
        'en',
        [['a', 'p'], ['AM', 'PM'], zi],
        [['AM', 'PM'], zi, zi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        zi,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        zi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', zi, "{1} 'at' {0}", zi],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function $D(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let Ts = {};
      function Ll(e) {
        const t = (function zD(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = Ah(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Ah(r)), n)) return n;
        if ('en' === r) return GD;
        throw new q(701, !1);
      }
      function Th(e) {
        return Ll(e)[ut.PluralCase];
      }
      function Ah(e) {
        return e in Ts || (Ts[e] = kt.ng && kt.ng.common && kt.ng.common.locales && kt.ng.common.locales[e]), Ts[e];
      }
      var ut = (() => (
        ((ut = ut || {})[(ut.LocaleId = 0)] = 'LocaleId'),
        (ut[(ut.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (ut[(ut.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (ut[(ut.DaysFormat = 3)] = 'DaysFormat'),
        (ut[(ut.DaysStandalone = 4)] = 'DaysStandalone'),
        (ut[(ut.MonthsFormat = 5)] = 'MonthsFormat'),
        (ut[(ut.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (ut[(ut.Eras = 7)] = 'Eras'),
        (ut[(ut.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (ut[(ut.WeekendRange = 9)] = 'WeekendRange'),
        (ut[(ut.DateFormat = 10)] = 'DateFormat'),
        (ut[(ut.TimeFormat = 11)] = 'TimeFormat'),
        (ut[(ut.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (ut[(ut.NumberSymbols = 13)] = 'NumberSymbols'),
        (ut[(ut.NumberFormats = 14)] = 'NumberFormats'),
        (ut[(ut.CurrencyCode = 15)] = 'CurrencyCode'),
        (ut[(ut.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (ut[(ut.CurrencyName = 17)] = 'CurrencyName'),
        (ut[(ut.Currencies = 18)] = 'Currencies'),
        (ut[(ut.Directionality = 19)] = 'Directionality'),
        (ut[(ut.PluralCase = 20)] = 'PluralCase'),
        (ut[(ut.ExtraData = 21)] = 'ExtraData'),
        ut
      ))();
      const As = 'en-US';
      let Oh = As;
      function Ul(e, t, n, r, o) {
        if (((e = we(e)), Array.isArray(e))) for (let i = 0; i < e.length; i++) Ul(e[i], t, n, r, o);
        else {
          const i = It(),
            a = fe();
          let f = ji(e) ? e : we(e.provide),
            v = Md(e);
          const _ = gn(),
            b = 1048575 & _.providerIndexes,
            O = _.directiveStart,
            k = _.providerIndexes >> 20;
          if (ji(e) || !e.multi) {
            const G = new Lt(v, o, ms),
              re = Bl(f, t, o ? b : b + k, O);
            -1 === re
              ? (Fs(is(_, a), i, f),
                jl(i, e, t.length),
                t.push(f),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push(G),
                a.push(G))
              : ((n[re] = G), (a[re] = G));
          } else {
            const G = Bl(f, t, b + k, O),
              re = Bl(f, t, b, b + k),
              Fe = re >= 0 && n[re];
            if ((o && !Fe) || (!o && !(G >= 0 && n[G]))) {
              Fs(is(_, a), i, f);
              const Ge = (function H_(e, t, n, r, o) {
                const i = new Lt(e, n, ms);
                return (i.multi = []), (i.index = t), (i.componentProviders = 0), tp(i, o, r && !n), i;
              })(o ? B_ : j_, n.length, o, r, v);
              !o && Fe && (n[re].providerFactory = Ge),
                jl(i, e, t.length, 0),
                t.push(f),
                _.directiveStart++,
                _.directiveEnd++,
                o && (_.providerIndexes += 1048576),
                n.push(Ge),
                a.push(Ge);
            } else jl(i, e, G > -1 ? G : re, tp(n[o ? re : G], v, !o && r));
            !o && r && Fe && n[re].componentProviders++;
          }
        }
      }
      function jl(e, t, n, r) {
        const o = ji(t),
          i = (function tv(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const v = (i ? we(t.useClass) : t).prototype.ngOnDestroy;
          if (v) {
            const _ = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const b = _.indexOf(n);
              -1 === b ? _.push(n, [r, v]) : _[b + 1].push(r, v);
            } else _.push(n, v);
          }
        }
      }
      function tp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Bl(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function j_(e, t, n, r) {
        return Hl(this.multi, []);
      }
      function B_(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            f = Vr(n, n[Le], this.providerFactory.index, r);
          (i = f.slice(0, a)), Hl(o, i);
          for (let v = a; v < f.length; v++) i.push(f[v]);
        } else (i = []), Hl(o, i);
        return i;
      }
      function Hl(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function np(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function U_(e, t, n) {
              const r = It();
              if (r.firstCreatePass) {
                const o = Bn(e);
                Ul(n, r.data, r.blueprint, o, !0), Ul(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class Os {}
      class rp {}
      function $_(e, t) {
        return new op(e, t ?? null);
      }
      class op extends Os {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new df(this));
          const r = $t(t);
          (this._bootstrapComponents = oi(r.bootstrap)),
            (this._r3Injector = Hd(
              t,
              n,
              [
                { provide: Os, useValue: this },
                { provide: Ks, useValue: this.componentFactoryResolver },
              ],
              je(t),
              new Set(['environment']),
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach((n) => n()), (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class $l extends rp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new op(this.moduleType, t);
        }
      }
      class G_ extends Os {
        constructor(t, n, r) {
          super(), (this.componentFactoryResolver = new df(this)), (this.instance = null);
          const o = new bd(
            [...t, { provide: Os, useValue: this }, { provide: Ks, useValue: this.componentFactoryResolver }],
            n || Na(),
            r,
            new Set(['environment']),
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Gl(e, t, n = null) {
        return new G_(e, t, n).injector;
      }
      let z_ = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = _d(0, n.type),
                o = r.length > 0 ? Gl([r], this._injector, `Standalone[${n.type.name}]`) : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values()) null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (e.ɵprov = Ht({ token: e, providedIn: 'environment', factory: () => new e(rt(Bi)) })), e;
      })();
      function ip(e) {
        e.getStandaloneInjector = (t) => t.get(z_).getOrCreateStandaloneInjector(e);
      }
      function fp(e, t, n, r) {
        return pp(fe(), Cn(), e, t, n, r);
      }
      function hp(e, t, n, r, o) {
        return gp(fe(), Cn(), e, t, n, r, o);
      }
      function ua(e, t) {
        const n = e[t];
        return n === yt ? void 0 : n;
      }
      function pp(e, t, n, r, o, i) {
        const a = t + n;
        return ar(e, a, o) ? xo(e, a + 1, i ? r.call(i, o) : r(o)) : ua(e, a + 1);
      }
      function gp(e, t, n, r, o, i, a) {
        const f = t + n;
        return $i(e, f, o, i) ? xo(e, f + 2, a ? r.call(a, o, i) : r(o, i)) : ua(e, f + 2);
      }
      function Dp(e, t) {
        const n = It();
        let r;
        const o = e + Kt;
        n.firstCreatePass
          ? ((r = (function uC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
          : (r = n.data[o]);
        const i = r.factory || (r.factory = Sr(r.type)),
          a = bt(ms);
        try {
          const f = gi(!1),
            v = i();
          return (
            gi(f),
            (function eD(e, t, n, r) {
              n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)), (t[n] = r);
            })(n, fe(), o, v),
            v
          );
        } finally {
          bt(a);
        }
      }
      function _p(e, t, n) {
        const r = e + Kt,
          o = fe(),
          i = Kr(o, r);
        return la(o, r) ? pp(o, Cn(), t, i.transform, n, i) : i.transform(n);
      }
      function Cp(e, t, n, r) {
        const o = e + Kt,
          i = fe(),
          a = Kr(i, o);
        return la(i, o) ? gp(i, Cn(), t, a.transform, n, r, a) : a.transform(n, r);
      }
      function la(e, t) {
        return e[Le].data[t].pure;
      }
      function Wl(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Lo = class fC extends w.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            a = r;
          if (t && 'object' == typeof t) {
            const v = t;
            (o = v.next?.bind(v)), (i = v.error?.bind(v)), (a = v.complete?.bind(v));
          }
          this.__isAsync && ((i = Wl(i)), o && (o = Wl(o)), a && (a = Wl(a)));
          const f = super.subscribe({ next: o, error: i, complete: a });
          return t instanceof d.w0 && t.add(f), f;
        }
      };
      function hC() {
        return this._results[Symbol.iterator]();
      }
      class Yl {
        get changes() {
          return this._changes || (this._changes = new Lo());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Yl.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = hC);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = (function Or(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function Cc(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o), (r.length = o.length), (r.last = o[this.length - 1]), (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let ca = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = mC), e;
      })();
      const pC = ca,
        gC = class extends pC {
          constructor(t, n, r) {
            super(), (this._declarationLView = t), (this._declarationTContainer = n), (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tView,
              o = La(this._declarationLView, r, t, 16, null, r.declTNode, null, null, null, null, n || null);
            o[so] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[ir];
            return null !== a && (o[ir] = a.createEmbeddedView(r)), ul(r, o, t), new Js(o);
          }
        };
      function mC() {
        return nu(gn(), fe());
      }
      function nu(e, t) {
        return 4 & e.type ? new gC(t, e, hs(e, t)) : null;
      }
      let ru = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = vC), e;
      })();
      function vC() {
        return bp(gn(), fe());
      }
      const yC = ru,
        wp = class extends yC {
          constructor(t, n, r) {
            super(), (this._lContainer = t), (this._hostTNode = n), (this._hostLView = r);
          }
          get element() {
            return hs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Jo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = mi(this._hostTNode, this._hostLView);
            if (er(t)) {
              const n = Io(t, this._hostLView),
                r = Ar(t);
              return new Jo(n[Le].data[r + 8], n);
            }
            return new Jo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Ep(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - pn;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r ? (o = r) : null != r && ((o = r.index), (i = r.injector));
            const a = t.createEmbeddedView(n || {}, i);
            return this.insert(a, o), a;
          }
          createComponent(t, n, r, o, i) {
            const a =
              t &&
              !(function yi(e) {
                return 'function' == typeof e;
              })(t);
            let f;
            if (a) f = n;
            else {
              const O = n || {};
              (f = O.index), (r = O.injector), (o = O.projectableNodes), (i = O.environmentInjector || O.ngModuleRef);
            }
            const v = a ? t : new ea(it(t)),
              _ = r || this.parentInjector;
            if (!i && null == v.ngModule) {
              const k = (a ? _ : this.parentInjector).get(Bi, null);
              k && (i = k);
            }
            const b = v.create(_, o, void 0, i);
            return this.insert(b.hostView, f), b;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[Le];
            if (
              (function Ai(e) {
                return qn(e[Ut]);
              })(r)
            ) {
              const b = this.indexOf(t);
              if (-1 !== b) this.detach(b);
              else {
                const O = r[Ut],
                  k = new wp(O, O[Xt], O[Ut]);
                k.detach(k.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function mm(e, t, n, r) {
              const o = pn + r,
                i = n.length;
              r > 0 && (n[o - 1][jt] = t),
                r < i - pn ? ((t[jt] = n[o]), l(n, pn + r, t)) : (n.push(t), (t[jt] = null)),
                (t[Ut] = n);
              const a = t[so];
              null !== a &&
                n !== a &&
                (function vm(e, t) {
                  const n = e[ur];
                  t[hn] !== t[Ut][Ut][hn] && (e[$r] = !0), null === n ? (e[ur] = [t]) : n.push(t);
                })(a, t);
              const f = t[ir];
              null !== f && f.insertView(e), (t[ot] |= 64);
            })(o, r, a, i);
            const f = Fu(i, a),
              v = r[ht],
              _ = Ia(v, a[lo]);
            return (
              null !== _ &&
                (function hm(e, t, n, r, o, i) {
                  (r[Wn] = o), (r[Xt] = t), zs(e, r, n, 1, o, i);
                })(o, a[Xt], v, r, _, f),
              t.attachToViewContainerRef(),
              l(ql(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Ep(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Pu(this._lContainer, n);
            r && (s(ql(this._lContainer), n), zc(r[Le], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Pu(this._lContainer, n);
            return r && null != s(ql(this._lContainer), n) ? new Js(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Ep(e) {
        return e[Gr];
      }
      function ql(e) {
        return e[Gr] || (e[Gr] = []);
      }
      function bp(e, t) {
        let n;
        const r = t[e.index];
        if (qn(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = nn(r);
          else {
            const i = t[ht];
            o = i.createComment('');
            const a = Mn(e, t);
            Ui(
              i,
              Ia(i, a),
              o,
              (function Cm(e, t) {
                return e.nextSibling(t);
              })(i, a),
              !1,
            );
          }
          (t[e.index] = n = sf(r, t, o, e)), Va(t, n);
        }
        return new wp(n, e, t);
      }
      class Kl {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Kl(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Zl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              o.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new Zl(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++) null !== xp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Mp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Ql {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i && ((i.indexInDeclarationView = r), null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new Ql(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Xl {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, n), new Xl(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, DC(n, i)), this.matchTNodeWithReadOption(t, n, Vi(n, t, i, !1, !1));
            }
          else
            r === ca
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Vi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Zs || o === ru || (o === ca && 4 & n.type)) this.addMatch(n.index, -2);
              else {
                const i = Vi(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches ? (this.matches = [t, n]) : this.matches.push(t, n);
        }
      }
      function DC(e, t) {
        const n = e.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function CC(e, t, n, r) {
        return -1 === n
          ? (function _C(e, t) {
              return 11 & e.type ? hs(e, t) : 4 & e.type ? nu(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function wC(e, t, n) {
              return n === Zs ? hs(t, e) : n === ca ? nu(t, e) : n === ru ? bp(t, e) : void 0;
            })(e, t, r)
          : Vr(e, e[Le], n, t);
      }
      function Sp(e, t, n, r) {
        const o = t[ir].queries[r];
        if (null === o.matches) {
          const i = e.data,
            a = n.matches,
            f = [];
          for (let v = 0; v < a.length; v += 2) {
            const _ = a[v];
            f.push(_ < 0 ? null : CC(t, i[_], a[v + 1], n.metadata.read));
          }
          o.matches = f;
        }
        return o.matches;
      }
      function Jl(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const a = Sp(e, t, o, n);
          for (let f = 0; f < i.length; f += 2) {
            const v = i[f];
            if (v > 0) r.push(a[f / 2]);
            else {
              const _ = i[f + 1],
                b = t[-v];
              for (let O = pn; O < b.length; O++) {
                const k = b[O];
                k[so] === k[Ut] && Jl(k[Le], k, _, r);
              }
              if (null !== b[ur]) {
                const O = b[ur];
                for (let k = 0; k < O.length; k++) {
                  const G = O[k];
                  Jl(G[Le], G, _, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Ip(e) {
        const t = fe(),
          n = It(),
          r = Mo();
        So(r + 1);
        const o = xp(n, r);
        if (
          e.dirty &&
          (function Do(e) {
            return 4 == (4 & e[ot]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? Jl(n, t, r, []) : Sp(n, t, o, r);
            e.reset(i, fv), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Tp(e, t, n) {
        const r = It();
        r.firstCreatePass && (Pp(r, new Mp(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)), Rp(r, fe(), t);
      }
      function Ap(e, t, n, r) {
        const o = It();
        if (o.firstCreatePass) {
          const i = gn();
          Pp(o, new Mp(t, n, r), i.index),
            (function bC(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        Rp(o, fe(), n);
      }
      function Op() {
        return (function EC(e, t) {
          return e[ir].queries[t].queryList;
        })(fe(), Mo());
      }
      function Rp(e, t, n) {
        const r = new Yl(4 == (4 & n));
        Xd(e, t, r, r.destroy), null === t[ir] && (t[ir] = new Zl()), t[ir].queries.push(new Kl(r));
      }
      function Pp(e, t, n) {
        null === e.queries && (e.queries = new Ql()), e.queries.track(new Xl(t, n));
      }
      function xp(e, t) {
        return e.queries.getByIndex(t);
      }
      function Np(e, t) {
        return nu(e, t);
      }
      function ec(e) {
        return !!$t(e);
      }
      function iu(...e) {}
      const Xp = new rn('Application Initializer');
      let su = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = iu),
              (this.reject = iu),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Il(i)) n.push(i);
                else if (Rf(i)) {
                  const a = new Promise((f, v) => {
                    i.subscribe({ complete: f, error: v });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(rt(Xp, 8));
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const Jp = new rn('AppId', {
        providedIn: 'root',
        factory: function eg() {
          return `${ic()}${ic()}${ic()}`;
        },
      });
      function ic() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const tg = new rn('Platform Initializer'),
        GC = new rn('Platform ID', { providedIn: 'platform', factory: () => 'unknown' });
      let zC = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const au = new rn('LocaleId', {
          providedIn: 'root',
          factory: () =>
            ct(au, ne.Optional | ne.SkipSelf) ||
            (function WC() {
              return (typeof $localize < 'u' && $localize.locale) || As;
            })(),
        }),
        YC = new rn('DefaultCurrencyCode', { providedIn: 'root', factory: () => 'USD' });
      class qC {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let KC = (() => {
        class e {
          compileModuleSync(n) {
            return new $l(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = oi($t(n).declarations).reduce((a, f) => {
                const v = it(f);
                return v && a.push(new ea(v)), a;
              }, []);
            return new qC(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const XC = (() => Promise.resolve(0))();
      function sc(e) {
        typeof Zone > 'u'
          ? XC.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class jr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Lo(!1)),
            (this.onMicrotaskEmpty = new Lo(!1)),
            (this.onStable = new Lo(!1)),
            (this.onError = new Lo(!1)),
            typeof Zone > 'u')
          )
            throw new q(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function JC() {
              let e = kt.requestAnimationFrame,
                t = kt.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: t };
            })().nativeRequestAnimationFrame),
            (function nw(e) {
              const t = () => {
                !(function tw(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(kt, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              uc(e),
                              (e.isCheckStableRunning = !0),
                              ac(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {},
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    uc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, a, f) => {
                  try {
                    return og(e), n.invokeTask(o, i, a, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      ig(e);
                  }
                },
                onInvoke: (n, r, o, i, a, f, v) => {
                  try {
                    return og(e), n.invoke(o, i, a, f, v);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), ig(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask), uc(e), ac(e))
                        : 'macroTask' == i.change && (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (n.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!jr.isInAngularZone()) throw new q(909, !1);
        }
        static assertNotInAngularZone() {
          if (jr.isInAngularZone()) throw new q(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            a = i.scheduleEventTask('NgZoneEvent: ' + o, t, ew, iu, iu);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const ew = {};
      function ac(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function uc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function og(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ig(e) {
        e._nesting--, ac(e);
      }
      class rw {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Lo()),
            (this.onMicrotaskEmpty = new Lo()),
            (this.onStable = new Lo()),
            (this.onError = new Lo());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const sg = new rn(''),
        ag = new rn('');
      let lc,
        ow = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                lc ||
                  ((function iw(e) {
                    lc = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone = typeof Zone > 'u' ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      jr.assertNotInAngularZone(),
                        sc(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                sc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((a) => a.timeoutId !== i)),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(rt(jr), rt(ug), rt(ag));
            }),
            (e.ɵprov = Ht({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ug = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return lc?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
            e
          );
        })();
      const si = !1;
      let Ci = null;
      const cc = new rn('PlatformDestroyListeners'),
        cg = new rn('appBootstrapListener');
      function cw(e) {
        const { rootComponent: t, appProviders: n, platformProviders: r } = e;
        si &&
          void 0 !== t &&
          (function Mv(e) {
            if (
              ((function Sv(e) {
                if (!it(e))
                  throw new q(
                    906,
                    `The ${Se(e)} is not an Angular component, make sure it has the \`@Component\` decorator.`,
                  );
              })(e),
              !it(e).standalone)
            )
              throw new q(
                907,
                `The ${Se(
                  e,
                )} component is not marked as standalone, but Angular expects to have a standalone component here. Please make sure the ${Se(
                  e,
                )} component has the \`standalone: true\` flag in the decorator.`,
              );
          })(t);
        const o = (function lw(e = []) {
            if (Ci) return Ci;
            const t = (function fg(e = [], t) {
              return Hi.create({
                name: t,
                providers: [
                  { provide: Zu, useValue: 'platform' },
                  { provide: cc, useValue: new Set([() => (Ci = null)]) },
                  ...e,
                ],
              });
            })(e);
            return (
              (Ci = t),
              (function dg(e) {
                const t = e.get(tg, null);
                t && t.forEach((n) => n());
              })(t),
              t
            );
          })(r),
          i = (function gg(e, t) {
            let n;
            return (n = 'noop' === e ? new rw() : ('zone.js' === e ? void 0 : e) || new jr(t)), n;
          })(
            'zone.js',
            (function pg(e) {
              return {
                enableLongStackTrace: !1,
                shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1,
              };
            })(),
          );
        return i.run(() => {
          const f = Gl([{ provide: jr, useValue: i }, ...(n || [])], o, 'Environment Injector'),
            v = f.get(Qs, null);
          if (si && !v) throw new q(402, 'No `ErrorHandler` found in the Dependency Injection tree.');
          let _;
          i.runOutsideAngular(() => {
            _ = i.onError.subscribe({
              next: (k) => {
                v.handleError(k);
              },
            });
          });
          const b = () => f.destroy(),
            O = o.get(cc);
          return (
            O.add(b),
            f.onDestroy(() => {
              _.unsubscribe(), O.delete(b);
            }),
            (function mg(e, t, n) {
              try {
                const r = n();
                return Il(r)
                  ? r.catch((o) => {
                      throw (t.runOutsideAngular(() => e.handleError(o)), o);
                    })
                  : r;
              } catch (r) {
                throw (t.runOutsideAngular(() => e.handleError(r)), r);
              }
            })(v, i, () => {
              const k = f.get(su);
              return (
                k.runInitializers(),
                k.donePromise.then(() => {
                  !(function Rh(e) {
                    zt(e, 'Expected localeId to be defined'),
                      'string' == typeof e && (Oh = e.toLowerCase().replace(/_/g, '-'));
                  })(f.get(au, As) || As);
                  const re = f.get(uu);
                  return void 0 !== t && re.bootstrap(t), re;
                })
              );
            })
          );
        });
      }
      let uu = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              }));
            const i = new Y.y((f) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    f.next(this._stable), f.complete();
                  });
              }),
              a = new Y.y((f) => {
                let v;
                this._zone.runOutsideAngular(() => {
                  v = this._zone.onStable.subscribe(() => {
                    jr.assertNotInAngularZone(),
                      sc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), f.next(!0));
                      });
                  });
                });
                const _ = this._zone.onUnstable.subscribe(() => {
                  jr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        f.next(!1);
                      }));
                });
                return () => {
                  v.unsubscribe(), _.unsubscribe();
                };
              });
            this.isStable = (function Ae(...e) {
              const t = (0, _e.yG)(e),
                n = (0, _e._6)(e, 1 / 0),
                r = e;
              return r.length ? (1 === r.length ? (0, te.Xf)(r[0]) : (0, ee.J)(n)((0, Ve.D)(r, t))) : Oe.E;
            })(
              i,
              a.pipe(
                (function Ce(e = {}) {
                  const {
                    connector: t = () => new w.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let a,
                      f,
                      v,
                      _ = 0,
                      b = !1,
                      O = !1;
                    const k = () => {
                        f?.unsubscribe(), (f = void 0);
                      },
                      G = () => {
                        k(), (a = v = void 0), (b = O = !1);
                      },
                      re = () => {
                        const be = a;
                        G(), be?.unsubscribe();
                      };
                    return (0, oe.e)((be, Fe) => {
                      _++, !O && !b && k();
                      const Ge = (v = v ?? t());
                      Fe.add(() => {
                        _--, 0 === _ && !O && !b && (f = qe(re, o));
                      }),
                        Ge.subscribe(Fe),
                        !a &&
                          _ > 0 &&
                          ((a = new he.Hp({
                            next: (nt) => Ge.next(nt),
                            error: (nt) => {
                              (O = !0), k(), (f = qe(G, n, nt)), Ge.error(nt);
                            },
                            complete: () => {
                              (b = !0), k(), (f = qe(G, r)), Ge.complete();
                            },
                          })),
                          (0, te.Xf)(be).subscribe(a));
                    })(i);
                  };
                })(),
              ),
            );
          }
          bootstrap(n, r) {
            si && this.warnIfDestroyed();
            const o = n instanceof Sd;
            if (!this._injector.get(su).done) {
              const G =
                'Cannot bootstrap as there are still asynchronous initializers running.' +
                (!o && Qt(n) ? '' : ' Bootstrap components in the `ngDoBootstrap` method of the root module.');
              throw new q(405, si && G);
            }
            let a;
            (a = o ? n : this._injector.get(Ks).resolveComponentFactory(n)), this.componentTypes.push(a.componentType);
            const f = (function aw(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(Os),
              _ = a.create(Hi.NULL, [], r || a.selector, f),
              b = _.location.nativeElement,
              O = _.injector.get(sg, null);
            return (
              O?.registerApplication(b),
              _.onDestroy(() => {
                this.detachView(_.hostView), lu(this.components, _), O?.unregisterApplication(b);
              }),
              this._loadComponent(_),
              _
            );
          }
          tick() {
            if ((si && this.warnIfDestroyed(), this._runningTick)) throw new q(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            si && this.warnIfDestroyed();
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            si && this.warnIfDestroyed();
            const r = n;
            lu(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(cg, []);
            r.push(...this._bootstrapListeners), r.forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return si && this.warnIfDestroyed(), this._destroyListeners.push(n), () => lu(this._destroyListeners, n);
          }
          destroy() {
            if (this._destroyed) throw new q(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {
            si &&
              this._destroyed &&
              console.warn(de(406, 'This instance of the `ApplicationRef` has already been destroyed.'));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(rt(jr), rt(Bi), rt(Qs));
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function lu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function hw() {}
      let pw = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = gw), e;
      })();
      function gw(e) {
        return (function mw(e, t, n) {
          if (xr(e) && !n) {
            const r = _n(e.index, t);
            return new Js(r, r);
          }
          return 47 & e.type ? new Js(t[hn], t) : null;
        })(gn(), fe(), 16 == (16 & e));
      }
      class wg {
        constructor() {}
        supports(t) {
          return Ha(t);
        }
        create(t) {
          return new ww(t);
        }
      }
      const Cw = (e, t) => t;
      class ww {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Cw);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < bg(r, o, i)) ? n : r,
              f = bg(a, o, i),
              v = a.currentIndex;
            if (a === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) o++;
            else {
              i || (i = []);
              const _ = f - o,
                b = v - o;
              if (_ != b) {
                for (let k = 0; k < _; k++) {
                  const G = k < i.length ? i[k] : (i[k] = 0),
                    re = G + k;
                  b <= re && re < _ && (i[k] = G + 1);
                }
                i[a.previousIndex] = b - _;
              }
            }
            f !== v && t(a, f, v);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Ha(t))) throw new q(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (i = t[f]),
                (a = this._trackByFn(f, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, f)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, f)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function Zy(e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (a = this._trackByFn(o, f)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, f, a, o)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, a, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved)
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, o))
              : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, o))
              : (t = this._addAfter(new Ew(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o && ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Eg()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return null === n ? (this._itHead = r) : (n._next = r), null === r ? (this._itTail = n) : (r._prev = n), t;
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new Eg()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Ew {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class bw {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class Eg {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new bw()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function bg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class Mg {
        constructor() {}
        supports(t) {
          return t instanceof Map || wl(t);
        }
        create() {
          return new Mw();
        }
      }
      class Mw {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || wl(t))) throw new q(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o) this._maybeAddToChanges(n, r), (this._appendAfter = n), (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = n), (n._prev = this._appendAfter)) : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              a = o._next;
            return i && (i._next = a), a && (a._prev = i), (o._next = null), (o._prev = null), o;
          }
          const r = new Sw(t);
          return this._records.set(t, r), (r.currentValue = n), this._addToAdditions(r), r;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue), (t.currentValue = n), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class Sw {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Sg() {
        return new mc([new wg()]);
      }
      let mc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return { provide: e, useFactory: (r) => e.create(n, r || Sg()), deps: [[e, new ba(), new Ea()]] };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = Ht({ token: e, providedIn: 'root', factory: Sg })), e;
      })();
      function Ig() {
        return new vc([new Mg()]);
      }
      let vc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return { provide: e, useFactory: (r) => e.create(n, r || Ig()), deps: [[e, new ba(), new Ea()]] };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new q(901, !1);
          }
        }
        return (e.ɵprov = Ht({ token: e, providedIn: 'root', factory: Ig })), e;
      })();
      function Aw(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    1481: (st, De, R) => {
      R.d(De, { Cg: () => vn, Dx: () => gt });
      var w = R(6895),
        d = R(8256);
      class Y extends w.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class ee extends Y {
        static makeCurrent() {
          (0, w.HT)(new ee());
        }
        onAndCancel(L, A, $) {
          return (
            L.addEventListener(A, $, !1),
            () => {
              L.removeEventListener(A, $, !1);
            }
          );
        }
        dispatchEvent(L, A) {
          L.dispatchEvent(A);
        }
        remove(L) {
          L.parentNode && L.parentNode.removeChild(L);
        }
        createElement(L, A) {
          return (A = A || this.getDefaultDocument()).createElement(L);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(L) {
          return L.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(L) {
          return L instanceof DocumentFragment;
        }
        getGlobalEventTarget(L, A) {
          return 'window' === A ? window : 'document' === A ? L : 'body' === A ? L.body : null;
        }
        getBaseHref(L) {
          const A = (function Oe() {
            return (te = te || document.querySelector('base')), te ? te.getAttribute('href') : null;
          })();
          return null == A
            ? null
            : (function Ve(z) {
                (_e = _e || document.createElement('a')), _e.setAttribute('href', z);
                const L = _e.pathname;
                return '/' === L.charAt(0) ? L : `/${L}`;
              })(A);
        }
        resetBaseElement() {
          te = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(L) {
          return (0, w.Mx)(document.cookie, L);
        }
      }
      let _e,
        te = null,
        qe = (() => {
          class z {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (z.ɵfac = function (A) {
              return new (A || z)();
            }),
            (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      const se = new d.OlP('EventManagerPlugins');
      let xe = (() => {
        class z {
          constructor(A, $) {
            (this._zone = $),
              (this._eventNameToPlugin = new Map()),
              A.forEach((J) => {
                J.manager = this;
              }),
              (this._plugins = A.slice().reverse());
          }
          addEventListener(A, $, J) {
            return this._findPluginFor($).addEventListener(A, $, J);
          }
          addGlobalEventListener(A, $, J) {
            return this._findPluginFor($).addGlobalEventListener(A, $, J);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(A) {
            const $ = this._eventNameToPlugin.get(A);
            if ($) return $;
            const J = this._plugins;
            for (let Re = 0; Re < J.length; Re++) {
              const He = J[Re];
              if (He.supports(A)) return this._eventNameToPlugin.set(A, He), He;
            }
            throw new Error(`No event manager plugin found for event ${A}`);
          }
        }
        return (
          (z.ɵfac = function (A) {
            return new (A || z)(d.LFG(se), d.LFG(d.R0b));
          }),
          (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class je {
        constructor(L) {
          this._doc = L;
        }
        addGlobalEventListener(L, A, $) {
          const J = (0, w.q)().getGlobalEventTarget(this._doc, L);
          if (!J) throw new Error(`Unsupported event target ${J} for event ${A}`);
          return this.addEventListener(J, A, $);
        }
      }
      let Xe = (() => {
          class z {
            constructor() {
              this.usageCount = new Map();
            }
            addStyles(A) {
              for (const $ of A) 1 === this.changeUsageCount($, 1) && this.onStyleAdded($);
            }
            removeStyles(A) {
              for (const $ of A) 0 === this.changeUsageCount($, -1) && this.onStyleRemoved($);
            }
            onStyleRemoved(A) {}
            onStyleAdded(A) {}
            getAllStyles() {
              return this.usageCount.keys();
            }
            changeUsageCount(A, $) {
              const J = this.usageCount;
              let Re = J.get(A) ?? 0;
              return (Re += $), Re > 0 ? J.set(A, Re) : J.delete(A), Re;
            }
            ngOnDestroy() {
              for (const A of this.getAllStyles()) this.onStyleRemoved(A);
              this.usageCount.clear();
            }
          }
          return (
            (z.ɵfac = function (A) {
              return new (A || z)();
            }),
            (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })(),
        Ze = (() => {
          class z extends Xe {
            constructor(A) {
              super(), (this.doc = A), (this.styleRef = new Map()), (this.hostNodes = new Set()), this.resetHostNodes();
            }
            onStyleAdded(A) {
              for (const $ of this.hostNodes) this.addStyleToHost($, A);
            }
            onStyleRemoved(A) {
              const $ = this.styleRef;
              $.get(A)?.forEach((Re) => Re.remove()), $.delete(A);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.styleRef.clear(), this.resetHostNodes();
            }
            addHost(A) {
              this.hostNodes.add(A);
              for (const $ of this.getAllStyles()) this.addStyleToHost(A, $);
            }
            removeHost(A) {
              this.hostNodes.delete(A);
            }
            addStyleToHost(A, $) {
              const J = this.doc.createElement('style');
              (J.textContent = $), A.appendChild(J);
              const Re = this.styleRef.get($);
              Re ? Re.push(J) : this.styleRef.set($, [J]);
            }
            resetHostNodes() {
              const A = this.hostNodes;
              A.clear(), A.add(this.doc.head);
            }
          }
          return (
            (z.ɵfac = function (A) {
              return new (A || z)(d.LFG(w.K0));
            }),
            (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      const Ot = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        we = /%COMP%/g,
        de = new d.OlP('RemoveStylesOnCompDestory', { providedIn: 'root', factory: () => !1 });
      function $e(z, L) {
        return L.flat(100).map((A) => A.replace(we, z));
      }
      function dt(z) {
        return (L) => {
          if ('__ngUnwrap__' === L) return z;
          !1 === z(L) && (L.preventDefault(), (L.returnValue = !1));
        };
      }
      let Ie = (() => {
        class z {
          constructor(A, $, J, Re) {
            (this.eventManager = A),
              (this.sharedStylesHost = $),
              (this.appId = J),
              (this.removeStylesOnCompDestory = Re),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new W(A));
          }
          createRenderer(A, $) {
            if (!A || !$) return this.defaultRenderer;
            const J = this.getOrCreateRenderer(A, $);
            return J instanceof Ue ? J.applyToHost(A) : J instanceof me && J.applyStyles(), J;
          }
          getOrCreateRenderer(A, $) {
            const J = this.rendererByCompId;
            let Re = J.get($.id);
            if (!Re) {
              const He = this.eventManager,
                _t = this.sharedStylesHost,
                et = this.removeStylesOnCompDestory;
              switch ($.encapsulation) {
                case d.ifc.Emulated:
                  Re = new Ue(He, _t, $, this.appId, et);
                  break;
                case d.ifc.ShadowDom:
                  return new Te(He, _t, A, $);
                default:
                  Re = new me(He, _t, $, et);
              }
              (Re.onDestroy = () => J.delete($.id)), J.set($.id, Re);
            }
            return Re;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          begin() {}
          end() {}
        }
        return (
          (z.ɵfac = function (A) {
            return new (A || z)(d.LFG(xe), d.LFG(Ze), d.LFG(d.AFp), d.LFG(de));
          }),
          (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class W {
        constructor(L) {
          (this.eventManager = L), (this.data = Object.create(null)), (this.destroyNode = null);
        }
        destroy() {}
        createElement(L, A) {
          return A ? document.createElementNS(Ot[A] || A, L) : document.createElement(L);
        }
        createComment(L) {
          return document.createComment(L);
        }
        createText(L) {
          return document.createTextNode(L);
        }
        appendChild(L, A) {
          (pe(L) ? L.content : L).appendChild(A);
        }
        insertBefore(L, A, $) {
          L && (pe(L) ? L.content : L).insertBefore(A, $);
        }
        removeChild(L, A) {
          L && L.removeChild(A);
        }
        selectRootElement(L, A) {
          let $ = 'string' == typeof L ? document.querySelector(L) : L;
          if (!$) throw new Error(`The selector "${L}" did not match any elements`);
          return A || ($.textContent = ''), $;
        }
        parentNode(L) {
          return L.parentNode;
        }
        nextSibling(L) {
          return L.nextSibling;
        }
        setAttribute(L, A, $, J) {
          if (J) {
            A = J + ':' + A;
            const Re = Ot[J];
            Re ? L.setAttributeNS(Re, A, $) : L.setAttribute(A, $);
          } else L.setAttribute(A, $);
        }
        removeAttribute(L, A, $) {
          if ($) {
            const J = Ot[$];
            J ? L.removeAttributeNS(J, A) : L.removeAttribute(`${$}:${A}`);
          } else L.removeAttribute(A);
        }
        addClass(L, A) {
          L.classList.add(A);
        }
        removeClass(L, A) {
          L.classList.remove(A);
        }
        setStyle(L, A, $, J) {
          J & (d.JOm.DashCase | d.JOm.Important)
            ? L.style.setProperty(A, $, J & d.JOm.Important ? 'important' : '')
            : (L.style[A] = $);
        }
        removeStyle(L, A, $) {
          $ & d.JOm.DashCase ? L.style.removeProperty(A) : (L.style[A] = '');
        }
        setProperty(L, A, $) {
          L[A] = $;
        }
        setValue(L, A) {
          L.nodeValue = A;
        }
        listen(L, A, $) {
          return 'string' == typeof L
            ? this.eventManager.addGlobalEventListener(L, A, dt($))
            : this.eventManager.addEventListener(L, A, dt($));
        }
      }
      function pe(z) {
        return 'TEMPLATE' === z.tagName && void 0 !== z.content;
      }
      class Te extends W {
        constructor(L, A, $, J) {
          super(L),
            (this.sharedStylesHost = A),
            (this.hostEl = $),
            (this.shadowRoot = $.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Re = $e(J.id, J.styles);
          for (const He of Re) {
            const _t = document.createElement('style');
            (_t.textContent = He), this.shadowRoot.appendChild(_t);
          }
        }
        nodeOrShadowRoot(L) {
          return L === this.hostEl ? this.shadowRoot : L;
        }
        appendChild(L, A) {
          return super.appendChild(this.nodeOrShadowRoot(L), A);
        }
        insertBefore(L, A, $) {
          return super.insertBefore(this.nodeOrShadowRoot(L), A, $);
        }
        removeChild(L, A) {
          return super.removeChild(this.nodeOrShadowRoot(L), A);
        }
        parentNode(L) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(L)));
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class me extends W {
        constructor(L, A, $, J, Re = $.id) {
          super(L),
            (this.sharedStylesHost = A),
            (this.removeStylesOnCompDestory = J),
            (this.rendererUsageCount = 0),
            (this.styles = $e(Re, $.styles));
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles), this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class Ue extends me {
        constructor(L, A, $, J, Re) {
          const He = J + '-' + $.id;
          super(L, A, $, Re, He),
            (this.contentAttr = (function Q(z) {
              return '_ngcontent-%COMP%'.replace(we, z);
            })(He)),
            (this.hostAttr = (function Se(z) {
              return '_nghost-%COMP%'.replace(we, z);
            })(He));
        }
        applyToHost(L) {
          this.applyStyles(), this.setAttribute(L, this.hostAttr, '');
        }
        createElement(L, A) {
          const $ = super.createElement(L, A);
          return super.setAttribute($, this.contentAttr, ''), $;
        }
      }
      let ft = (() => {
        class z extends je {
          constructor(A) {
            super(A);
          }
          supports(A) {
            return !0;
          }
          addEventListener(A, $, J) {
            return A.addEventListener($, J, !1), () => this.removeEventListener(A, $, J);
          }
          removeEventListener(A, $, J) {
            return A.removeEventListener($, J);
          }
        }
        return (
          (z.ɵfac = function (A) {
            return new (A || z)(d.LFG(w.K0));
          }),
          (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const Zt = ['alt', 'control', 'meta', 'shift'],
        Je = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        wt = { alt: (z) => z.altKey, control: (z) => z.ctrlKey, meta: (z) => z.metaKey, shift: (z) => z.shiftKey };
      let Dt = (() => {
        class z extends je {
          constructor(A) {
            super(A);
          }
          supports(A) {
            return null != z.parseEventName(A);
          }
          addEventListener(A, $, J) {
            const Re = z.parseEventName($),
              He = z.eventCallback(Re.fullKey, J, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => (0, w.q)().onAndCancel(A, Re.domEventName, He));
          }
          static parseEventName(A) {
            const $ = A.toLowerCase().split('.'),
              J = $.shift();
            if (0 === $.length || ('keydown' !== J && 'keyup' !== J)) return null;
            const Re = z._normalizeKey($.pop());
            let He = '',
              _t = $.indexOf('code');
            if (
              (_t > -1 && ($.splice(_t, 1), (He = 'code.')),
              Zt.forEach((On) => {
                const Dn = $.indexOf(On);
                Dn > -1 && ($.splice(Dn, 1), (He += On + '.'));
              }),
              (He += Re),
              0 != $.length || 0 === Re.length)
            )
              return null;
            const et = {};
            return (et.domEventName = J), (et.fullKey = He), et;
          }
          static matchEventFullKeyCode(A, $) {
            let J = Je[A.key] || A.key,
              Re = '';
            return (
              $.indexOf('code.') > -1 && ((J = A.code), (Re = 'code.')),
              !(null == J || !J) &&
                ((J = J.toLowerCase()),
                ' ' === J ? (J = 'space') : '.' === J && (J = 'dot'),
                Zt.forEach((He) => {
                  He !== J && (0, wt[He])(A) && (Re += He + '.');
                }),
                (Re += J),
                Re === $)
            );
          }
          static eventCallback(A, $, J) {
            return (Re) => {
              z.matchEventFullKeyCode(Re, A) && J.runGuarded(() => $(Re));
            };
          }
          static _normalizeKey(A) {
            return 'esc' === A ? 'escape' : A;
          }
        }
        return (
          (z.ɵfac = function (A) {
            return new (A || z)(d.LFG(w.K0));
          }),
          (z.ɵprov = d.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      function vn(z, L) {
        return (0, d.iPO)({ rootComponent: z, ...at(L) });
      }
      function at(z) {
        return { appProviders: [...nr, ...(z?.providers ?? [])], platformProviders: Cr };
      }
      const Cr = [
          { provide: d.Lbi, useValue: w.bD },
          {
            provide: d.g9A,
            useValue: function ln() {
              ee.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: w.K0,
            useFactory: function Ht() {
              return (0, d.RDi)(document), document;
            },
            deps: [],
          },
        ],
        nr = [
          { provide: d.zSh, useValue: 'root' },
          {
            provide: d.qLn,
            useFactory: function pr() {
              return new d.qLn();
            },
            deps: [],
          },
          { provide: se, useClass: ft, multi: !0, deps: [w.K0, d.R0b, d.Lbi] },
          { provide: se, useClass: Dt, multi: !0, deps: [w.K0] },
          { provide: Ie, useClass: Ie, deps: [xe, Ze, d.AFp, de] },
          { provide: d.FYo, useExisting: Ie },
          { provide: Xe, useExisting: Ze },
          { provide: Ze, useClass: Ze, deps: [w.K0] },
          { provide: xe, useClass: xe, deps: [se, d.R0b] },
          { provide: w.JF, useClass: qe, deps: [] },
          [],
        ];
      let gt = (() => {
        class z {
          constructor(A) {
            this._doc = A;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(A) {
            this._doc.title = A || '';
          }
        }
        return (
          (z.ɵfac = function (A) {
            return new (A || z)(d.LFG(w.K0));
          }),
          (z.ɵprov = d.Yz7({
            token: z,
            factory: function (A) {
              let $ = null;
              return (
                ($ = A
                  ? new A()
                  : (function kn() {
                      return new gt((0, d.LFG)(w.K0));
                    })()),
                $
              );
            },
            providedIn: 'root',
          })),
          z
        );
      })();
      typeof window < 'u' && window;
    },
    195: (st, De, R) => {
      R.d(De, { gz: () => Xn, rH: () => mi, lC: () => Xi, bU: () => ya });
      var w = R(8256),
        d = R(2076),
        Y = R(9646),
        ee = R(1135);
      const Oe = (0, R(3888).d)(
        (u) =>
          function () {
            u(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
          },
      );
      var _e = R(9841),
        Ve = R(8189),
        he = R(7669);
      function oe(...u) {
        return (function Ae() {
          return (0, Ve.J)(1);
        })()((0, d.D)(u, (0, he.yG)(u)));
      }
      var Ce = R(9751),
        qe = R(8421);
      function se(u) {
        return new Ce.y((l) => {
          (0, qe.Xf)(u()).subscribe(l);
        });
      }
      var xe = R(9635),
        je = R(576);
      function Xe(u, l) {
        const s = (0, je.m)(u) ? u : () => u,
          p = (D) => D.error(s());
        return new Ce.y(l ? (D) => l.schedule(p, 0, D) : p);
      }
      var Ze = R(515),
        Ot = R(727),
        we = R(4482),
        ye = R(5403);
      function Me() {
        return (0, we.e)((u, l) => {
          let s = null;
          u._refCount++;
          const p = (0, ye.x)(l, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount) return void (s = null);
            const D = u._connection,
              M = s;
            (s = null), D && (!M || D === M) && D.unsubscribe(), l.unsubscribe();
          });
          u.subscribe(p), p.closed || (s = u.connect());
        });
      }
      class Ke extends Ce.y {
        constructor(l, s) {
          super(),
            (this.source = l),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, we.A)(l) && (this.lift = l.lift);
        }
        _subscribe(l) {
          return this.getSubject().subscribe(l);
        }
        getSubject() {
          const l = this._subject;
          return (!l || l.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: l } = this;
          (this._subject = this._connection = null), l?.unsubscribe();
        }
        connect() {
          let l = this._connection;
          if (!l) {
            l = this._connection = new Ot.w0();
            const s = this.getSubject();
            l.add(
              this.source.subscribe(
                (0, ye.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (p) => {
                    this._teardown(), s.error(p);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              l.closed && ((this._connection = null), (l = Ot.w0.EMPTY));
          }
          return l;
        }
        refCount() {
          return Me()(this);
        }
      }
      var pt = R(7579),
        q = R(6895),
        de = R(4004),
        Q = R(3900);
      function Se(u) {
        return u <= 0
          ? () => Ze.E
          : (0, we.e)((l, s) => {
              let p = 0;
              l.subscribe(
                (0, ye.x)(s, (D) => {
                  ++p <= u && (s.next(D), u <= p && s.complete());
                }),
              );
            });
      }
      var dt = R(9300),
        Ie = R(5577);
      function W(u) {
        return (0, we.e)((l, s) => {
          let p = !1;
          l.subscribe(
            (0, ye.x)(
              s,
              (D) => {
                (p = !0), s.next(D);
              },
              () => {
                p || s.next(u), s.complete();
              },
            ),
          );
        });
      }
      function Z(u = le) {
        return (0, we.e)((l, s) => {
          let p = !1;
          l.subscribe(
            (0, ye.x)(
              s,
              (D) => {
                (p = !0), s.next(D);
              },
              () => (p ? s.complete() : s.error(u())),
            ),
          );
        });
      }
      function le() {
        return new Oe();
      }
      var pe = R(4671);
      function Te(u, l) {
        const s = arguments.length >= 2;
        return (p) => p.pipe(u ? (0, dt.h)((D, M) => u(D, M, p)) : pe.y, Se(1), s ? W(l) : Z(() => new Oe()));
      }
      var me = R(4351),
        Ue = R(8505);
      function ft(u) {
        return (0, we.e)((l, s) => {
          let M,
            p = null,
            D = !1;
          (p = l.subscribe(
            (0, ye.x)(s, void 0, void 0, (I) => {
              (M = (0, qe.Xf)(u(I, ft(u)(l)))), p ? (p.unsubscribe(), (p = null), M.subscribe(s)) : (D = !0);
            }),
          )),
            D && (p.unsubscribe(), (p = null), M.subscribe(s));
        });
      }
      function Je(u, l) {
        return (0, we.e)(
          (function Zt(u, l, s, p, D) {
            return (M, I) => {
              let H = s,
                X = l,
                ke = 0;
              M.subscribe(
                (0, ye.x)(
                  I,
                  (Ne) => {
                    const Bt = ke++;
                    (X = H ? u(X, Ne, Bt) : ((H = !0), Ne)), p && I.next(X);
                  },
                  D &&
                    (() => {
                      H && I.next(X), I.complete();
                    }),
                ),
              );
            };
          })(u, l, arguments.length >= 2, !0),
        );
      }
      function wt(u) {
        return u <= 0
          ? () => Ze.E
          : (0, we.e)((l, s) => {
              let p = [];
              l.subscribe(
                (0, ye.x)(
                  s,
                  (D) => {
                    p.push(D), u < p.length && p.shift();
                  },
                  () => {
                    for (const D of p) s.next(D);
                    s.complete();
                  },
                  void 0,
                  () => {
                    p = null;
                  },
                ),
              );
            });
      }
      function Dt(u, l) {
        const s = arguments.length >= 2;
        return (p) => p.pipe(u ? (0, dt.h)((D, M) => u(D, M, p)) : pe.y, wt(1), s ? W(l) : Z(() => new Oe()));
      }
      function zt(u) {
        return (0, we.e)((l, s) => {
          try {
            l.subscribe(s);
          } finally {
            s.add(u);
          }
        });
      }
      var at = R(1481);
      const Qe = 'primary',
        ln = Symbol('RouteTitle');
      class pr {
        constructor(l) {
          this.params = l || {};
        }
        has(l) {
          return Object.prototype.hasOwnProperty.call(this.params, l);
        }
        get(l) {
          if (this.has(l)) {
            const s = this.params[l];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(l) {
          if (this.has(l)) {
            const s = this.params[l];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Ht(u) {
        return new pr(u);
      }
      function Cr(u, l, s) {
        const p = s.path.split('/');
        if (p.length > u.length || ('full' === s.pathMatch && (l.hasChildren() || p.length < u.length))) return null;
        const D = {};
        for (let M = 0; M < p.length; M++) {
          const I = p[M],
            H = u[M];
          if (I.startsWith(':')) D[I.substring(1)] = H;
          else if (I !== H.path) return null;
        }
        return { consumed: u.slice(0, p.length), posParams: D };
      }
      function Tt(u, l) {
        const s = u ? Object.keys(u) : void 0,
          p = l ? Object.keys(l) : void 0;
        if (!s || !p || s.length != p.length) return !1;
        let D;
        for (let M = 0; M < s.length; M++) if (((D = s[M]), !Ln(u[D], l[D]))) return !1;
        return !0;
      }
      function Ln(u, l) {
        if (Array.isArray(u) && Array.isArray(l)) {
          if (u.length !== l.length) return !1;
          const s = [...u].sort(),
            p = [...l].sort();
          return s.every((D, M) => p[M] === D);
        }
        return u === l;
      }
      function nr(u) {
        return Array.prototype.concat.apply([], u);
      }
      function Tn(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function qt(u, l) {
        for (const s in u) u.hasOwnProperty(s) && l(u[s], s);
      }
      function en(u) {
        return (0, w.CqO)(u) ? u : (0, w.QGY)(u) ? (0, d.D)(Promise.resolve(u)) : (0, Y.of)(u);
      }
      const kn = !1,
        gt = {
          exact: function rr(u, l, s) {
            if (
              !En(u.segments, l.segments) ||
              !kt(u.segments, l.segments, s) ||
              u.numberOfChildren !== l.numberOfChildren
            )
              return !1;
            for (const p in l.children) if (!u.children[p] || !rr(u.children[p], l.children[p], s)) return !1;
            return !0;
          },
          subset: An,
        },
        ze = {
          exact: function Vn(u, l) {
            return Tt(u, l);
          },
          subset: function bt(u, l) {
            return Object.keys(l).length <= Object.keys(u).length && Object.keys(l).every((s) => Ln(u[s], l[s]));
          },
          ignored: () => !0,
        };
      function ne(u, l, s) {
        return (
          gt[s.paths](u.root, l.root, s.matrixParams) &&
          ze[s.queryParams](u.queryParams, l.queryParams) &&
          !('exact' === s.fragment && u.fragment !== l.fragment)
        );
      }
      function An(u, l, s) {
        return fn(u, l, l.segments, s);
      }
      function fn(u, l, s, p) {
        if (u.segments.length > s.length) {
          const D = u.segments.slice(0, s.length);
          return !(!En(D, s) || l.hasChildren() || !kt(D, s, p));
        }
        if (u.segments.length === s.length) {
          if (!En(u.segments, s) || !kt(u.segments, s, p)) return !1;
          for (const D in l.children) if (!u.children[D] || !An(u.children[D], l.children[D], p)) return !1;
          return !0;
        }
        {
          const D = s.slice(0, u.segments.length),
            M = s.slice(u.segments.length);
          return !!(En(u.segments, D) && kt(u.segments, D, p) && u.children[Qe]) && fn(u.children[Qe], l, M, p);
        }
      }
      function kt(u, l, s) {
        return l.every((p, D) => ze[s](u[D].parameters, p.parameters));
      }
      class Pt {
        constructor(l = new lt([], {}), s = {}, p = null) {
          (this.root = l), (this.queryParams = s), (this.fragment = p);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ht(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return F.serialize(this);
        }
      }
      class lt {
        constructor(l, s) {
          (this.segments = l), (this.children = s), (this.parent = null), qt(s, (p, D) => (p.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return j(this);
        }
      }
      class Mt {
        constructor(l, s) {
          (this.path = l), (this.parameters = s);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Ht(this.parameters)), this._parameterMap;
        }
        toString() {
          return yn(this);
        }
      }
      function En(u, l) {
        return u.length === l.length && u.every((s, p) => s.path === l[p].path);
      }
      let Zn = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = w.Yz7({
            token: u,
            factory: function () {
              return new ae();
            },
            providedIn: 'root',
          })),
          u
        );
      })();
      class ae {
        parse(l) {
          const s = new et(l);
          return new Pt(s.parseRootSegment(), s.parseQueryParams(), s.parseFragment());
        }
        serialize(l) {
          const s = `/${ge(l.root, !0)}`,
            p = (function L(u) {
              const l = Object.keys(u)
                .map((s) => {
                  const p = u[s];
                  return Array.isArray(p) ? p.map((D) => `${tt(s)}=${tt(D)}`).join('&') : `${tt(s)}=${tt(p)}`;
                })
                .filter((s) => !!s);
              return l.length ? `?${l.join('&')}` : '';
            })(l.queryParams);
          return `${s}${p}${
            'string' == typeof l.fragment
              ? `#${(function rt(u) {
                  return encodeURI(u);
                })(l.fragment)}`
              : ''
          }`;
        }
      }
      const F = new ae();
      function j(u) {
        return u.segments.map((l) => yn(l)).join('/');
      }
      function ge(u, l) {
        if (!u.hasChildren()) return j(u);
        if (l) {
          const s = u.children[Qe] ? ge(u.children[Qe], !1) : '',
            p = [];
          return (
            qt(u.children, (D, M) => {
              M !== Qe && p.push(`${M}:${ge(D, !1)}`);
            }),
            p.length > 0 ? `${s}(${p.join('//')})` : s
          );
        }
        {
          const s = (function wr(u, l) {
            let s = [];
            return (
              qt(u.children, (p, D) => {
                D === Qe && (s = s.concat(l(p, D)));
              }),
              qt(u.children, (p, D) => {
                D !== Qe && (s = s.concat(l(p, D)));
              }),
              s
            );
          })(u, (p, D) => (D === Qe ? [ge(u.children[Qe], !1)] : [`${D}:${ge(p, !1)}`]));
          return 1 === Object.keys(u.children).length && null != u.children[Qe]
            ? `${j(u)}/${s[0]}`
            : `${j(u)}/(${s.join('//')})`;
        }
      }
      function ue(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function tt(u) {
        return ue(u).replace(/%3B/gi, ';');
      }
      function Wt(u) {
        return ue(u).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function ct(u) {
        return decodeURIComponent(u);
      }
      function Vt(u) {
        return ct(u.replace(/\+/g, '%20'));
      }
      function yn(u) {
        return `${Wt(u.path)}${(function z(u) {
          return Object.keys(u)
            .map((l) => `;${Wt(l)}=${Wt(u[l])}`)
            .join('');
        })(u.parameters)}`;
      }
      const A = /^[^\/()?;=#]+/;
      function $(u) {
        const l = u.match(A);
        return l ? l[0] : '';
      }
      const J = /^[^=?&#]+/,
        He = /^[^&#]+/;
      class et {
        constructor(l) {
          (this.url = l), (this.remaining = l);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new lt([], {})
              : new lt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const l = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(l);
            } while (this.consumeOptional('&'));
          return l;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const l = [];
          for (
            this.peekStartsWith('(') || l.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), l.push(this.parseSegment());
          let s = {};
          this.peekStartsWith('/(') && (this.capture('/'), (s = this.parseParens(!0)));
          let p = {};
          return (
            this.peekStartsWith('(') && (p = this.parseParens(!1)),
            (l.length > 0 || Object.keys(s).length > 0) && (p[Qe] = new lt(l, s)),
            p
          );
        }
        parseSegment() {
          const l = $(this.remaining);
          if ('' === l && this.peekStartsWith(';')) throw new w.vHH(4009, kn);
          return this.capture(l), new Mt(ct(l), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const l = {};
          for (; this.consumeOptional(';'); ) this.parseParam(l);
          return l;
        }
        parseParam(l) {
          const s = $(this.remaining);
          if (!s) return;
          this.capture(s);
          let p = '';
          if (this.consumeOptional('=')) {
            const D = $(this.remaining);
            D && ((p = D), this.capture(p));
          }
          l[ct(s)] = ct(p);
        }
        parseQueryParam(l) {
          const s = (function Re(u) {
            const l = u.match(J);
            return l ? l[0] : '';
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let p = '';
          if (this.consumeOptional('=')) {
            const I = (function _t(u) {
              const l = u.match(He);
              return l ? l[0] : '';
            })(this.remaining);
            I && ((p = I), this.capture(p));
          }
          const D = Vt(s),
            M = Vt(p);
          if (l.hasOwnProperty(D)) {
            let I = l[D];
            Array.isArray(I) || ((I = [I]), (l[D] = I)), I.push(M);
          } else l[D] = M;
        }
        parseParens(l) {
          const s = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const p = $(this.remaining),
              D = this.remaining[p.length];
            if ('/' !== D && ')' !== D && ';' !== D) throw new w.vHH(4010, kn);
            let M;
            p.indexOf(':') > -1
              ? ((M = p.slice(0, p.indexOf(':'))), this.capture(M), this.capture(':'))
              : l && (M = Qe);
            const I = this.parseChildren();
            (s[M] = 1 === Object.keys(I).length ? I[Qe] : new lt([], I)), this.consumeOptional('//');
          }
          return s;
        }
        peekStartsWith(l) {
          return this.remaining.startsWith(l);
        }
        consumeOptional(l) {
          return !!this.peekStartsWith(l) && ((this.remaining = this.remaining.substring(l.length)), !0);
        }
        capture(l) {
          if (!this.consumeOptional(l)) throw new w.vHH(4011, kn);
        }
      }
      function On(u) {
        return u.segments.length > 0 ? new lt([], { [Qe]: u }) : u;
      }
      function Dn(u) {
        const l = {};
        for (const p of Object.keys(u.children)) {
          const M = Dn(u.children[p]);
          (M.segments.length > 0 || M.hasChildren()) && (l[p] = M);
        }
        return (function io(u) {
          if (1 === u.numberOfChildren && u.children[Qe]) {
            const l = u.children[Qe];
            return new lt(u.segments.concat(l.segments), l.children);
          }
          return u;
        })(new lt(u.segments, l));
      }
      function or(u) {
        return u instanceof Pt;
      }
      const Un = !1;
      function T(u, l, s, p, D) {
        if (0 === s.length) return ie(l.root, l.root, l.root, p, D);
        const M = (function Yt(u) {
          if ('string' == typeof u[0] && 1 === u.length && '/' === u[0]) return new xt(!0, 0, u);
          let l = 0,
            s = !1;
          const p = u.reduce((D, M, I) => {
            if ('object' == typeof M && null != M) {
              if (M.outlets) {
                const H = {};
                return (
                  qt(M.outlets, (X, ke) => {
                    H[ke] = 'string' == typeof X ? X.split('/') : X;
                  }),
                  [...D, { outlets: H }]
                );
              }
              if (M.segmentPath) return [...D, M.segmentPath];
            }
            return 'string' != typeof M
              ? [...D, M]
              : 0 === I
              ? (M.split('/').forEach((H, X) => {
                  (0 == X && '.' === H) || (0 == X && '' === H ? (s = !0) : '..' === H ? l++ : '' != H && D.push(H));
                }),
                D)
              : [...D, M];
          }, []);
          return new xt(s, l, p);
        })(s);
        return M.toRoot()
          ? ie(l.root, l.root, new lt([], {}), p, D)
          : (function I(X) {
              const ke = (function vt(u, l, s, p) {
                  if (u.isAbsolute) return new St(l.root, !0, 0);
                  if (-1 === p) return new St(s, s === l.root, 0);
                  return (function Nt(u, l, s) {
                    let p = u,
                      D = l,
                      M = s;
                    for (; M > D; ) {
                      if (((M -= D), (p = p.parent), !p)) throw new w.vHH(4005, Un && "Invalid number of '../'");
                      D = p.segments.length;
                    }
                    return new St(p, !1, D - M);
                  })(s, p + (N(u.commands[0]) ? 0 : 1), u.numberOfDoubleDots);
                })(M, l, u.snapshot?._urlSegment, X),
                Ne = ke.processChildren
                  ? Gn(ke.segmentGroup, ke.index, M.commands)
                  : $t(ke.segmentGroup, ke.index, M.commands);
              return ie(l.root, ke.segmentGroup, Ne, p, D);
            })(u.snapshot?._lastPathIndex);
      }
      function N(u) {
        return 'object' == typeof u && null != u && !u.outlets && !u.segmentPath;
      }
      function U(u) {
        return 'object' == typeof u && null != u && u.outlets;
      }
      function ie(u, l, s, p, D) {
        let I,
          M = {};
        p &&
          qt(p, (X, ke) => {
            M[ke] = Array.isArray(X) ? X.map((Ne) => `${Ne}`) : `${X}`;
          }),
          (I = u === l ? s : Pe(u, l, s));
        const H = On(Dn(I));
        return new Pt(H, M, D);
      }
      function Pe(u, l, s) {
        const p = {};
        return (
          qt(u.children, (D, M) => {
            p[M] = D === l ? s : Pe(D, l, s);
          }),
          new lt(u.segments, p)
        );
      }
      class xt {
        constructor(l, s, p) {
          if (((this.isAbsolute = l), (this.numberOfDoubleDots = s), (this.commands = p), l && p.length > 0 && N(p[0])))
            throw new w.vHH(4003, Un && 'Root segment cannot have matrix parameters');
          const D = p.find(U);
          if (D && D !== Tn(p)) throw new w.vHH(4004, Un && '{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class St {
        constructor(l, s, p) {
          (this.segmentGroup = l), (this.processChildren = s), (this.index = p);
        }
      }
      function $t(u, l, s) {
        if ((u || (u = new lt([], {})), 0 === u.segments.length && u.hasChildren())) return Gn(u, l, s);
        const p = (function zn(u, l, s) {
            let p = 0,
              D = l;
            const M = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; D < u.segments.length; ) {
              if (p >= s.length) return M;
              const I = u.segments[D],
                H = s[p];
              if (U(H)) break;
              const X = `${H}`,
                ke = p < s.length - 1 ? s[p + 1] : null;
              if (D > 0 && void 0 === X) break;
              if (X && ke && 'object' == typeof ke && void 0 === ke.outlets) {
                if (!ot(X, ke, I)) return M;
                p += 2;
              } else {
                if (!ot(X, {}, I)) return M;
                p++;
              }
              D++;
            }
            return { match: !0, pathIndex: D, commandIndex: p };
          })(u, l, s),
          D = s.slice(p.commandIndex);
        if (p.match && p.pathIndex < u.segments.length) {
          const M = new lt(u.segments.slice(0, p.pathIndex), {});
          return (M.children[Qe] = new lt(u.segments.slice(p.pathIndex), u.children)), Gn(M, 0, D);
        }
        return p.match && 0 === D.length
          ? new lt(u.segments, {})
          : p.match && !u.hasChildren()
          ? bn(u, l, s)
          : p.match
          ? Gn(u, 0, D)
          : bn(u, l, s);
      }
      function Gn(u, l, s) {
        if (0 === s.length) return new lt(u.segments, {});
        {
          const p = (function Qt(u) {
              return U(u[0]) ? u[0].outlets : { [Qe]: u };
            })(s),
            D = {};
          return !p[Qe] && u.children[Qe] && 1 === u.numberOfChildren && 0 === u.children[Qe].segments.length
            ? Gn(u.children[Qe], l, s)
            : (qt(p, (M, I) => {
                'string' == typeof M && (M = [M]), null !== M && (D[I] = $t(u.children[I], l, M));
              }),
              qt(u.children, (M, I) => {
                void 0 === p[I] && (D[I] = M);
              }),
              new lt(u.segments, D));
        }
      }
      function bn(u, l, s) {
        const p = u.segments.slice(0, l);
        let D = 0;
        for (; D < s.length; ) {
          const M = s[D];
          if (U(M)) {
            const X = Wn(M.outlets);
            return new lt(p, X);
          }
          if (0 === D && N(s[0])) {
            p.push(new Mt(u.segments[l].path, Le(s[0]))), D++;
            continue;
          }
          const I = U(M) ? M.outlets[Qe] : `${M}`,
            H = D < s.length - 1 ? s[D + 1] : null;
          I && H && N(H) ? (p.push(new Mt(I, Le(H))), (D += 2)) : (p.push(new Mt(I, {})), D++);
        }
        return new lt(p, {});
      }
      function Wn(u) {
        const l = {};
        return (
          qt(u, (s, p) => {
            'string' == typeof s && (s = [s]), null !== s && (l[p] = bn(new lt([], {}), 0, s));
          }),
          l
        );
      }
      function Le(u) {
        const l = {};
        return qt(u, (s, p) => (l[p] = `${s}`)), l;
      }
      function ot(u, l, s) {
        return u == s.path && Tt(l, s.parameters);
      }
      const Ut = 'imperative';
      class jt {
        constructor(l, s) {
          (this.id = l), (this.url = s);
        }
      }
      class cn extends jt {
        constructor(l, s, p = 'imperative', D = null) {
          super(l, s), (this.type = 0), (this.navigationTrigger = p), (this.restoredState = D);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Xt extends jt {
        constructor(l, s, p) {
          super(l, s), (this.urlAfterRedirects = p), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Yn extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.reason = p), (this.code = D), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Gt extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.reason = p), (this.code = D), (this.type = 16);
        }
      }
      class jn extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.error = p), (this.target = D), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class br extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.urlAfterRedirects = p), (this.state = D), (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ht extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.urlAfterRedirects = p), (this.state = D), (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Br extends jt {
        constructor(l, s, p, D, M) {
          super(l, s), (this.urlAfterRedirects = p), (this.state = D), (this.shouldActivate = M), (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class an extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.urlAfterRedirects = p), (this.state = D), (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class on extends jt {
        constructor(l, s, p, D) {
          super(l, s), (this.urlAfterRedirects = p), (this.state = D), (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Qn {
        constructor(l) {
          (this.route = l), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class hn {
        constructor(l) {
          (this.route = l), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class so {
        constructor(l) {
          (this.snapshot = l), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Hr {
        constructor(l) {
          (this.snapshot = l), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ir {
        constructor(l) {
          (this.snapshot = l), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class ao {
        constructor(l) {
          (this.snapshot = l), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      let uo = (() => {
          class u {
            createUrlTree(s, p, D, M, I, H) {
              return T(s || p.root, D, M, I, H);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })(),
        lo = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({
              token: u,
              factory: function (l) {
                return uo.ɵfac(l);
              },
              providedIn: 'root',
            })),
            u
          );
        })();
      class Gr {
        constructor(l) {
          this._root = l;
        }
        get root() {
          return this._root.value;
        }
        parent(l) {
          const s = this.pathFromRoot(l);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(l) {
          const s = ur(l, this._root);
          return s ? s.children.map((p) => p.value) : [];
        }
        firstChild(l) {
          const s = ur(l, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(l) {
          const s = pn(l, this._root);
          return s.length < 2 ? [] : s[s.length - 2].children.map((D) => D.value).filter((D) => D !== l);
        }
        pathFromRoot(l) {
          return pn(l, this._root).map((s) => s.value);
        }
      }
      function ur(u, l) {
        if (u === l.value) return l;
        for (const s of l.children) {
          const p = ur(u, s);
          if (p) return p;
        }
        return null;
      }
      function pn(u, l) {
        if (u === l.value) return [l];
        for (const s of l.children) {
          const p = pn(u, s);
          if (p.length) return p.unshift(l), p;
        }
        return [];
      }
      class Mr {
        constructor(l, s) {
          (this.value = l), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function un(u) {
        const l = {};
        return u && u.children.forEach((s) => (l[s.value.outlet] = s)), l;
      }
      class qn extends Gr {
        constructor(l, s) {
          super(l), (this.snapshot = s), fo(this, l);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function zr(u, l) {
        const s = (function xr(u, l) {
            const I = new Nr([], {}, {}, '', {}, Qe, l, null, u.root, -1, {});
            return new co('', new Mr(I, []));
          })(u, l),
          p = new ee.X([new Mt('', {})]),
          D = new ee.X({}),
          M = new ee.X({}),
          I = new ee.X({}),
          H = new ee.X(''),
          X = new Xn(p, D, I, H, M, Qe, l, s.root);
        return (X.snapshot = s.root), new qn(new Mr(X, []), s);
      }
      class Xn {
        constructor(l, s, p, D, M, I, H, X) {
          (this.url = l),
            (this.params = s),
            (this.queryParams = p),
            (this.fragment = D),
            (this.data = M),
            (this.outlet = I),
            (this.component = H),
            (this.title = this.data?.pipe((0, de.U)((ke) => ke[ln])) ?? (0, Y.of)(void 0)),
            (this._futureSnapshot = X);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe((0, de.U)((l) => Ht(l)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, de.U)((l) => Ht(l)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Bn(u, l = 'emptyOnly') {
        const s = u.pathFromRoot;
        let p = 0;
        if ('always' !== l)
          for (p = s.length - 1; p >= 1; ) {
            const D = s[p],
              M = s[p - 1];
            if (D.routeConfig && '' === D.routeConfig.path) p--;
            else {
              if (M.component) break;
              p--;
            }
          }
        return (function Ei(u) {
          return u.reduce(
            (l, s) => ({
              params: { ...l.params, ...s.params },
              data: { ...l.data, ...s.data },
              resolve: { ...s.data, ...l.resolve, ...s.routeConfig?.data, ...s._resolvedData },
            }),
            { params: {}, data: {}, resolve: {} },
          );
        })(s.slice(p));
      }
      class Nr {
        get title() {
          return this.data?.[ln];
        }
        constructor(l, s, p, D, M, I, H, X, ke, Ne, Bt) {
          (this.url = l),
            (this.params = s),
            (this.queryParams = p),
            (this.fragment = D),
            (this.data = M),
            (this.outlet = I),
            (this.component = H),
            (this.routeConfig = X),
            (this._urlSegment = ke),
            (this._lastPathIndex = Ne),
            (this._resolve = Bt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Ht(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Ht(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map((p) => p.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class co extends Gr {
        constructor(l, s) {
          super(s), (this.url = l), fo(this, s);
        }
        toString() {
          return qi(this._root);
        }
      }
      function fo(u, l) {
        (l.value._routerState = u), l.children.forEach((s) => fo(u, s));
      }
      function qi(u) {
        const l = u.children.length > 0 ? ` { ${u.children.map(qi).join(', ')} } ` : '';
        return `${u.value}${l}`;
      }
      function ho(u) {
        if (u.snapshot) {
          const l = u.snapshot,
            s = u._futureSnapshot;
          (u.snapshot = s),
            Tt(l.queryParams, s.queryParams) || u.queryParams.next(s.queryParams),
            l.fragment !== s.fragment && u.fragment.next(s.fragment),
            Tt(l.params, s.params) || u.params.next(s.params),
            (function tr(u, l) {
              if (u.length !== l.length) return !1;
              for (let s = 0; s < u.length; ++s) if (!Tt(u[s], l[s])) return !1;
              return !0;
            })(l.url, s.url) || u.url.next(s.url),
            Tt(l.data, s.data) || u.data.next(s.data);
        } else (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function ko(u, l) {
        const s =
          Tt(u.params, l.params) &&
          (function mr(u, l) {
            return En(u, l) && u.every((s, p) => Tt(s.parameters, l[p].parameters));
          })(u.url, l.url);
        return s && !(!u.parent != !l.parent) && (!u.parent || ko(u.parent, l.parent));
      }
      function Wr(u, l, s) {
        if (s && u.shouldReuseRoute(l.value, s.value.snapshot)) {
          const p = s.value;
          p._futureSnapshot = l.value;
          const D = (function Ki(u, l, s) {
            return l.children.map((p) => {
              for (const D of s.children) if (u.shouldReuseRoute(p.value, D.value.snapshot)) return Wr(u, p, D);
              return Wr(u, p);
            });
          })(u, l, s);
          return new Mr(p, D);
        }
        {
          if (u.shouldAttach(l.value)) {
            const M = u.retrieve(l.value);
            if (null !== M) {
              const I = M.route;
              return (I.value._futureSnapshot = l.value), (I.children = l.children.map((H) => Wr(u, H))), I;
            }
          }
          const p = (function Zi(u) {
              return new Xn(
                new ee.X(u.url),
                new ee.X(u.params),
                new ee.X(u.queryParams),
                new ee.X(u.fragment),
                new ee.X(u.data),
                u.outlet,
                u.component,
                u,
              );
            })(l.value),
            D = l.children.map((M) => Wr(u, M));
          return new Mr(p, D);
        }
      }
      const bi = 'ngNavigationCancelingError';
      function Mi(u, l) {
        const { redirectTo: s, navigationBehaviorOptions: p } = or(l)
            ? { redirectTo: l, navigationBehaviorOptions: void 0 }
            : l,
          D = Qi(!1, 0, l);
        return (D.url = s), (D.navigationBehaviorOptions = p), D;
      }
      function Qi(u, l, s) {
        const p = new Error('NavigationCancelingError: ' + (u || ''));
        return (p[bi] = !0), (p.cancellationCode = l), s && (p.url = s), p;
      }
      function Vo(u) {
        return Si(u) && or(u.url);
      }
      function Si(u) {
        return u && u[bi];
      }
      class Ii {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new vr()),
            (this.attachRef = null);
        }
      }
      let vr = (() => {
        class u {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, p) {
            const D = this.getOrCreateContext(s);
            (D.outlet = p), this.contexts.set(s, D);
          }
          onChildOutletDestroyed(s) {
            const p = this.getContext(s);
            p && ((p.outlet = null), (p.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let p = this.getContext(s);
            return p || ((p = new Ii()), this.contexts.set(s, p)), p;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const Uo = !1;
      let Xi = (() => {
        class u {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Qe),
              (this.activateEvents = new w.vpe()),
              (this.deactivateEvents = new w.vpe()),
              (this.attachEvents = new w.vpe()),
              (this.detachEvents = new w.vpe()),
              (this.parentContexts = (0, w.f3M)(vr)),
              (this.location = (0, w.f3M)(w.s_b)),
              (this.changeDetector = (0, w.f3M)(w.sBO)),
              (this.environmentInjector = (0, w.f3M)(w.lqb));
          }
          ngOnChanges(s) {
            if (s.name) {
              const { firstChange: p, previousValue: D } = s.name;
              if (p) return;
              this.isTrackedInParentContexts(D) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(D)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(s) {
            return this.parentContexts.getContext(s)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if ((this.parentContexts.onChildOutletCreated(this.name, this), this.activated)) return;
            const s = this.parentContexts.getContext(this.name);
            s?.route && (s.attachRef ? this.attach(s.attachRef, s.route) : this.activateWith(s.route, s.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new w.vHH(4012, Uo);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new w.vHH(4012, Uo);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new w.vHH(4012, Uo);
            this.location.detach();
            const s = this.activated;
            return (this.activated = null), (this._activatedRoute = null), this.detachEvents.emit(s.instance), s;
          }
          attach(s, p) {
            (this.activated = s),
              (this._activatedRoute = p),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, p) {
            if (this.isActivated) throw new w.vHH(4013, Uo);
            this._activatedRoute = s;
            const D = this.location,
              I = s.snapshot.component,
              H = this.parentContexts.getOrCreateContext(this.name).children,
              X = new ui(s, H, D.injector);
            if (
              p &&
              (function Sr(u) {
                return !!u.resolveComponentFactory;
              })(p)
            ) {
              const ke = p.resolveComponentFactory(I);
              this.activated = D.createComponent(ke, D.length, X);
            } else
              this.activated = D.createComponent(I, {
                index: D.length,
                injector: X,
                environmentInjector: p ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵdir = w.lG2({
            type: u,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [w.TTD],
          })),
          u
        );
      })();
      class ui {
        constructor(l, s, p) {
          (this.route = l), (this.childContexts = s), (this.parent = p);
        }
        get(l, s) {
          return l === Xn ? this.route : l === vr ? this.childContexts : this.parent.get(l, s);
        }
      }
      let Yr = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵcmp = w.Xpm({
            type: u,
            selectors: [['ng-component']],
            standalone: !0,
            features: [w.jDz],
            decls: 1,
            vars: 0,
            template: function (s, p) {
              1 & s && w._UZ(0, 'router-outlet');
            },
            dependencies: [Xi],
            encapsulation: 2,
          })),
          u
        );
      })();
      function po(u, l) {
        return (
          u.providers && !u._injector && (u._injector = (0, w.MMx)(u.providers, l, `Route: ${u.path}`)),
          u._injector ?? l
        );
      }
      function Rn(u) {
        const l = u.children && u.children.map(Rn),
          s = l ? { ...u, children: l } : { ...u };
        return (
          !s.component &&
            !s.loadComponent &&
            (l || s.loadChildren) &&
            s.outlet &&
            s.outlet !== Qe &&
            (s.component = Yr),
          s
        );
      }
      function Hn(u) {
        return u.outlet || Qe;
      }
      function vo(u, l) {
        const s = u.filter((p) => Hn(p) === l);
        return s.push(...u.filter((p) => Hn(p) !== l)), s;
      }
      function nn(u) {
        if (!u) return null;
        if (u.routeConfig?._injector) return u.routeConfig._injector;
        for (let l = u.parent; l; l = l.parent) {
          const s = l.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class Ho {
        constructor(l, s, p, D) {
          (this.routeReuseStrategy = l), (this.futureState = s), (this.currState = p), (this.forwardEvent = D);
        }
        activate(l) {
          const s = this.futureState._root,
            p = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, p, l), ho(this.futureState.root), this.activateChildRoutes(s, p, l);
        }
        deactivateChildRoutes(l, s, p) {
          const D = un(s);
          l.children.forEach((M) => {
            const I = M.value.outlet;
            this.deactivateRoutes(M, D[I], p), delete D[I];
          }),
            qt(D, (M, I) => {
              this.deactivateRouteAndItsChildren(M, p);
            });
        }
        deactivateRoutes(l, s, p) {
          const D = l.value,
            M = s ? s.value : null;
          if (D === M)
            if (D.component) {
              const I = p.getContext(D.outlet);
              I && this.deactivateChildRoutes(l, s, I.children);
            } else this.deactivateChildRoutes(l, s, p);
          else M && this.deactivateRouteAndItsChildren(s, p);
        }
        deactivateRouteAndItsChildren(l, s) {
          l.value.component && this.routeReuseStrategy.shouldDetach(l.value.snapshot)
            ? this.detachAndStoreRouteSubtree(l, s)
            : this.deactivateRouteAndOutlet(l, s);
        }
        detachAndStoreRouteSubtree(l, s) {
          const p = s.getContext(l.value.outlet),
            D = p && l.value.component ? p.children : s,
            M = un(l);
          for (const I of Object.keys(M)) this.deactivateRouteAndItsChildren(M[I], D);
          if (p && p.outlet) {
            const I = p.outlet.detach(),
              H = p.children.onOutletDeactivated();
            this.routeReuseStrategy.store(l.value.snapshot, { componentRef: I, route: l, contexts: H });
          }
        }
        deactivateRouteAndOutlet(l, s) {
          const p = s.getContext(l.value.outlet),
            D = p && l.value.component ? p.children : s,
            M = un(l);
          for (const I of Object.keys(M)) this.deactivateRouteAndItsChildren(M[I], D);
          p &&
            p.outlet &&
            (p.outlet.deactivate(),
            p.children.onOutletDeactivated(),
            (p.attachRef = null),
            (p.resolver = null),
            (p.route = null));
        }
        activateChildRoutes(l, s, p) {
          const D = un(s);
          l.children.forEach((M) => {
            this.activateRoutes(M, D[M.value.outlet], p), this.forwardEvent(new ao(M.value.snapshot));
          }),
            l.children.length && this.forwardEvent(new Hr(l.value.snapshot));
        }
        activateRoutes(l, s, p) {
          const D = l.value,
            M = s ? s.value : null;
          if ((ho(D), D === M))
            if (D.component) {
              const I = p.getOrCreateContext(D.outlet);
              this.activateChildRoutes(l, s, I.children);
            } else this.activateChildRoutes(l, s, p);
          else if (D.component) {
            const I = p.getOrCreateContext(D.outlet);
            if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
              const H = this.routeReuseStrategy.retrieve(D.snapshot);
              this.routeReuseStrategy.store(D.snapshot, null),
                I.children.onOutletReAttached(H.contexts),
                (I.attachRef = H.componentRef),
                (I.route = H.route.value),
                I.outlet && I.outlet.attach(H.componentRef, H.route.value),
                ho(H.route.value),
                this.activateChildRoutes(l, null, I.children);
            } else {
              const H = nn(D.snapshot),
                X = H?.get(w._Vd) ?? null;
              (I.attachRef = null),
                (I.route = D),
                (I.resolver = X),
                (I.injector = H),
                I.outlet && I.outlet.activateWith(D, I.injector),
                this.activateChildRoutes(l, null, I.children);
            }
          } else this.activateChildRoutes(l, null, p);
        }
      }
      class Mn {
        constructor(l) {
          (this.path = l), (this.route = this.path[this.path.length - 1]);
        }
      }
      class yo {
        constructor(l, s) {
          (this.component = l), (this.route = s);
        }
      }
      function $o(u, l, s) {
        const p = u._root;
        return Do(p, l ? l._root : null, s, [p.value]);
      }
      function _n(u, l) {
        const s = Symbol(),
          p = l.get(u, s);
        return p === s ? ('function' != typeof u || (0, w.Z0I)(u) ? l.get(u) : u) : p;
      }
      function Do(u, l, s, p, D = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const M = un(l);
        return (
          u.children.forEach((I) => {
            (function _o(u, l, s, p, D = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const M = u.value,
                I = l ? l.value : null,
                H = s ? s.getContext(u.value.outlet) : null;
              if (I && M.routeConfig === I.routeConfig) {
                const X = (function Ai(u, l, s) {
                  if ('function' == typeof s) return s(u, l);
                  switch (s) {
                    case 'pathParamsChange':
                      return !En(u.url, l.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !En(u.url, l.url) || !Tt(u.queryParams, l.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !ko(u, l) || !Tt(u.queryParams, l.queryParams);
                    default:
                      return !ko(u, l);
                  }
                })(I, M, M.routeConfig.runGuardsAndResolvers);
                X ? D.canActivateChecks.push(new Mn(p)) : ((M.data = I.data), (M._resolvedData = I._resolvedData)),
                  Do(u, l, M.component ? (H ? H.children : null) : s, p, D),
                  X &&
                    H &&
                    H.outlet &&
                    H.outlet.isActivated &&
                    D.canDeactivateChecks.push(new yo(H.outlet.component, I));
              } else
                I && Jn(l, H, D),
                  D.canActivateChecks.push(new Mn(p)),
                  Do(u, null, M.component ? (H ? H.children : null) : s, p, D);
            })(I, M[I.value.outlet], s, p.concat([I.value]), D),
              delete M[I.value.outlet];
          }),
          qt(M, (I, H) => Jn(I, s.getContext(H), D)),
          D
        );
      }
      function Jn(u, l, s) {
        const p = un(u),
          D = u.value;
        qt(p, (M, I) => {
          Jn(M, D.component ? (l ? l.children.getContext(I) : null) : l, s);
        }),
          s.canDeactivateChecks.push(
            new yo(D.component && l && l.outlet && l.outlet.isActivated ? l.outlet.component : null, D),
          );
      }
      function Co(u) {
        return 'function' == typeof u;
      }
      function Go(u) {
        return u instanceof Oe || 'EmptyError' === u?.name;
      }
      const zo = Symbol('INITIAL_VALUE');
      function fe() {
        return (0, Q.w)((u) =>
          (0, _e.a)(
            u.map((l) =>
              l.pipe(
                Se(1),
                (function $e(...u) {
                  const l = (0, he.yG)(u);
                  return (0, we.e)((s, p) => {
                    (l ? oe(u, s, l) : oe(u, s)).subscribe(p);
                  });
                })(zo),
              ),
            ),
          ).pipe(
            (0, de.U)((l) => {
              for (const s of l)
                if (!0 !== s) {
                  if (s === zo) return zo;
                  if (!1 === s || s instanceof Pt) return s;
                }
              return !0;
            }),
            (0, dt.h)((l) => l !== zo),
            Se(1),
          ),
        );
      }
      function qo(u) {
        return (0, xe.z)(
          (0, Ue.b)((l) => {
            if (or(l)) throw Mi(0, l);
          }),
          (0, de.U)((l) => !0 === l),
        );
      }
      const Eo = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Cn(u, l, s, p, D) {
        const M = Kn(u, l, s);
        return M.matched
          ? (function Ns(u, l, s, p) {
              const D = l.canMatch;
              if (!D || 0 === D.length) return (0, Y.of)(!0);
              const M = D.map((I) => {
                const H = _n(I, u);
                return en(
                  (function ts(u) {
                    return u && Co(u.canMatch);
                  })(H)
                    ? H.canMatch(l, s)
                    : u.runInContext(() => H(l, s)),
                );
              });
              return (0, Y.of)(M).pipe(fe(), qo());
            })((p = po(l, p)), l, s).pipe((0, de.U)((I) => (!0 === I ? M : { ...Eo })))
          : (0, Y.of)(M);
      }
      function Kn(u, l, s) {
        if ('' === l.path)
          return 'full' === l.pathMatch && (u.hasChildren() || s.length > 0)
            ? { ...Eo }
            : { matched: !0, consumedSegments: [], remainingSegments: s, parameters: {}, positionalParamSegments: {} };
        const D = (l.matcher || Cr)(s, u, l);
        if (!D) return { ...Eo };
        const M = {};
        qt(D.posParams, (H, X) => {
          M[X] = H.path;
        });
        const I = D.consumed.length > 0 ? { ...M, ...D.consumed[D.consumed.length - 1].parameters } : M;
        return {
          matched: !0,
          consumedSegments: D.consumed,
          remainingSegments: s.slice(D.consumed.length),
          parameters: I,
          positionalParamSegments: D.posParams ?? {},
        };
      }
      function Qr(u, l, s, p) {
        if (
          s.length > 0 &&
          (function fi(u, l, s) {
            return s.some((p) => bo(u, l, p) && Hn(p) !== Qe);
          })(u, s, p)
        ) {
          const M = new lt(
            l,
            (function yr(u, l, s, p) {
              const D = {};
              (D[Qe] = p), (p._sourceSegment = u), (p._segmentIndexShift = l.length);
              for (const M of s)
                if ('' === M.path && Hn(M) !== Qe) {
                  const I = new lt([], {});
                  (I._sourceSegment = u), (I._segmentIndexShift = l.length), (D[Hn(M)] = I);
                }
              return D;
            })(u, l, p, new lt(s, u.children)),
          );
          return (M._sourceSegment = u), (M._segmentIndexShift = l.length), { segmentGroup: M, slicedSegments: [] };
        }
        if (
          0 === s.length &&
          (function Ri(u, l, s) {
            return s.some((p) => bo(u, l, p));
          })(u, s, p)
        ) {
          const M = new lt(
            u.segments,
            (function Xr(u, l, s, p, D) {
              const M = {};
              for (const I of p)
                if (bo(u, s, I) && !D[Hn(I)]) {
                  const H = new lt([], {});
                  (H._sourceSegment = u), (H._segmentIndexShift = l.length), (M[Hn(I)] = H);
                }
              return { ...D, ...M };
            })(u, l, s, p, u.children),
          );
          return (M._sourceSegment = u), (M._segmentIndexShift = l.length), { segmentGroup: M, slicedSegments: s };
        }
        const D = new lt(u.segments, u.children);
        return (D._sourceSegment = u), (D._segmentIndexShift = l.length), { segmentGroup: D, slicedSegments: s };
      }
      function bo(u, l, s) {
        return (!(u.hasChildren() || l.length > 0) || 'full' !== s.pathMatch) && '' === s.path;
      }
      function Pi(u, l, s, p) {
        return !!(Hn(u) === p || (p !== Qe && bo(l, s, u))) && ('**' === u.path || Kn(l, u, s).matched);
      }
      function Ko(u, l, s) {
        return 0 === l.length && !u.children[s];
      }
      const Dr = !1;
      class Mo {
        constructor(l) {
          this.segmentGroup = l || null;
        }
      }
      class So {
        constructor(l) {
          this.urlTree = l;
        }
      }
      function Fr(u) {
        return Xe(new Mo(u));
      }
      function hi(u) {
        return Xe(new So(u));
      }
      class Fi {
        constructor(l, s, p, D, M) {
          (this.injector = l),
            (this.configLoader = s),
            (this.urlSerializer = p),
            (this.urlTree = D),
            (this.config = M),
            (this.allowRedirects = !0);
        }
        apply() {
          const l = Qr(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new lt(l.segments, l.children);
          return this.expandSegmentGroup(this.injector, this.config, s, Qe)
            .pipe((0, de.U)((M) => this.createUrlTree(Dn(M), this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              ft((M) => {
                if (M instanceof So) return (this.allowRedirects = !1), this.match(M.urlTree);
                throw M instanceof Mo ? this.noMatchError(M) : M;
              }),
            );
        }
        match(l) {
          return this.expandSegmentGroup(this.injector, this.config, l.root, Qe)
            .pipe((0, de.U)((D) => this.createUrlTree(Dn(D), l.queryParams, l.fragment)))
            .pipe(
              ft((D) => {
                throw D instanceof Mo ? this.noMatchError(D) : D;
              }),
            );
        }
        noMatchError(l) {
          return new w.vHH(4002, Dr);
        }
        createUrlTree(l, s, p) {
          const D = On(l);
          return new Pt(D, s, p);
        }
        expandSegmentGroup(l, s, p, D) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.expandChildren(l, s, p).pipe((0, de.U)((M) => new lt([], M)))
            : this.expandSegment(l, p, s, p.segments, D, !0);
        }
        expandChildren(l, s, p) {
          const D = [];
          for (const M of Object.keys(p.children)) 'primary' === M ? D.unshift(M) : D.push(M);
          return (0, d.D)(D).pipe(
            (0, me.b)((M) => {
              const I = p.children[M],
                H = vo(s, M);
              return this.expandSegmentGroup(l, H, I, M).pipe((0, de.U)((X) => ({ segment: X, outlet: M })));
            }),
            Je((M, I) => ((M[I.outlet] = I.segment), M), {}),
            Dt(),
          );
        }
        expandSegment(l, s, p, D, M, I) {
          return (0, d.D)(p).pipe(
            (0, me.b)((H) =>
              this.expandSegmentAgainstRoute(l, s, p, H, D, M, I).pipe(
                ft((ke) => {
                  if (ke instanceof Mo) return (0, Y.of)(null);
                  throw ke;
                }),
              ),
            ),
            Te((H) => !!H),
            ft((H, X) => {
              if (Go(H)) return Ko(s, D, M) ? (0, Y.of)(new lt([], {})) : Fr(s);
              throw H;
            }),
          );
        }
        expandSegmentAgainstRoute(l, s, p, D, M, I, H) {
          return Pi(D, s, M, I)
            ? void 0 === D.redirectTo
              ? this.matchSegmentAgainstRoute(l, s, D, M, I)
              : H && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(l, s, p, D, M, I)
              : Fr(s)
            : Fr(s);
        }
        expandSegmentAgainstRouteUsingRedirect(l, s, p, D, M, I) {
          return '**' === D.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, p, D, I)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(l, s, p, D, M, I);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(l, s, p, D) {
          const M = this.applyRedirectCommands([], p.redirectTo, {});
          return p.redirectTo.startsWith('/')
            ? hi(M)
            : this.lineralizeSegments(p, M).pipe(
                (0, Ie.z)((I) => {
                  const H = new lt(I, {});
                  return this.expandSegment(l, H, s, I, D, !1);
                }),
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(l, s, p, D, M, I) {
          const { matched: H, consumedSegments: X, remainingSegments: ke, positionalParamSegments: Ne } = Kn(s, D, M);
          if (!H) return Fr(s);
          const Bt = this.applyRedirectCommands(X, D.redirectTo, Ne);
          return D.redirectTo.startsWith('/')
            ? hi(Bt)
            : this.lineralizeSegments(D, Bt).pipe((0, Ie.z)((Sn) => this.expandSegment(l, s, p, Sn.concat(ke), I, !1)));
        }
        matchSegmentAgainstRoute(l, s, p, D, M) {
          return '**' === p.path
            ? ((l = po(p, l)),
              p.loadChildren
                ? (p._loadedRoutes
                    ? (0, Y.of)({ routes: p._loadedRoutes, injector: p._loadedInjector })
                    : this.configLoader.loadChildren(l, p)
                  ).pipe(
                    (0, de.U)((H) => ((p._loadedRoutes = H.routes), (p._loadedInjector = H.injector), new lt(D, {}))),
                  )
                : (0, Y.of)(new lt(D, {})))
            : Cn(s, p, D, l).pipe(
                (0, Q.w)(({ matched: I, consumedSegments: H, remainingSegments: X }) =>
                  I
                    ? this.getChildConfig((l = p._injector ?? l), p, D).pipe(
                        (0, Ie.z)((Ne) => {
                          const Bt = Ne.injector ?? l,
                            Sn = Ne.routes,
                            { segmentGroup: Oo, slicedSegments: eo } = Qr(s, H, X, Sn),
                            ni = new lt(Oo.segments, Oo.children);
                          if (0 === eo.length && ni.hasChildren())
                            return this.expandChildren(Bt, Sn, ni).pipe((0, de.U)((js) => new lt(H, js)));
                          if (0 === Sn.length && 0 === eo.length) return (0, Y.of)(new lt(H, {}));
                          const Rr = Hn(p) === M;
                          return this.expandSegment(Bt, ni, Sn, eo, Rr ? Qe : M, !0).pipe(
                            (0, de.U)((Us) => new lt(H.concat(Us.segments), Us.children)),
                          );
                        }),
                      )
                    : Fr(s),
                ),
              );
        }
        getChildConfig(l, s, p) {
          return s.children
            ? (0, Y.of)({ routes: s.children, injector: l })
            : s.loadChildren
            ? void 0 !== s._loadedRoutes
              ? (0, Y.of)({ routes: s._loadedRoutes, injector: s._loadedInjector })
              : (function Zr(u, l, s, p) {
                  const D = l.canLoad;
                  if (void 0 === D || 0 === D.length) return (0, Y.of)(!0);
                  const M = D.map((I) => {
                    const H = _n(I, u);
                    return en(
                      (function We(u) {
                        return u && Co(u.canLoad);
                      })(H)
                        ? H.canLoad(l, s)
                        : u.runInContext(() => H(l, s)),
                    );
                  });
                  return (0, Y.of)(M).pipe(fe(), qo());
                })(l, s, p).pipe(
                  (0, Ie.z)((D) =>
                    D
                      ? this.configLoader.loadChildren(l, s).pipe(
                          (0, Ue.b)((M) => {
                            (s._loadedRoutes = M.routes), (s._loadedInjector = M.injector);
                          }),
                        )
                      : (function xi(u) {
                          return Xe(Qi(Dr, 3));
                        })(),
                  ),
                )
            : (0, Y.of)({ routes: [], injector: l });
        }
        lineralizeSegments(l, s) {
          let p = [],
            D = s.root;
          for (;;) {
            if (((p = p.concat(D.segments)), 0 === D.numberOfChildren)) return (0, Y.of)(p);
            if (D.numberOfChildren > 1 || !D.children[Qe]) return l.redirectTo, Xe(new w.vHH(4e3, Dr));
            D = D.children[Qe];
          }
        }
        applyRedirectCommands(l, s, p) {
          return this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), l, p);
        }
        applyRedirectCreateUrlTree(l, s, p, D) {
          const M = this.createSegmentGroup(l, s.root, p, D);
          return new Pt(M, this.createQueryParams(s.queryParams, this.urlTree.queryParams), s.fragment);
        }
        createQueryParams(l, s) {
          const p = {};
          return (
            qt(l, (D, M) => {
              if ('string' == typeof D && D.startsWith(':')) {
                const H = D.substring(1);
                p[M] = s[H];
              } else p[M] = D;
            }),
            p
          );
        }
        createSegmentGroup(l, s, p, D) {
          const M = this.createSegments(l, s.segments, p, D);
          let I = {};
          return (
            qt(s.children, (H, X) => {
              I[X] = this.createSegmentGroup(l, H, p, D);
            }),
            new lt(M, I)
          );
        }
        createSegments(l, s, p, D) {
          return s.map((M) => (M.path.startsWith(':') ? this.findPosParam(l, M, D) : this.findOrReturn(M, p)));
        }
        findPosParam(l, s, p) {
          const D = p[s.path.substring(1)];
          if (!D) throw new w.vHH(4001, Dr);
          return D;
        }
        findOrReturn(l, s) {
          let p = 0;
          for (const D of s) {
            if (D.path === l.path) return s.splice(p), D;
            p++;
          }
          return l;
        }
      }
      class ns {}
      class Lr {
        constructor(l, s, p, D, M, I, H) {
          (this.injector = l),
            (this.rootComponentType = s),
            (this.config = p),
            (this.urlTree = D),
            (this.url = M),
            (this.paramsInheritanceStrategy = I),
            (this.urlSerializer = H);
        }
        recognize() {
          const l = Qr(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo),
          ).segmentGroup;
          return this.processSegmentGroup(this.injector, this.config, l, Qe).pipe(
            (0, de.U)((s) => {
              if (null === s) return null;
              const p = new Nr(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Qe,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {},
                ),
                D = new Mr(p, s),
                M = new co(this.url, D);
              return this.inheritParamsAndData(M._root), M;
            }),
          );
        }
        inheritParamsAndData(l) {
          const s = l.value,
            p = Bn(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(p.params)),
            (s.data = Object.freeze(p.data)),
            l.children.forEach((D) => this.inheritParamsAndData(D));
        }
        processSegmentGroup(l, s, p, D) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.processChildren(l, s, p)
            : this.processSegment(l, s, p, p.segments, D);
        }
        processChildren(l, s, p) {
          return (0, d.D)(Object.keys(p.children)).pipe(
            (0, me.b)((D) => {
              const M = p.children[D],
                I = vo(s, D);
              return this.processSegmentGroup(l, I, M, D);
            }),
            Je((D, M) => (D && M ? (D.push(...M), D) : null)),
            (function Rt(u, l = !1) {
              return (0, we.e)((s, p) => {
                let D = 0;
                s.subscribe(
                  (0, ye.x)(p, (M) => {
                    const I = u(M, D++);
                    (I || l) && p.next(M), !I && p.complete();
                  }),
                );
              });
            })((D) => null !== D),
            W(null),
            Dt(),
            (0, de.U)((D) => {
              if (null === D) return null;
              const M = y(D);
              return (
                (function tn(u) {
                  u.sort((l, s) =>
                    l.value.outlet === Qe
                      ? -1
                      : s.value.outlet === Qe
                      ? 1
                      : l.value.outlet.localeCompare(s.value.outlet),
                  );
                })(M),
                M
              );
            }),
          );
        }
        processSegment(l, s, p, D, M) {
          return (0, d.D)(s).pipe(
            (0, me.b)((I) => this.processSegmentAgainstRoute(I._injector ?? l, I, p, D, M)),
            Te((I) => !!I),
            ft((I) => {
              if (Go(I)) return Ko(p, D, M) ? (0, Y.of)([]) : (0, Y.of)(null);
              throw I;
            }),
          );
        }
        processSegmentAgainstRoute(l, s, p, D, M) {
          if (s.redirectTo || !Pi(s, p, D, M)) return (0, Y.of)(null);
          let I;
          if ('**' === s.path) {
            const H = D.length > 0 ? Tn(D).parameters : {},
              X = K(p) + D.length,
              ke = new Nr(
                D,
                H,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Be(s),
                Hn(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                P(p),
                X,
                Et(s),
              );
            I = (0, Y.of)({ snapshot: ke, consumedSegments: [], remainingSegments: [] });
          } else
            I = Cn(p, s, D, l).pipe(
              (0, de.U)(({ matched: H, consumedSegments: X, remainingSegments: ke, parameters: Ne }) => {
                if (!H) return null;
                const Bt = K(p) + X.length;
                return {
                  snapshot: new Nr(
                    X,
                    Ne,
                    Object.freeze({ ...this.urlTree.queryParams }),
                    this.urlTree.fragment,
                    Be(s),
                    Hn(s),
                    s.component ?? s._loadedComponent ?? null,
                    s,
                    P(p),
                    Bt,
                    Et(s),
                  ),
                  consumedSegments: X,
                  remainingSegments: ke,
                };
              }),
            );
          return I.pipe(
            (0, Q.w)((H) => {
              if (null === H) return (0, Y.of)(null);
              const { snapshot: X, consumedSegments: ke, remainingSegments: Ne } = H;
              l = s._injector ?? l;
              const Bt = s._loadedInjector ?? l,
                Sn = (function m(u) {
                  return u.children ? u.children : u.loadChildren ? u._loadedRoutes : [];
                })(s),
                { segmentGroup: Oo, slicedSegments: eo } = Qr(
                  p,
                  ke,
                  Ne,
                  Sn.filter((Rr) => void 0 === Rr.redirectTo),
                );
              if (0 === eo.length && Oo.hasChildren())
                return this.processChildren(Bt, Sn, Oo).pipe((0, de.U)((Rr) => (null === Rr ? null : [new Mr(X, Rr)])));
              if (0 === Sn.length && 0 === eo.length) return (0, Y.of)([new Mr(X, [])]);
              const ni = Hn(s) === M;
              return this.processSegment(Bt, Sn, Oo, eo, ni ? Qe : M).pipe(
                (0, de.U)((Rr) => (null === Rr ? null : [new Mr(X, Rr)])),
              );
            }),
          );
        }
      }
      function C(u) {
        const l = u.value.routeConfig;
        return l && '' === l.path && void 0 === l.redirectTo;
      }
      function y(u) {
        const l = [],
          s = new Set();
        for (const p of u) {
          if (!C(p)) {
            l.push(p);
            continue;
          }
          const D = l.find((M) => p.value.routeConfig === M.value.routeConfig);
          void 0 !== D ? (D.children.push(...p.children), s.add(D)) : l.push(p);
        }
        for (const p of s) {
          const D = y(p.children);
          l.push(new Mr(p.value, D));
        }
        return l.filter((p) => !s.has(p));
      }
      function P(u) {
        let l = u;
        for (; l._sourceSegment; ) l = l._sourceSegment;
        return l;
      }
      function K(u) {
        let l = u,
          s = l._segmentIndexShift ?? 0;
        for (; l._sourceSegment; ) (l = l._sourceSegment), (s += l._segmentIndexShift ?? 0);
        return s - 1;
      }
      function Be(u) {
        return u.data || {};
      }
      function Et(u) {
        return u.resolve || {};
      }
      function Tr(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function xn(u) {
        return (0, Q.w)((l) => {
          const s = u(l);
          return s ? (0, d.D)(s).pipe((0, de.U)(() => l)) : (0, Y.of)(l);
        });
      }
      const h = new w.OlP('ROUTES');
      let g = (() => {
        class u {
          constructor(s, p) {
            (this.injector = s),
              (this.compiler = p),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s)) return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, Y.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const p = en(s.loadComponent()).pipe(
                (0, de.U)(E),
                (0, Ue.b)((M) => {
                  this.onLoadEndListener && this.onLoadEndListener(s), (s._loadedComponent = M);
                }),
                zt(() => {
                  this.componentLoaders.delete(s);
                }),
              ),
              D = new Ke(p, () => new pt.x()).pipe(Me());
            return this.componentLoaders.set(s, D), D;
          }
          loadChildren(s, p) {
            if (this.childrenLoaders.get(p)) return this.childrenLoaders.get(p);
            if (p._loadedRoutes) return (0, Y.of)({ routes: p._loadedRoutes, injector: p._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(p);
            const M = this.loadModuleFactoryOrRoutes(p.loadChildren).pipe(
                (0, de.U)((H) => {
                  this.onLoadEndListener && this.onLoadEndListener(p);
                  let X,
                    ke,
                    Ne = !1;
                  Array.isArray(H)
                    ? (ke = H)
                    : ((X = H.create(s).injector), (ke = nr(X.get(h, [], w.XFs.Self | w.XFs.Optional))));
                  return { routes: ke.map(Rn), injector: X };
                }),
                zt(() => {
                  this.childrenLoaders.delete(p);
                }),
              ),
              I = new Ke(M, () => new pt.x()).pipe(Me());
            return this.childrenLoaders.set(p, I), I;
          }
          loadModuleFactoryOrRoutes(s) {
            return en(s()).pipe(
              (0, de.U)(E),
              (0, Ie.z)((D) =>
                D instanceof w.YKP || Array.isArray(D) ? (0, Y.of)(D) : (0, d.D)(this.compiler.compileModuleAsync(D)),
              ),
            );
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(w.LFG(w.zs3), w.LFG(w.Sil));
          }),
          (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      function E(u) {
        return (function c(u) {
          return u && 'object' == typeof u && 'default' in u;
        })(u)
          ? u.default
          : u;
      }
      let Ee = (() => {
        class u {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new pt.x()),
              (this.configLoader = (0, w.f3M)(g)),
              (this.environmentInjector = (0, w.f3M)(w.lqb)),
              (this.urlSerializer = (0, w.f3M)(Zn)),
              (this.rootContexts = (0, w.f3M)(vr)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, Y.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (D) => this.events.next(new hn(D))),
              (this.configLoader.onLoadStartListener = (D) => this.events.next(new Qn(D)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(s) {
            const p = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...s, id: p });
          }
          setupNavigations(s) {
            return (
              (this.transitions = new ee.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: s.currentUrlTree,
                currentRawUrl: s.currentUrlTree,
                extractedUrl: s.urlHandlingStrategy.extract(s.currentUrlTree),
                urlAfterRedirects: s.urlHandlingStrategy.extract(s.currentUrlTree),
                rawUrl: s.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Ut,
                restoredState: null,
                currentSnapshot: s.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: s.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, dt.h)((p) => 0 !== p.id),
                (0, de.U)((p) => ({ ...p, extractedUrl: s.urlHandlingStrategy.extract(p.rawUrl) })),
                (0, Q.w)((p) => {
                  let D = !1,
                    M = !1;
                  return (0, Y.of)(p).pipe(
                    (0, Ue.b)((I) => {
                      this.currentNavigation = {
                        id: I.id,
                        initialUrl: I.rawUrl,
                        extractedUrl: I.extractedUrl,
                        trigger: I.source,
                        extras: I.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? { ...this.lastSuccessfulNavigation, previousNavigation: null }
                          : null,
                      };
                    }),
                    (0, Q.w)((I) => {
                      const H = s.browserUrlTree.toString(),
                        X = !s.navigated || I.extractedUrl.toString() !== H || H !== s.currentUrlTree.toString();
                      if (!X && 'reload' !== (I.extras.onSameUrlNavigation ?? s.onSameUrlNavigation)) {
                        const Ne = '';
                        return (
                          this.events.next(new Gt(I.id, s.serializeUrl(p.rawUrl), Ne, 0)),
                          (s.rawUrlTree = I.rawUrl),
                          I.resolve(null),
                          Ze.E
                        );
                      }
                      if (s.urlHandlingStrategy.shouldProcessUrl(I.rawUrl))
                        return (
                          Ye(I.source) && (s.browserUrlTree = I.extractedUrl),
                          (0, Y.of)(I).pipe(
                            (0, Q.w)((Ne) => {
                              const Bt = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new cn(
                                    Ne.id,
                                    this.urlSerializer.serialize(Ne.extractedUrl),
                                    Ne.source,
                                    Ne.restoredState,
                                  ),
                                ),
                                Bt !== this.transitions?.getValue() ? Ze.E : Promise.resolve(Ne)
                              );
                            }),
                            (function Li(u, l, s, p) {
                              return (0, Q.w)((D) =>
                                (function Ni(u, l, s, p, D) {
                                  return new Fi(u, l, s, p, D).apply();
                                })(u, l, s, D.extractedUrl, p).pipe((0, de.U)((M) => ({ ...D, urlAfterRedirects: M }))),
                              );
                            })(this.environmentInjector, this.configLoader, this.urlSerializer, s.config),
                            (0, Ue.b)((Ne) => {
                              (this.currentNavigation = { ...this.currentNavigation, finalUrl: Ne.urlAfterRedirects }),
                                (p.urlAfterRedirects = Ne.urlAfterRedirects);
                            }),
                            (function At(u, l, s, p, D) {
                              return (0, Ie.z)((M) =>
                                (function Pn(u, l, s, p, D, M, I = 'emptyOnly') {
                                  return new Lr(u, l, s, p, D, I, M).recognize().pipe(
                                    (0, Q.w)((H) =>
                                      null === H
                                        ? (function rs(u) {
                                            return new Ce.y((l) => l.error(u));
                                          })(new ns())
                                        : (0, Y.of)(H),
                                    ),
                                  );
                                })(u, l, s, M.urlAfterRedirects, p.serialize(M.urlAfterRedirects), p, D).pipe(
                                  (0, de.U)((I) => ({ ...M, targetSnapshot: I })),
                                ),
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              s.config,
                              this.urlSerializer,
                              s.paramsInheritanceStrategy,
                            ),
                            (0, Ue.b)((Ne) => {
                              if (((p.targetSnapshot = Ne.targetSnapshot), 'eager' === s.urlUpdateStrategy)) {
                                if (!Ne.extras.skipLocationChange) {
                                  const Sn = s.urlHandlingStrategy.merge(Ne.urlAfterRedirects, Ne.rawUrl);
                                  s.setBrowserUrl(Sn, Ne);
                                }
                                s.browserUrlTree = Ne.urlAfterRedirects;
                              }
                              const Bt = new br(
                                Ne.id,
                                this.urlSerializer.serialize(Ne.extractedUrl),
                                this.urlSerializer.serialize(Ne.urlAfterRedirects),
                                Ne.targetSnapshot,
                              );
                              this.events.next(Bt);
                            }),
                          )
                        );
                      if (X && s.urlHandlingStrategy.shouldProcessUrl(s.rawUrlTree)) {
                        const { id: Ne, extractedUrl: Bt, source: Sn, restoredState: Oo, extras: eo } = I,
                          ni = new cn(Ne, this.urlSerializer.serialize(Bt), Sn, Oo);
                        this.events.next(ni);
                        const Rr = zr(Bt, this.rootComponentType).snapshot;
                        return (
                          (p = {
                            ...I,
                            targetSnapshot: Rr,
                            urlAfterRedirects: Bt,
                            extras: { ...eo, skipLocationChange: !1, replaceUrl: !1 },
                          }),
                          (0, Y.of)(p)
                        );
                      }
                      {
                        const Ne = '';
                        return (
                          this.events.next(new Gt(I.id, s.serializeUrl(p.extractedUrl), Ne, 1)),
                          (s.rawUrlTree = I.rawUrl),
                          I.resolve(null),
                          Ze.E
                        );
                      }
                    }),
                    (0, Ue.b)((I) => {
                      const H = new ht(
                        I.id,
                        this.urlSerializer.serialize(I.extractedUrl),
                        this.urlSerializer.serialize(I.urlAfterRedirects),
                        I.targetSnapshot,
                      );
                      this.events.next(H);
                    }),
                    (0, de.U)(
                      (I) => (p = { ...I, guards: $o(I.targetSnapshot, I.currentSnapshot, this.rootContexts) }),
                    ),
                    (function It(u, l) {
                      return (0, Ie.z)((s) => {
                        const {
                          targetSnapshot: p,
                          currentSnapshot: D,
                          guards: { canActivateChecks: M, canDeactivateChecks: I },
                        } = s;
                        return 0 === I.length && 0 === M.length
                          ? (0, Y.of)({ ...s, guardsResult: !0 })
                          : (function Wo(u, l, s, p) {
                              return (0, d.D)(u).pipe(
                                (0, Ie.z)((D) =>
                                  (function Yo(u, l, s, p, D) {
                                    const M = l && l.routeConfig ? l.routeConfig.canDeactivate : null;
                                    if (!M || 0 === M.length) return (0, Y.of)(!0);
                                    const I = M.map((H) => {
                                      const X = nn(l) ?? D,
                                        ke = _n(H, X);
                                      return en(
                                        (function xs(u) {
                                          return u && Co(u.canDeactivate);
                                        })(ke)
                                          ? ke.canDeactivate(u, l, s, p)
                                          : X.runInContext(() => ke(u, l, s, p)),
                                      ).pipe(Te());
                                    });
                                    return (0, Y.of)(I).pipe(fe());
                                  })(D.component, D.route, s, l, p),
                                ),
                                Te((D) => !0 !== D, !0),
                              );
                            })(I, p, D, u).pipe(
                              (0, Ie.z)((H) =>
                                H &&
                                (function ci(u) {
                                  return 'boolean' == typeof u;
                                })(H)
                                  ? (function di(u, l, s, p) {
                                      return (0, d.D)(l).pipe(
                                        (0, me.b)((D) =>
                                          oe(
                                            (function wo(u, l) {
                                              return null !== u && l && l(new so(u)), (0, Y.of)(!0);
                                            })(D.route.parent, p),
                                            (function gn(u, l) {
                                              return null !== u && l && l(new ir(u)), (0, Y.of)(!0);
                                            })(D.route, p),
                                            (function cr(u, l, s) {
                                              const p = l[l.length - 1],
                                                M = l
                                                  .slice(0, l.length - 1)
                                                  .reverse()
                                                  .map((I) =>
                                                    (function Kr(u) {
                                                      const l = u.routeConfig ? u.routeConfig.canActivateChild : null;
                                                      return l && 0 !== l.length ? { node: u, guards: l } : null;
                                                    })(I),
                                                  )
                                                  .filter((I) => null !== I)
                                                  .map((I) =>
                                                    se(() => {
                                                      const H = I.guards.map((X) => {
                                                        const ke = nn(I.node) ?? s,
                                                          Ne = _n(X, ke);
                                                        return en(
                                                          (function fa(u) {
                                                            return u && Co(u.canActivateChild);
                                                          })(Ne)
                                                            ? Ne.canActivateChild(p, u)
                                                            : ke.runInContext(() => Ne(p, u)),
                                                        ).pipe(Te());
                                                      });
                                                      return (0, Y.of)(H).pipe(fe());
                                                    }),
                                                  );
                                              return (0, Y.of)(M).pipe(fe());
                                            })(u, D.path, s),
                                            (function lr(u, l, s) {
                                              const p = l.routeConfig ? l.routeConfig.canActivate : null;
                                              if (!p || 0 === p.length) return (0, Y.of)(!0);
                                              const D = p.map((M) =>
                                                se(() => {
                                                  const I = nn(l) ?? s,
                                                    H = _n(M, I);
                                                  return en(
                                                    (function es(u) {
                                                      return u && Co(u.canActivate);
                                                    })(H)
                                                      ? H.canActivate(l, u)
                                                      : I.runInContext(() => H(l, u)),
                                                  ).pipe(Te());
                                                }),
                                              );
                                              return (0, Y.of)(D).pipe(fe());
                                            })(u, D.route, s),
                                          ),
                                        ),
                                        Te((D) => !0 !== D, !0),
                                      );
                                    })(p, M, u, l)
                                  : (0, Y.of)(H),
                              ),
                              (0, de.U)((H) => ({ ...s, guardsResult: H })),
                            );
                      });
                    })(this.environmentInjector, (I) => this.events.next(I)),
                    (0, Ue.b)((I) => {
                      if (((p.guardsResult = I.guardsResult), or(I.guardsResult))) throw Mi(0, I.guardsResult);
                      const H = new Br(
                        I.id,
                        this.urlSerializer.serialize(I.extractedUrl),
                        this.urlSerializer.serialize(I.urlAfterRedirects),
                        I.targetSnapshot,
                        !!I.guardsResult,
                      );
                      this.events.next(H);
                    }),
                    (0, dt.h)(
                      (I) => !!I.guardsResult || (s.restoreHistory(I), this.cancelNavigationTransition(I, '', 3), !1),
                    ),
                    xn((I) => {
                      if (I.guards.canActivateChecks.length)
                        return (0, Y.of)(I).pipe(
                          (0, Ue.b)((H) => {
                            const X = new an(
                              H.id,
                              this.urlSerializer.serialize(H.extractedUrl),
                              this.urlSerializer.serialize(H.urlAfterRedirects),
                              H.targetSnapshot,
                            );
                            this.events.next(X);
                          }),
                          (0, Q.w)((H) => {
                            let X = !1;
                            return (0, Y.of)(H).pipe(
                              (function Ft(u, l) {
                                return (0, Ie.z)((s) => {
                                  const {
                                    targetSnapshot: p,
                                    guards: { canActivateChecks: D },
                                  } = s;
                                  if (!D.length) return (0, Y.of)(s);
                                  let M = 0;
                                  return (0, d.D)(D).pipe(
                                    (0, me.b)((I) =>
                                      (function Ct(u, l, s, p) {
                                        const D = u.routeConfig,
                                          M = u._resolve;
                                        return (
                                          void 0 !== D?.title && !Tr(D) && (M[ln] = D.title),
                                          (function Jt(u, l, s, p) {
                                            const D = (function Lt(u) {
                                              return [...Object.keys(u), ...Object.getOwnPropertySymbols(u)];
                                            })(u);
                                            if (0 === D.length) return (0, Y.of)({});
                                            const M = {};
                                            return (0, d.D)(D).pipe(
                                              (0, Ie.z)((I) =>
                                                (function mn(u, l, s, p) {
                                                  const D = nn(l) ?? p,
                                                    M = _n(u, D);
                                                  return en(
                                                    M.resolve ? M.resolve(l, s) : D.runInContext(() => M(l, s)),
                                                  );
                                                })(u[I], l, s, p).pipe(
                                                  Te(),
                                                  (0, Ue.b)((H) => {
                                                    M[I] = H;
                                                  }),
                                                ),
                                              ),
                                              wt(1),
                                              (function vn(u) {
                                                return (0, de.U)(() => u);
                                              })(M),
                                              ft((I) => (Go(I) ? Ze.E : Xe(I))),
                                            );
                                          })(M, u, l, p).pipe(
                                            (0, de.U)(
                                              (I) => (
                                                (u._resolvedData = I),
                                                (u.data = Bn(u, s).resolve),
                                                D && Tr(D) && (u.data[ln] = D.title),
                                                null
                                              ),
                                            ),
                                          )
                                        );
                                      })(I.route, p, u, l),
                                    ),
                                    (0, Ue.b)(() => M++),
                                    wt(1),
                                    (0, Ie.z)((I) => (M === D.length ? (0, Y.of)(s) : Ze.E)),
                                  );
                                });
                              })(s.paramsInheritanceStrategy, this.environmentInjector),
                              (0, Ue.b)({
                                next: () => (X = !0),
                                complete: () => {
                                  X || (s.restoreHistory(H), this.cancelNavigationTransition(H, '', 2));
                                },
                              }),
                            );
                          }),
                          (0, Ue.b)((H) => {
                            const X = new on(
                              H.id,
                              this.urlSerializer.serialize(H.extractedUrl),
                              this.urlSerializer.serialize(H.urlAfterRedirects),
                              H.targetSnapshot,
                            );
                            this.events.next(X);
                          }),
                        );
                    }),
                    xn((I) => {
                      const H = (X) => {
                        const ke = [];
                        X.routeConfig?.loadComponent &&
                          !X.routeConfig._loadedComponent &&
                          ke.push(
                            this.configLoader.loadComponent(X.routeConfig).pipe(
                              (0, Ue.b)((Ne) => {
                                X.component = Ne;
                              }),
                              (0, de.U)(() => {}),
                            ),
                          );
                        for (const Ne of X.children) ke.push(...H(Ne));
                        return ke;
                      };
                      return (0, _e.a)(H(I.targetSnapshot.root)).pipe(W(), Se(1));
                    }),
                    xn(() => this.afterPreactivation()),
                    (0, de.U)((I) => {
                      const H = (function ai(u, l, s) {
                        const p = Wr(u, l._root, s ? s._root : void 0);
                        return new qn(p, l);
                      })(s.routeReuseStrategy, I.targetSnapshot, I.currentRouterState);
                      return (p = { ...I, targetRouterState: H });
                    }),
                    (0, Ue.b)((I) => {
                      (s.currentUrlTree = I.urlAfterRedirects),
                        (s.rawUrlTree = s.urlHandlingStrategy.merge(I.urlAfterRedirects, I.rawUrl)),
                        (s.routerState = I.targetRouterState),
                        'deferred' === s.urlUpdateStrategy &&
                          (I.extras.skipLocationChange || s.setBrowserUrl(s.rawUrlTree, I),
                          (s.browserUrlTree = I.urlAfterRedirects));
                    }),
                    ((u, l, s) =>
                      (0, de.U)((p) => (new Ho(l, p.targetRouterState, p.currentRouterState, s).activate(u), p)))(
                      this.rootContexts,
                      s.routeReuseStrategy,
                      (I) => this.events.next(I),
                    ),
                    (0, Ue.b)({
                      next: (I) => {
                        (D = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          (s.navigated = !0),
                          this.events.next(
                            new Xt(
                              I.id,
                              this.urlSerializer.serialize(I.extractedUrl),
                              this.urlSerializer.serialize(s.currentUrlTree),
                            ),
                          ),
                          s.titleStrategy?.updateTitle(I.targetRouterState.snapshot),
                          I.resolve(!0);
                      },
                      complete: () => {
                        D = !0;
                      },
                    }),
                    zt(() => {
                      D || M || this.cancelNavigationTransition(p, '', 1),
                        this.currentNavigation?.id === p.id && (this.currentNavigation = null);
                    }),
                    ft((I) => {
                      if (((M = !0), Si(I))) {
                        Vo(I) || ((s.navigated = !0), s.restoreHistory(p, !0));
                        const H = new Yn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          I.message,
                          I.cancellationCode,
                        );
                        if ((this.events.next(H), Vo(I))) {
                          const X = s.urlHandlingStrategy.merge(I.url, s.rawUrlTree),
                            ke = {
                              skipLocationChange: p.extras.skipLocationChange,
                              replaceUrl: 'eager' === s.urlUpdateStrategy || Ye(p.source),
                            };
                          s.scheduleNavigation(X, Ut, null, ke, {
                            resolve: p.resolve,
                            reject: p.reject,
                            promise: p.promise,
                          });
                        } else p.resolve(!1);
                      } else {
                        s.restoreHistory(p, !0);
                        const H = new jn(
                          p.id,
                          this.urlSerializer.serialize(p.extractedUrl),
                          I,
                          p.targetSnapshot ?? void 0,
                        );
                        this.events.next(H);
                        try {
                          p.resolve(s.errorHandler(I));
                        } catch (X) {
                          p.reject(X);
                        }
                      }
                      return Ze.E;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(s, p, D) {
            const M = new Yn(s.id, this.urlSerializer.serialize(s.extractedUrl), p, D);
            this.events.next(M), s.resolve(!1);
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      function Ye(u) {
        return u !== Ut;
      }
      let sn = (() => {
          class u {
            buildTitle(s) {
              let p,
                D = s.root;
              for (; void 0 !== D; )
                (p = this.getResolvedTitleForRoute(D) ?? p), (D = D.children.find((M) => M.outlet === Qe));
              return p;
            }
            getResolvedTitleForRoute(s) {
              return s.data[ln];
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({
              token: u,
              factory: function () {
                return (0, w.f3M)(er);
              },
              providedIn: 'root',
            })),
            u
          );
        })(),
        er = (() => {
          class u extends sn {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const p = this.buildTitle(s);
              void 0 !== p && this.title.setTitle(p);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(w.LFG(at.Dx));
            }),
            (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
            u
          );
        })(),
        Ar = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({
              token: u,
              factory: function () {
                return (0, w.f3M)(Io);
              },
              providedIn: 'root',
            })),
            u
          );
        })();
      class pi {
        shouldDetach(l) {
          return !1;
        }
        store(l, s) {}
        shouldAttach(l) {
          return !1;
        }
        retrieve(l) {
          return null;
        }
        shouldReuseRoute(l, s) {
          return l.routeConfig === s.routeConfig;
        }
      }
      let Io = (() => {
        class u extends pi {}
        return (
          (u.ɵfac = (function () {
            let l;
            return function (p) {
              return (l || (l = w.n5z(u)))(p || u);
            };
          })()),
          (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const gi = new w.OlP('', { providedIn: 'root', factory: () => ({}) });
      let yc = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({
              token: u,
              factory: function () {
                return (0, w.f3M)(pa);
              },
              providedIn: 'root',
            })),
            u
          );
        })(),
        pa = (() => {
          class u {
            shouldProcessUrl(s) {
              return !0;
            }
            extract(s) {
              return s;
            }
            merge(s, p) {
              return s;
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
            u
          );
        })();
      function fu(u) {
        throw u;
      }
      function kr(u, l, s) {
        return l.parse('/');
      }
      const hu = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
        is = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' };
      let fr = (() => {
          class u {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, w.f3M)(w.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, w.f3M)(gi, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || fu),
                (this.malformedUriErrorHandler = this.options.malformedUriErrorHandler || kr),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, w.f3M)(yc)),
                (this.routeReuseStrategy = (0, w.f3M)(Ar)),
                (this.urlCreationStrategy = (0, w.f3M)(lo)),
                (this.titleStrategy = (0, w.f3M)(sn)),
                (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
                (this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || 'emptyOnly'),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.canceledNavigationResolution = this.options.canceledNavigationResolution || 'replace'),
                (this.config = nr((0, w.f3M)(h, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, w.f3M)(Ee)),
                (this.urlSerializer = (0, w.f3M)(Zn)),
                (this.location = (0, w.f3M)(q.Ye)),
                (this.isNgZoneEnabled = (0, w.f3M)(w.R0b) instanceof w.R0b && w.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new Pt()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = zr(this.currentUrlTree, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (s) => {
                    (this.lastSuccessfulId = s.id), (this.currentPageId = s.targetPageId);
                  },
                  (s) => {
                    this.console.warn(`Unhandled Navigation Error: ${s}`);
                  },
                );
            }
            resetRootComponentType(s) {
              (this.routerState.root.component = s), (this.navigationTransitions.rootComponentType = s);
            }
            initialNavigation() {
              if ((this.setUpLocationChangeListener(), !this.navigationTransitions.hasRequestedNavigation)) {
                const s = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), Ut, s);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((s) => {
                  const p = 'popstate' === s.type ? 'popstate' : 'hashchange';
                  'popstate' === p &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(s.url, p, s.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(s, p, D) {
              const M = { replaceUrl: !0 },
                I = D?.navigationId ? D : null;
              if (D) {
                const X = { ...D };
                delete X.navigationId, delete X.ɵrouterPageId, 0 !== Object.keys(X).length && (M.state = X);
              }
              const H = this.parseUrl(s);
              this.scheduleNavigation(H, p, I, M);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(s) {
              (this.config = s.map(Rn)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(s, p = {}) {
              const { relativeTo: D, queryParams: M, fragment: I, queryParamsHandling: H, preserveFragment: X } = p,
                ke = X ? this.currentUrlTree.fragment : I;
              let Ne = null;
              switch (H) {
                case 'merge':
                  Ne = { ...this.currentUrlTree.queryParams, ...M };
                  break;
                case 'preserve':
                  Ne = this.currentUrlTree.queryParams;
                  break;
                default:
                  Ne = M || null;
              }
              return (
                null !== Ne && (Ne = this.removeEmptyProps(Ne)),
                this.urlCreationStrategy.createUrlTree(D, this.routerState, this.currentUrlTree, s, Ne, ke ?? null)
              );
            }
            navigateByUrl(s, p = { skipLocationChange: !1 }) {
              const D = or(s) ? s : this.parseUrl(s),
                M = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
              return this.scheduleNavigation(M, Ut, null, p);
            }
            navigate(s, p = { skipLocationChange: !1 }) {
              return (
                (function ga(u) {
                  for (let l = 0; l < u.length; l++) {
                    const s = u[l];
                    if (null == s) throw new w.vHH(4008, false);
                  }
                })(s),
                this.navigateByUrl(this.createUrlTree(s, p), p)
              );
            }
            serializeUrl(s) {
              return this.urlSerializer.serialize(s);
            }
            parseUrl(s) {
              let p;
              try {
                p = this.urlSerializer.parse(s);
              } catch (D) {
                p = this.malformedUriErrorHandler(D, this.urlSerializer, s);
              }
              return p;
            }
            isActive(s, p) {
              let D;
              if (((D = !0 === p ? { ...hu } : !1 === p ? { ...is } : p), or(s))) return ne(this.currentUrlTree, s, D);
              const M = this.parseUrl(s);
              return ne(this.currentUrlTree, M, D);
            }
            removeEmptyProps(s) {
              return Object.keys(s).reduce((p, D) => {
                const M = s[D];
                return null != M && (p[D] = M), p;
              }, {});
            }
            scheduleNavigation(s, p, D, M, I) {
              if (this.disposed) return Promise.resolve(!1);
              let H, X, ke, Ne;
              return (
                I
                  ? ((H = I.resolve), (X = I.reject), (ke = I.promise))
                  : (ke = new Promise((Bt, Sn) => {
                      (H = Bt), (X = Sn);
                    })),
                (Ne =
                  'computed' === this.canceledNavigationResolution
                    ? D && D.ɵrouterPageId
                      ? D.ɵrouterPageId
                      : M.replaceUrl || M.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1
                    : 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: Ne,
                  source: p,
                  restoredState: D,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: s,
                  extras: M,
                  resolve: H,
                  reject: X,
                  promise: ke,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                ke.catch((Bt) => Promise.reject(Bt))
              );
            }
            setBrowserUrl(s, p) {
              const D = this.urlSerializer.serialize(s),
                M = { ...p.extras.state, ...this.generateNgRouterState(p.id, p.targetPageId) };
              this.location.isCurrentPathEqualTo(D) || p.extras.replaceUrl
                ? this.location.replaceState(D, '', M)
                : this.location.go(D, '', M);
            }
            restoreHistory(s, p = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const D = this.currentPageId - s.targetPageId;
                ('popstate' !== s.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !== this.getCurrentNavigation()?.finalUrl) ||
                0 === D
                  ? this.currentUrlTree === this.getCurrentNavigation()?.finalUrl &&
                    0 === D &&
                    (this.resetState(s), (this.browserUrlTree = s.currentUrlTree), this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(D);
              } else
                'replace' === this.canceledNavigationResolution &&
                  (p && this.resetState(s), this.resetUrlToCurrentUrlTree());
            }
            resetState(s) {
              (this.routerState = s.currentRouterState),
                (this.currentUrlTree = s.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, s.rawUrl));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
              );
            }
            generateNgRouterState(s, p) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: s, ɵrouterPageId: p }
                : { navigationId: s };
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = w.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
            u
          );
        })(),
        mi = (() => {
          class u {
            constructor(s, p, D, M, I, H) {
              (this.router = s),
                (this.route = p),
                (this.tabIndexAttribute = D),
                (this.renderer = M),
                (this.el = I),
                (this.locationStrategy = H),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new pt.x());
              const X = I.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === X || 'area' === X),
                this.isAnchorElement
                  ? (this.subscription = s.events.subscribe((ke) => {
                      ke instanceof Xt && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, w.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, w.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, w.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(s) {
              null != this.tabIndexAttribute || this.isAnchorElement || this.applyAttributeValue('tabindex', s);
            }
            ngOnChanges(s) {
              this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
            }
            set routerLink(s) {
              null != s
                ? ((this.commands = Array.isArray(s) ? s : [s]), this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(s, p, D, M, I) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== s || p || D || M || I || ('string' == typeof this.target && '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
                  : null;
              const s =
                null === this.href ? null : (0, w.P3R)(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
              this.applyAttributeValue('href', s);
            }
            applyAttributeValue(s, p) {
              const D = this.renderer,
                M = this.el.nativeElement;
              null !== p ? D.setAttribute(M, s, p) : D.removeAttribute(M, s);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(w.Y36(fr), w.Y36(Xn), w.$8M('tabindex'), w.Y36(w.Qsj), w.Y36(w.SBq), w.Y36(q.S$));
            }),
            (u.ɵdir = w.lG2({
              type: u,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (s, p) {
                1 & s &&
                  w.NdJ('click', function (M) {
                    return p.onClick(M.button, M.ctrlKey, M.shiftKey, M.altKey, M.metaKey);
                  }),
                  2 & s && w.uIk('target', p.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [w.TTD],
            })),
            u
          );
        })();
      const Ls = new w.OlP(''),
        Xo = !1;
      function ya(u, ...l) {
        return (0, w.MR2)([
          { provide: h, multi: !0, useValue: u },
          Xo ? { provide: ss, useValue: !0 } : [],
          { provide: Xn, useFactory: Jo, deps: [fr] },
          { provide: w.tb, multi: !0, useFactory: as },
          l.map((s) => s.ɵproviders),
        ]);
      }
      function Jo(u) {
        return u.routerState.root;
      }
      const ss = new w.OlP('', { providedIn: 'root', factory: () => !1 });
      function as() {
        const u = (0, w.f3M)(w.zs3);
        return (l) => {
          const s = u.get(w.z2F);
          if (l !== s.components[0]) return;
          const p = u.get(fr),
            D = u.get(ei);
          1 === u.get(Ao) && p.initialNavigation(),
            u.get(ti, null, w.XFs.Optional)?.setUpPreloading(),
            u.get(Ls, null, w.XFs.Optional)?.init(),
            p.resetRootComponentType(s.componentTypes[0]),
            D.closed || (D.next(), D.unsubscribe());
        };
      }
      const ei = new w.OlP(Xo ? 'bootstrap done indicator' : '', { factory: () => new pt.x() }),
        Ao = new w.OlP(Xo ? 'initial navigation' : '', { providedIn: 'root', factory: () => 1 }),
        ti = new w.OlP(Xo ? 'router preloader' : '');
    },
  },
  (st) => {
    st((st.s = 2297));
  },
]);
