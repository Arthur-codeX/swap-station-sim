const initialState = {
  page: "About",
  btns: ["w3-blue", "", "", ""],
  minRange: 5,
  days: 5,
  simForm: {
    bikes: 200,
    swapStation: 12,
    workingHours: 10,
    StartingRange: 15,
    EndingRange: 40,
    MinRange: 5,
    MinDepletionRate: 0,
    MaxDepletionRate: 20,
    MaxRange: 40,
    chargingTime: 3,
  },
  sheets: {
    sheet1:
      "https://sheet.best/api/sheets/ddef4cd6-4eca-4989-8a8f-7d3cbc1817f1",
    sheet2:
      "https://sheet.best/api/sheets/7a92adbd-627a-4791-be74-b74412c0b18d",
    sheet3: "",
  },
  sheet1: false,
  daysSim: false,
  sim3Result: [],
  sheet1Data: [],
  sheet3Data: [],
};

const reducer = (state = initialState, action) => {
  const sideDash = {
    About: 0,
    Simulation: 1,
    Sheet1Page: 1,
    Sim2: 2,
    Sim2Table: 2,
  };
  switch (action.type) {
    case "SWITCH_PAGE":
      var a = newBtn(sideDash[action.value], state.btns);
      return { ...state, page: action.value, btns: a };
    case "SET_SHEET_1_DATA":
      return {
        ...state,
        sheet1: true,
        sheet1Data: action.value,
        simForm: action.inputs,
      };

    case "SET_DAYS":
      return { ...state, days: action.value };
    case "SET_SIM_2":
      return { ...state, sim3Result: action.value, daysSim: true };
    default:
      return state;
  }
};

function newBtn(no, btns) {
  var newArr = [];
  no = no || 0;
  for (let i = 0; i < btns.length; i++) {
    if (i === no) {
      newArr.push("w3-blue");
      continue;
    }
    newArr.push("");
  }
  return newArr;
}

export default reducer;
