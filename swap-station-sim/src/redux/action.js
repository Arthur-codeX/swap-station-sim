const actSwitchPage = (page = "about") => {
  return { type: "SWITCH_PAGE", value: page };
};

const setSheet1Data = (data, inputs) => {
  return { type: "SET_SHEET_1_DATA", value: data, inputs: inputs };
};

module.exports = { actSwitchPage, setSheet1Data };
