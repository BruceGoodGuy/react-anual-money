import { useState } from "react"

const initialFilter = {initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0}
export default function Filter({calculateInvestment}) {
    const [filter, setFilter] = useState(initialFilter);
    function updateFilter(e) {
        const {name, value} = e.target;
        setFilter({...filter, [name]: Number(value)});
    }
    return <>
        <label htmlFor="initialInvestment">Initial investment</label>
        <input
          type="number"
          id="initialInvestment"
          placeholder="Enter initial investment amount"
          name="initialInvestment"
          value={filter.initialInvestment}
          onChange={updateFilter}
        />
        <label htmlFor="annualInvestment">Annual investment</label>
        <input
          type="number"
          id="annualInvestment"
          placeholder="Enter annual investment amount"
          name="annualInvestment"
          value={filter.annualInvestment}
          onChange={updateFilter}
        />
        <label htmlFor="expectedReturn">Expected return (%):</label>
        <input
          type="number"
          id="expectedReturn"
          placeholder="Enter expected annual return"
          name="expectedReturn"
          value={filter.expectedReturn}
          onChange={updateFilter}
        />
        <label htmlFor="duration">Duration in years (year):</label>
        <input type="number" id="duration" placeholder="Enter investment duration (years)"
            name="duration" value={filter.duration} onChange={updateFilter} />
        <button onClick={() => calculateInvestment(filter)}>Calculate</button>
    </>
}