export default function resultTable({ data }) {
  return data.length === 0 ? (
    <p>No data</p>
  ) : (
    <table id="resultTable">
      <thead>
        <tr>
          <th>Year</th>
          <th>Starting Amount</th>
          <th>Annual Investment</th>
          <th>Total Invested</th>
          <th>Interest</th>
          <th>Ending Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <tr key={index}>
            <td>{d.year}</td>
            <td>{d.lastEndingAmount}</td>
            <td>{d.annualInvestment}</td>
            <td>{d.totalInvest}</td>
            <td>{d.interest}</td>
            <td>{d.endingAmout}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
