import { useState } from "react";
import Table from "./Table";

export default function App() {
  console.log("Teste no console do navegador");

  const [year, setYear] = useState(2003);

  const years = Array.from({ length: 13 }, (_, i) => i + 2003);

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React - Campeonato Brasileiro
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <Table year={year} />
        </div>
      </main>
    </div>
  );
}
