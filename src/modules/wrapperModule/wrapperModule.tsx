import React, { Fragment, useState } from 'react';
import Helmet from 'react-helmet';
import { FixedSizeList as List } from 'react-window';

import * as config from 'config';
import * as components from 'components';
import * as utils from 'utils';
import { AreaChartItemsTypes } from 'components/charts/components/areaChart/areaChart.types';

const WrapperModule = ({
  data,
  title,
  played,
  notPlayed,
  results,
  historicalMatches,
  MatchesDataFormattedAvgByAt
}: any) => {
  const [isOpenCountriesList, setIsOpenCountriesList] = useState(false);

  console.log(data.analizedAt);

  return (
    <Fragment>
      <Helmet>
        <title>{title} | Estadísticas de Fútbol</title>
      </Helmet>
      <components.HeaderStyled>
        <components.Title
          team={title}
          isOpenCountriesList={isOpenCountriesList}
          setIsOpenCountriesList={() => setIsOpenCountriesList(!isOpenCountriesList)}
        />
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
          {notPlayed.length >= 1 && (
            <List height={150} itemCount={notPlayed.length} itemSize={70} width="100%">
              {({ index, style }) => (
                <div key={index} style={style}>
                  <components.Match {...utils.addTypesToMatch(notPlayed[index] as any)} />
                </div>
              )}
            </List>
          )}
          <components.BoxTitleStyled>Goleadas históricas</components.BoxTitleStyled>
          <List height={150} itemCount={historicalMatches.length} itemSize={70} width="100%">
            {({ index, style }) => (
              <div key={index} style={style}>
                <components.Match {...utils.addTypesToMatch(historicalMatches[index] as any)} />
              </div>
            )}
          </List>
          <components.BoxTitleStyled>Últimos partidos</components.BoxTitleStyled>
          <List height={560} itemCount={played.length} itemSize={70} width="100%">
            {({ index, style }) => (
              <div key={index} style={style}>
                <components.Match {...utils.addTypesToMatch(played[index] as any)} />
              </div>
            )}
          </List>
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
          {data.analyzedAt && (
            <p>
              <small>Última actualización: {data.analyzedAt.date}</small>
            </p>
          )}
        </main>
      </components.ContentStyled>
    </Fragment>
  );
};

export default WrapperModule;
