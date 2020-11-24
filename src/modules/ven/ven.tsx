import React, { Fragment } from 'react';

import matches from 'data/ven/full-matches.json';
import resultsAvg from 'data/ven/results-avg.json';
import goalsByTeam from 'data/ven/goals-by-team.json';
import goalsAvgByYear from 'data/ven/goals-avg-by-year.json';
import resultsAvgByYear from 'data/ven/results-avg-by-year.json';
import matchesAvgByAt from 'data/ven/matches-avg-by-at.json';
import matchWithMostGoalsFor from 'data/ven/most-goals-for.json';
import matchWithMostGoalsAgainst from 'data/ven/most-goals-against.json';
import winsByTeam from 'data/ven/wins-by-team.json';
import drawsByTeam from 'data/ven/draws-by-team.json';
import lossesByTeam from 'data/ven/losses-by-team.json';
import goalsMaxAndMin from 'data/ven/goals-max-min.json';

import {
  Match,
  Title,
  Charts,
  HeaderStyled,
  MatchCounter,
  ContentStyled,
  BoxTitleStyled
} from 'components';
import {
  barChartItems,
  areaChartItems,
  goalsAvgAreaChartItems,
  goalsByTeamAreaChartItems,
  goalsMaxAndMinAreaChartItems,
  winsByTeamItems,
  drawsByTeamItems,
  lossesByTeamItems
} from 'config';
import { AreaChartItemsTypes } from 'components/charts/components/areaChart/areaChart.types';
import { byPlayed, byNotPLayed, formatMatchesAvgByAt, addTypesToMatch } from 'utils';

const Ven = () => {
  const played = matches.filter(byPlayed);
  const notPlayed = matches.filter(byNotPLayed);
  const results = resultsAvg[0];
  const historicalMatches = [...matchWithMostGoalsFor, ...matchWithMostGoalsAgainst];
  const MatchesDataFormattedAvgByAt = formatMatchesAvgByAt(matchesAvgByAt);

  return (
    <Fragment>
      <HeaderStyled>
        <Title team="Venezuela" />
        <MatchCounter title="Partidos" amount={results.matchesTotal} isTotal />
        <MatchCounter title="Victorias" amount={results.winAvg} />
        <MatchCounter title="Empates" amount={results.drawAvg} />
        <MatchCounter title="Derrotas" amount={results.lossAvg} />
        <MatchCounter title="No jugados" amount={results.notPlayedAvg} />
      </HeaderStyled>
      <ContentStyled>
        <aside>
          {notPlayed.length >= 1 && <BoxTitleStyled>Próximos partidos</BoxTitleStyled>}
          {notPlayed.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match as any)} />
          ))}
          <BoxTitleStyled>Goleadas históricas</BoxTitleStyled>
          {historicalMatches.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match as any)} />
          ))}
          <BoxTitleStyled>Últimos partidos</BoxTitleStyled>
          {played.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match as any)} />
          ))}
        </aside>
        <main>
          <section>
            <header>
              <BoxTitleStyled>Promedio de Resultados por año</BoxTitleStyled>
            </header>
            <Charts.AreaChart
              data={resultsAvgByYear as []}
              datakey="years"
              items={areaChartItems as AreaChartItemsTypes}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ResultsAvgByYear
                    payload={payload[0].payload}
                    winColor={payload[0].fill}
                    drawColor={payload[1].fill}
                    lossColor={payload[2].fill}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Promedio de Goles por año</BoxTitleStyled>
            </header>
            <Charts.AreaChart
              data={goalsAvgByYear as []}
              datakey="years"
              items={goalsAvgAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.GoalsAvgByYear
                    payload={payload[0].payload}
                    gfColor={payload[0].fill}
                    gaColor={payload[1].fill}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Promedio de resultados</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={MatchesDataFormattedAvgByAt}
              xAxis="name"
              items={barChartItems}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ResultsAvg
                    name={payload[0].payload.name}
                    win={payload[0].payload.Win}
                    draw={payload[0].payload.Draw}
                    loss={payload[0].payload.Loss}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Goles por equipo</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={goalsByTeam as []}
              xAxis="versus"
              items={goalsByTeamAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ValuesForAndAgainst
                    versus={payload[0].payload.versus}
                    valueFor={payload[0].payload.gf_sum}
                    valueAgainst={payload[0].payload.ga_sum}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>
                Mayor y menor cantidad de goles contra un equipo en un partido
              </BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={goalsMaxAndMin as []}
              xAxis="versus"
              items={goalsMaxAndMinAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ValuesForAndAgainst
                    versus={payload[0].payload.versus}
                    valueFor={payload[0].payload.gf_max}
                    valueAgainst={payload[0].payload.ga_max}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Victorias por equipo</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={winsByTeam as []}
              xAxis="versus"
              items={winsByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ByTeam
                    versus={payload[0].payload.versus}
                    name={payload[0].name}
                    type={payload[0].payload['wins']}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Empates por equipo</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={drawsByTeam as []}
              xAxis="versus"
              items={drawsByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ByTeam
                    versus={payload[0].payload.versus}
                    name={payload[0].name}
                    type={payload[0].payload['draws']}
                  />
                )
              }
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Derrotas por equipo</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={lossesByTeam as []}
              xAxis="versus"
              items={lossesByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <Charts.Tooltip.ByTeam
                    versus={payload[0].payload.versus}
                    name={payload[0].name}
                    type={payload[0].payload['losses']}
                  />
                )
              }
            />
          </section>
        </main>
      </ContentStyled>
    </Fragment>
  );
};

export default Ven;
