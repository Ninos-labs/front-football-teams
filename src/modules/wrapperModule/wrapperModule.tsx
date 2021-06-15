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
  const notPLayedOrdered = notPlayed.slice(0).reverse();
  const [isOpenCountriesList, setIsOpenCountriesList] = useState(false);
  const [popup, setPopup] = useState({ isOpen: false, type: '' });

  return (
    <Fragment>
      <Helmet>
        <title>{title} | Estadísticas de Fútbol</title>
      </Helmet>
      {popup.isOpen && (
        <components.Popup>
          <header>
            <components.BoxTitleStyled>
              {popup.type === 'upcoming' ? 'Próximos partidos' : 'Todos los partidos'}
            </components.BoxTitleStyled>
            <components.StyledButton onClick={() => setPopup({ isOpen: false, type: '' })}>
              ✖
            </components.StyledButton>
          </header>
          <div>
            {popup.type === 'upcoming' && (
              <List height={380} itemCount={notPLayedOrdered.length} itemSize={70} width="100%">
                {({ index, style }) => (
                  <div key={index} style={style}>
                    <components.Match {...utils.addTypesToMatch(notPLayedOrdered[index] as any)} />
                  </div>
                )}
              </List>
            )}
            {popup.type === 'last' && (
              <List height={380} itemCount={played.length} itemSize={70} width="100%">
                {({ index, style }) => (
                  <div key={index} style={style}>
                    <components.Match {...utils.addTypesToMatch(played[index] as any)} />
                  </div>
                )}
              </List>
            )}
          </div>
        </components.Popup>
      )}
      <components.ContentStyled>
        <aside>
          <header>
            <components.Title
              team={title}
              isOpenCountriesList={isOpenCountriesList}
              setIsOpenCountriesList={() => setIsOpenCountriesList(!isOpenCountriesList)}
            />
          </header>
          <components.MatchCounter title="Partidos" amount={results.matchesTotal} isTotal />
          <components.MatchCounter title="Victorias" amount={results.winAvg} />
          <components.MatchCounter title="Empates" amount={results.drawAvg} />
          <components.MatchCounter title="Derrotas" amount={results.lossAvg} />
          <components.MatchCounter title="No jugados" amount={results.notPlayedAvg} />
        </aside>
        <main>
          <div>
            <section>
              <header>
                <components.BoxTitleStyled>
                  Promedio de Resultados por año
                </components.BoxTitleStyled>
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
          </div>
          <div>
            <section>
              {notPLayedOrdered.length >= 1 && (
                <components.BoxTitleStyled>Próximos partidos</components.BoxTitleStyled>
              )}
              {notPLayedOrdered.length >= 1 &&
                notPLayedOrdered
                  .slice(0, 2)
                  .map((match: any, index: number) => (
                    <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
                  ))}
              {notPLayedOrdered.length > 2 && (
                <components.StyledButton
                  onClick={() => setPopup({ isOpen: true, type: 'upcoming' })}
                >
                  Ver Todos →
                </components.StyledButton>
              )}
            </section>
            <section>
              <components.BoxTitleStyled>Goleadas históricas</components.BoxTitleStyled>
              {historicalMatches.length >= 1 &&
                historicalMatches.map((match: any, index: number) => (
                  <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
                ))}
            </section>
            <section>
              <components.BoxTitleStyled>Últimos partidos</components.BoxTitleStyled>
              {played.length >= 1 &&
                played
                  .slice(0, 4)
                  .map((match: any, index: number) => (
                    <components.Match key={index} {...utils.addTypesToMatch(match as any)} />
                  ))}
              {played.length > 4 && (
                <components.StyledButton onClick={() => setPopup({ isOpen: true, type: 'last' })}>
                  Ver Todos →
                </components.StyledButton>
              )}
            </section>
          </div>
        </main>
      </components.ContentStyled>
      <footer>
        {data.analyzedAt && (
          <p>
            <small>Última actualización: {data.analyzedAt.date}</small>
          </p>
        )}
      </footer>
    </Fragment>
  );
};

export default WrapperModule;
