export function RankingProcessor(rounds) {
  if (!rounds) return [];
  const lastRound = rounds[rounds.length - 1];
  let teams = {};
  lastRound["partidas"].forEach((match) => {
    teams[match["mandante"]] = {
      team: match["mandante"],
      ...match["pontuacao_geral_mandante"],
    };
    teams[match["visitante"]] = {
      team: match["visitante"],
      ...match["pontuacao_geral_visitante"],
    };
  });
  return Object.values(teams).sort((ta, tb) => {
    return (
      -1 *
      (ta["pontos_casa"] +
        ta["pontos_fora_casa"] -
        (tb["pontos_casa"] + tb["pontos_fora_casa"]))
    );
  });
}
