const Sim2TableData = ({ doc }) => {
  return (
    <tr>
      <td>{doc.day}</td>
      <td>{doc.hour}</td>
      <td>{doc.startingRange}</td>
      <td>{doc.depletion}</td>
      <td>{doc.bikeRange}</td>
      <td>{doc.swap}</td>
      <td>{doc.swapStationBattery}</td>
      <td>{doc.charging}</td>
      <td>{doc.finishedCharging}</td>
    </tr>
  );
};

export { Sim2TableData };
