import React from "react";
import useSWR from "swr";
import { RankingProcessor } from "./RankingProcessor";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Table({ year }) {
  const { data, error } = useSWR("http://localhost:3001/2003", fetcher);

  let ranked = RankingProcessor(data);

  console.log({ ranked });

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th></th>
          <th>Time</th>
          <th>Pontos</th>
          <th>Vitórias</th>
          <th>Empates</th>
          <th>Derrotas</th>
          <th>Gols Pró</th>
          <th>Gols Contra</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        {ranked.map((team, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{team["team"]}</td>
            <td>{team["pontos_casa"] + team["pontos_fora_casa"]}</td>
            <td>{team["total_vitorias"]}</td>
            <td>{team["total_empates"]}</td>
            <td>{team["total_derrotas"]}</td>
            <td>{team["total_gols_marcados"]}</td>
            <td>{team["total_gols_sofridos"]}</td>
            <td>{team["total_gols_marcados"] - team["total_gols_sofridos"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
