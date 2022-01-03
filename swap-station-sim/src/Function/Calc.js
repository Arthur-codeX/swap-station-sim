const StartingRange = (inputs = {}) => {
  let k = [];
  // console.log(inputs.bikes);
  for (let i = 0; i < inputs.bikes; i++) {
    k.push(randomInt(inputs.StartingRange, inputs.EndingRange));
  }
  return k;
};

function randomInt(min, max) {
  return (
    Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min)
  );
}

function sheet1Calc(inputs = {}) {
  let newArr = [];
  let ranges = StartingRange(inputs);
  //console.log(ranges);
  for (let i = 0; i < ranges.length; i++) {
    let obj = { bike: i + 1, range: ranges[i] };
    newArr.push(obj);
  }
  return newArr;
}

function bikeChartVals(data) {
  let xAxis = [];
  let yAxis = [];

  for (let i = 0; i < data.length; i++) {
    xAxis.push(data[i].bike);
    yAxis.push(data[i].range);
  }

  return { xAxis: xAxis, yAxis: yAxis };
}

function simulation(inputs, ranges) {
  //console.log(inputs);
  var arr = [];
  let charging = [];
  let bikes = ranges;
  let batts = inputs.swapStation;

  for (let i = 0; i < inputs.workingHours; i++) {
    for (let j = 0; j < ranges.length; j++) {
      let dep = randomInt(inputs.MinDepletionRate, inputs.MaxDepletionRate);
      let newBikes = newBikeRange(
        j,
        bikes,
        dep,
        inputs.MinRange,
        inputs.MaxRange
      );
      if (newBikes.swapped) {
        batts = batts - 1;

        charging.push(i + parseInt(inputs.chargingTime));
      }
      let theCharge = chargingBatt(i, charging, batts);
      batts = theCharge.batt;
      charging = theCharge.charge;

      let obj = {
        hour: i + 1,
        bike: newBikes.bike.bike,
        startingRange: ranges[j].range,
        depletion: dep,
        bikeRange: newBikes.bike.range,
        swap: newBikes.swapped,
        swapStationBattery: batts,
        charging: charging.length,
        minRange: inputs.MinRange,
        minBatteryDepletionRate: inputs.MinDepletionRate,
        maxBatteryDepletionRate: inputs.MaxDepletionRate,
        finishedCharging: theCharge.added,
      };

      arr.push(obj);
      // console.log(obj);
      bikes = newBikes.bikes;
    }
  }
  return arr;
}

function newBikeRange(no, bikes, dep, MinRange, MaxRange) {
  let newBikes = [];
  let swapped = false;
  let found = false;
  let bike = {};
  for (let i = 0; i < bikes.length; i++) {
    if (i === no) {
      found = true;
      let range = bikes[i].range - dep;
      if (range < MinRange) {
        swapped = true;
        range = MaxRange;
      }
      bike = { bike: i + 1, range: range };
      newBikes.push(bike);
      continue;
    }
    newBikes.push(bikes[i]);
  }
  return { found: found, swapped: swapped, bikes: newBikes, bike: bike };
}

function chargingBatt(hour, charge, batts) {
  let inCharge = [];
  let batt = batts;
  // console.log("hour: ", hour, " Charge", charge, "Batteries", batt);
  let k = 0;

  for (let i = 0; i < charge.length; i++) {
    if (hour >= charge[i]) {
      k = k + 1;
      batt++;

      continue;
    }
    inCharge.push(charge[i]);
  }
  // console.log("!!!! Battery Added :", k);
  // console.log({ charge: inCharge, batt: batt });
  return { charge: inCharge, batt: batt, added: k };
}

export { StartingRange, randomInt, sheet1Calc, bikeChartVals, simulation };
