export type resultsAvgByYearTypes = {
  winColor: string;
  drawColor: string;
  lossColor: string;
  payload: {
    years: number;
    matches: number;
    wins: number;
    winsAvg: number;
    draws: number;
    drawsAvg: number;
    losses: number;
    lossesAvg: number;
  };
};
