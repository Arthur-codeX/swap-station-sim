const actSwitchPage = (page = "about") => {
  return { type: "SWITCH_PAGE", value: page };
};

const setSheet1Data = (data, inputs) => {
  return { type: "SET_SHEET_1_DATA", value: data, inputs: inputs };
};

const actSetDays = (days) => {
  return { type: "SET_DAYS", value: days };
};

const actDailySim = (arr) => {
  return { type: "SET_SIM_2", value: arr };
};

module.exports = { actSwitchPage, setSheet1Data, actSetDays, actDailySim };
