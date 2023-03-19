'use strict';
(self.webpackChunkng_cert_nba = self.webpackChunkng_cert_nba || []).push([
  [376],
  {
    1376: (v, i, n) => {
      n.r(i), n.d(i, { GameResultsComponent: () => l });
      var c = n(195),
        o = n(6895),
        e = n(8256),
        m = n(3666);
      function _(a, s) {
        if (
          (1 & a && (e.TgZ(0, 'p')(1, 'strong'), e._uU(2), e.qZA(), e._uU(3), e.TgZ(4, 'strong'), e._uU(5), e.qZA()()),
          2 & a)
        ) {
          const t = s.$implicit;
          e.xp6(2),
            e.Oqu(t.home_team.abbreviation),
            e.xp6(1),
            e.AsE(' ', t.home_team_score, ' - ', t.visitor_team_score, ' '),
            e.xp6(2),
            e.Oqu(t.visitor_team.abbreviation);
        }
      }
      function u(a, s) {
        if (
          (1 & a &&
            (e.TgZ(0, 'div', 1)(1, 'h3'),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'h6'),
            e._uU(4),
            e.qZA(),
            e._UZ(5, 'hr'),
            e.TgZ(6, 'p'),
            e._uU(7),
            e.ALo(8, 'async'),
            e.qZA(),
            e.YNc(9, _, 6, 4, 'p', 2),
            e.ALo(10, 'async'),
            e.TgZ(11, 'button', 3),
            e._uU(12, '<< Back to all team stats'),
            e.qZA()()),
          2 & a)
        ) {
          const t = e.oxw();
          e.xp6(2),
            e.AsE('', t.team.full_name, ' [', t.team.abbreviation, ']'),
            e.xp6(2),
            e.hij('', t.team.conference, 'ern conference'),
            e.xp6(3),
            e.hij('Scores of past ', e.lcZ(8, 5, t.nbaService.numberOfTrackingDays$), ' days:'),
            e.xp6(2),
            e.Q6J('ngForOf', e.lcZ(10, 7, t.games$));
        }
      }
      let l = (() => {
        class a {
          constructor(t, r) {
            (this.activatedRoute = t),
              (this.nbaService = r),
              this.activatedRoute.paramMap.subscribe((p) => {
                (this.team = this.nbaService.getTrackedTeams().find((g) => g.abbreviation === p.get('teamAbbr'))),
                  this.team && (this.games$ = this.nbaService.getLastResults(this.team));
              });
          }
        }
        return (
          (a.ɵfac = function (t) {
            return new (t || a)(e.Y36(c.gz), e.Y36(m.J));
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-game-results']],
            standalone: !0,
            features: [e.jDz],
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'card', 4, 'ngIf'],
              [1, 'card'],
              [4, 'ngFor', 'ngForOf'],
              ['routerLink', '', 1, 'tertiary'],
            ],
            template: function (t, r) {
              1 & t && e.YNc(0, u, 13, 9, 'div', 0), 2 & t && e.Q6J('ngIf', r.team);
            },
            dependencies: [o.O5, o.ax, c.rH, o.Ov],
          })),
          a
        );
      })();
    },
  },
]);
