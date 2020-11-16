import React, { Fragment } from 'react';

import matches from 'data/ven/full-matches.json';
import resultsAvg from 'data/ven/results-avg.json';
import resultsAvgByYear from 'data/ven/results-avg-by-year.json';
import matchesAvgByAt from 'data/ven/matches-avg-by-at.json';
import matchWithMostGoalsFor from 'data/ven/most-goals-for.json';
import matchWithMostGoalsAgainst from 'data/ven/most-goals-against.json';

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
              items={areaChartItems as AreaChartItemsTypes}
            />
          </section>
        </main>
      </ContentStyled>
    </Fragment>
  );
};

export default Ven;
