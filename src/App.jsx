import { useState } from "react";
import Filter from "./components/Filter";
import ResultTable from "./components/ResultTable";
import "./App.css";

function calculateMoney(filter) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    filter;
  const result = [];
  let lastEndingAmount = initialInvestment;
  for (let i = 0; i < duration; i++) {
    const totalInvest = lastEndingAmount + annualInvestment;
    const endingAmout =
      Math.round((totalInvest + (totalInvest * expectedReturn) / 100) * 100) /
      100;
    result.push({
      year: i + 1,
      lastEndingAmount,
      annualInvestment,
      totalInvest: lastEndingAmount + annualInvestment,
      interest: expectedReturn,
      endingAmout,
    });
    lastEndingAmount = endingAmout;
  }

  return result;
}
function App() {
  let [data, setData] = useState([]);
  function calculateInvestment(filter) {
    setData(calculateMoney(filter));
  }
  return (
    <>
      <div className="container">
        <h2>Investment Calculator</h2>
        <Filter calculateInvestment={calculateInvestment} />
        <ResultTable data={data} />
      </div>
    </>
  );
}

export default App;
