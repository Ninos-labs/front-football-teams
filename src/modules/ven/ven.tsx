import React, { Fragment } from 'react';

import matches from 'data/ven/full-matches.json';
import resultsAvg from 'data/ven/results-avg.json';
import goalsByTeam from 'data/ven/goals-by-team.json';
import goalsByTeamAvg from 'data/ven/goals-by-team-avg.json';
import goalsAvgByYear from 'data/ven/goals-avg-by-year.json';
import resultsAvgByYear from 'data/ven/results-avg-by-year.json';
import matchesAvgByAt from 'data/ven/matches-avg-by-at.json';
import matchWithMostGoalsFor from 'data/ven/most-goals-for.json';
import matchWithMostGoalsAgainst from 'data/ven/most-goals-against.json';

import winsByTeam from 'data/ven/wins-by-team.json';
import drawByTeam from 'data/ven/draws-by-team.json';
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
  AtTypes,
  ResultsTypes
} from 'components/match/components/finalResults/finalResults.types';
import { AreaChartItemsTypes } from 'components/charts/components/areaChart/areaChart.types';
import { byPlayed, byNotPLayed, formatMatchesAvgByAt } from 'utils';

const Ven = () => {
  const played = matches.filter(byPlayed);
  const notPlayed = matches.filter(byNotPLayed);
  const results = resultsAvg[0];
  const historicalMatches = [
    ...matchWithMostGoalsFor,
    ...matchWithMostGoalsAgainst
  ];

  const MatchesDataFormattedAvgByAt = formatMatchesAvgByAt(matchesAvgByAt);

  const addTypesToMatch = (match: any) => ({
    ...match,
    at: match.at as AtTypes,
    results: match.results as ResultsTypes
  });

  const barChartItems = [
    { name: 'Win', fill: '#6DD799' },
    { name: 'Draw', fill: '#0A1130' },
    { name: 'Loss', fill: '#D76D6D' }
  ];

  const areaChartItems = [
    { name: 'wins', fill: '#6DD799' },
    { name: 'draws', fill: '#0A1130' },
    { name: 'losses', fill: '#D76D6D' }
  ];

  const goalsAvgAreaChartItems = [
    { name: 'gf', fill: '#6DD799' },
    { name: 'ga', fill: '#0A1130' }
  ];

  const goalsByTeamAreaChartItems = [
    { name: 'gf_sum', fill: '#6DD799' },
    { name: 'ga_sum', fill: '#0A1130' }
  ];

  const goalsMaxAndMinAreaChartItems = [
    { name: 'gf_max', fill: '#6DD799' },
    { name: 'ga_max', fill: '#0A1130' }
  ];

  const winsByTeamItems = [{ name: 'wins', fill: '#6DD799' }];
  const drawsByTeamItems = [{ name: 'draws', fill: '#0A1130' }];
  const lossesByTeamItems = [{ name: 'losses', fill: '#D76D6D' }];

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
          <BoxTitleStyled>Próximos partidos</BoxTitleStyled>
          {notPlayed.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match)} />
          ))}
          <BoxTitleStyled>Goleadas históricas</BoxTitleStyled>
          {historicalMatches.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match)} />
          ))}
          <BoxTitleStyled>Últimos partidos</BoxTitleStyled>
          {played.map((match, index) => (
            <Match key={index} {...addTypesToMatch(match)} />
          ))}
        </aside>
        <main>
          <section>
            <header>
              <BoxTitleStyled>Promedio de resultados</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={MatchesDataFormattedAvgByAt}
              xAxis="name"
              items={barChartItems}
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Promedio de Resultados por año</BoxTitleStyled>
            </header>
            <Charts.AreaChart
              data={resultsAvgByYear as []}
              datakey="years"
              items={areaChartItems as AreaChartItemsTypes}
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
            />
            {goalsByTeamAvg.map((item, index) => (
              <div key={index}>
                <p>
                  {item.types}. Mean: {item.mean}. Median: {item.median}. Min:{' '}
                  {item.min}. Max: {item.max}. Variance: {item.variance}{' '}
                </p>
              </div>
            ))}
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
            />
          </section>
          <section>
            <header>
              <BoxTitleStyled>Empates por equipo</BoxTitleStyled>
            </header>
            <Charts.BarChart
              data={drawByTeam as []}
              xAxis="versus"
              items={drawsByTeamItems as any}
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
            />
          </section>
        </main>
      </ContentStyled>
    </Fragment>
  );
};

export default Ven;
