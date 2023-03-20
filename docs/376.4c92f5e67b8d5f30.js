'use strict';
(self.webpackChunkng_cert_nba = self.webpackChunkng_cert_nba || []).push([
  [376],
  {
    1376: (h, m, s) => {
      s.r(m), s.d(m, { GameResultsComponent: () => d });
      var _ = s(6895),
        i = s(195),
        r = s(7797),
        t = s(8256),
        l = s(3666);
      function u(e, a) {
        if (
          (1 & e && (t.TgZ(0, 'p')(1, 'strong'), t._uU(2), t.qZA(), t._uU(3), t.TgZ(4, 'strong'), t._uU(5), t.qZA()()),
          2 & e)
        ) {
          const n = a.$implicit;
          t.xp6(2),
            t.Oqu(n.home_team.abbreviation),
            t.xp6(1),
            t.AsE(' ', n.home_team_score, ' - ', n.visitor_team_score, ' '),
            t.xp6(2),
            t.Oqu(n.visitor_team.abbreviation);
        }
      }
      function p(e, a) {
        1 & e && t.GkF(0);
      }
      function g(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'div', 3)(1, 'h3'),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'h6'),
            t._uU(4),
            t.qZA(),
            t._UZ(5, 'hr'),
            t.TgZ(6, 'p'),
            t._uU(7),
            t.ALo(8, 'async'),
            t.qZA(),
            t.YNc(9, u, 6, 4, 'p', 4),
            t.ALo(10, 'async'),
            t.YNc(11, p, 1, 0, 'ng-container', 5),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(),
            o = t.MAs(4);
          t.xp6(2),
            t.AsE('', n.team.full_name, ' [', n.team.abbreviation, ']'),
            t.xp6(2),
            t.hij('', n.team.conference, 'ern conference'),
            t.xp6(3),
            t.hij('Scores of past ', t.lcZ(8, 6, n.nbaService.numberOfTrackingDays$), ' days:'),
            t.xp6(2),
            t.Q6J('ngForOf', t.lcZ(10, 8, n.games$)),
            t.xp6(2),
            t.Q6J('ngTemplateOutlet', o);
        }
      }
      function f(e, a) {
        1 & e && t.GkF(0);
      }
      function v(e, a) {
        if (
          (1 & e && (t.TgZ(0, 'p'), t._uU(1, 'Team not found.'), t.qZA(), t.YNc(2, f, 1, 0, 'ng-container', 5)), 2 & e)
        ) {
          t.oxw();
          const n = t.MAs(4);
          t.xp6(2), t.Q6J('ngTemplateOutlet', n);
        }
      }
      function T(e, a) {
        1 & e && (t.TgZ(0, 'button', 6), t._uU(1, '<< Back to all team stats'), t.qZA());
      }
      let d = (() => {
        class e {
          constructor(n, o) {
            (this.activatedRoute = n),
              (this.nbaService = o),
              this.activatedRoute.paramMap.subscribe((c) => {
                (this.team = this.nbaService.getTrackedTeams().find((O) => O.abbreviation === c.get(r.d))),
                  this.team && (this.games$ = this.nbaService.getLastResults(this.team));
              });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(i.gz), t.Y36(l.J));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['app-game-results']],
            standalone: !0,
            features: [t.jDz],
            decls: 5,
            vars: 2,
            consts: [
              ['class', 'card', 4, 'ngIf', 'ngIfElse'],
              ['teamNotFound', ''],
              ['backButton', ''],
              [1, 'card'],
              [4, 'ngFor', 'ngForOf'],
              [4, 'ngTemplateOutlet'],
              ['routerLink', '', 1, 'tertiary'],
            ],
            template: function (n, o) {
              if (
                (1 & n &&
                  (t.YNc(0, g, 12, 10, 'div', 0),
                  t.YNc(1, v, 3, 1, 'ng-template', null, 1, t.W1O),
                  t.YNc(3, T, 2, 0, 'ng-template', null, 2, t.W1O)),
                2 & n)
              ) {
                const c = t.MAs(2);
                t.Q6J('ngIf', o.team)('ngIfElse', c);
              }
            },
            dependencies: [_.O5, _.ax, i.rH, _.Ov, _.tP],
            changeDetection: 0,
          })),
          e
        );
      })();
    },
  },
]);
