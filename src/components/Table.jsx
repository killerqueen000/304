function Table({ numbers, descriptions }) {
  return (
    <table className="pvip-table">
      <thead>
        <tr>
          {numbers.map((num) => (
            <th key={num} className="cell-number">
              <div className="circle">{num}</div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {descriptions.map((text, index) => (
            <td key={index} className="cell-description">
              {text}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
