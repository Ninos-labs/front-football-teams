import React, { Fragment } from 'react';

import * as data from 'data/ven';
import * as utils from 'utils';
import * as config from 'config';
import * as components from 'components';
import { AreaChartItemsTypes } from 'components/charts/components/areaChart/areaChart.types';

const Ven = () => {
  const played = data.matches.filter(utils.byPlayed);
  const notPlayed = data.matches.filter(utils.byNotPLayed);
  const results = data.resultsAvg[0];
  const historicalMatches = [...data.matchWithMostGoalsFor, ...data.matchWithMostGoalsAgainst];
  const MatchesDataFormattedAvgByAt = utils.formatMatchesAvgByAt(data.matchesAvgByAt);

  return (
    <Fragment>
      <components.HeaderStyled>
        <components.Title team="Venezuela" />
        <components.MatchCounter title="Partidos" amount={results.matchesTotal} isTotal />
        <components.MatchCounter title="Victorias" amount={results.winAvg} />
        <components.MatchCounter title="Empates" amount={results.drawAvg} />
        <components.MatchCounter title="Derrotas" amount={results.lossAvg} />
        <components.MatchCounter title="No jugados" amount={results.notPlayedAvg} />
      </components.HeaderStyled>
      <components.ContentStyled>
        <aside>
          {notPlayed.length >= 1 && (
            <components.BoxTitleStyled>Próximos partidos</components.BoxTitleStyled>
          )}
          {notPlayed.map((match, index) => (
            <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
          ))}
          <components.BoxTitleStyled>Goleadas históricas</components.BoxTitleStyled>
          {historicalMatches.map((match, index) => (
            <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
          ))}
          <components.BoxTitleStyled>Últimos partidos</components.BoxTitleStyled>
          {played.map((match, index) => (
            <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
          ))}
        </aside>
        <main>
          <section>
            <header>
              <components.BoxTitleStyled>Promedio de Resultados por año</components.BoxTitleStyled>
            </header>
            <components.Charts.AreaChart
              data={data.resultsAvgByYear as []}
              datakey="years"
              items={config.areaChartItems as AreaChartItemsTypes}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ResultsAvgByYear
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
              <components.BoxTitleStyled>Promedio de Goles por año</components.BoxTitleStyled>
            </header>
            <components.Charts.AreaChart
              data={data.goalsAvgByYear as []}
              datakey="years"
              items={config.goalsAvgAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.GoalsAvgByYear
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
              <components.BoxTitleStyled>Promedio de resultados</components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={MatchesDataFormattedAvgByAt}
              xAxis="name"
              items={config.barChartItems}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ResultsAvg
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
              <components.BoxTitleStyled>Goles por equipo</components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={data.goalsByTeam as []}
              xAxis="versus"
              items={config.goalsByTeamAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ValuesForAndAgainst
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
              <components.BoxTitleStyled>
                Mayor y menor cantidad de goles contra un equipo en un partido
              </components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={data.goalsMaxAndMin as []}
              xAxis="versus"
              items={config.goalsMaxAndMinAreaChartItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ValuesForAndAgainst
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
              <components.BoxTitleStyled>Victorias por equipo</components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={data.winsByTeam as []}
              xAxis="versus"
              items={config.winsByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ByTeam
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
              <components.BoxTitleStyled>Empates por equipo</components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={data.drawsByTeam as []}
              xAxis="versus"
              items={config.drawsByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ByTeam
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
              <components.BoxTitleStyled>Derrotas por equipo</components.BoxTitleStyled>
            </header>
            <components.Charts.BarChart
              data={data.lossesByTeam as []}
              xAxis="versus"
              items={config.lossesByTeamItems as any}
              customTooltip={({ active, payload }: any) =>
                active && (
                  <components.Charts.Tooltip.ByTeam
                    versus={payload[0].payload.versus}
                    name={payload[0].name}
                    type={payload[0].payload['losses']}
                  />
                )
              }
            />
          </section>
        </main>
      </components.ContentStyled>
    </Fragment>
  );
};

export default Ven;
