function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["I1"]["value"] != 0 &&
    values["IND1"]["value"] != 0 &&

    values["G1"]["fire"] != 0 &&

    values["G2"]["fire"] != 0
  ) {
    const wave_forms = generategraphfinal();
    console.log(wave_forms);
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "850px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "VINP",
          marker: {
            color: "Orange",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse1";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse1",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "FP1  ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Firing Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse2";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse2",
      [
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "FP4  ",
          marker: {
            color: "Red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM6"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Firing Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "VL   ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM7"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "IL   ",
          marker: {
            color: "#ab49dd",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" +values["AC2"]["name"].toUpperCase()+ "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1]) + (((1/10)*parseInt(wave_forms[0][1])))+1,
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "thy1_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy1_voltage",
      [
        {
          x: wave_forms[6][1],
          y: wave_forms[6][0],
          mode: "lines",
          name: "VT1  ",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "VT2",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" +values["VM1"]["name"].toUpperCase()+"/"+ values["VM8"]["name"].toUpperCase()+"</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "thy2_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy2_voltage",
      [
        {
          x: wave_forms[7][1],
          y: wave_forms[7][0],
          mode: "lines",
          name: "VT3  ",
          marker: {
            color: "#23c66b",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "VT4",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>"+values["VM2"]["name"].toUpperCase()+"/"+values["VM5"]["name"].toUpperCase() +"</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + 10),
            parseInt(wave_forms[0][0]) + 10,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}

function generategraphfinal() {
  const sineamplitude = values["AC1"]["volt"];
  const freq = values["AC1"]["freq"];
  const sta1 = values["G1"]["freq"];
  const end1 = values["G1"]["fire"];
  const sta2 = values["G3"]["freq"];
  const end2 = values["G3"]["fire"];
  const loadResistance = values["R1"]["value"];
  const inductor = values["IND1"]["value"];
  var timep = 1 / freq;
  var timp = timep;
  var sine_wave,
    flag = false;
  var starting1 = (timep / 360) * sta1;
  var ending1 = (timep / 360) * end1;
  var starting2 = (timep / 360) * sta2;
  var ending2 = (timep / 360) * end2;
  var xval = [],
    input_voltage = [],
    load_voltage = [],
    thy1_voltage = [],
    thy2_voltage = [],
    current = [],
    gate_pulse1 = [],
    gate_pulse2 = [];

  for (let x = 0; x <= 0.06; x += 0.00001) {
    sine_wave = sineamplitude * Math.sin(2 * Math.PI * freq * x);
    input_voltage.push(sine_wave);
    xval.push(x);
    if (sine_wave > 0) {
      if (x >= starting1) {
        load_voltage.push(sine_wave);
        thy1_voltage.push(0);
        thy2_voltage.push(-1 * sine_wave);
        current.push(sine_wave / loadResistance);
      } else {
        load_voltage.push(0);
        current.push(0);
        thy1_voltage.push(sine_wave / 2);
        thy2_voltage.push(-1 * (sine_wave / 2));
      }
    } else {
      if (x <= ending2) {
        if (x >= starting2) {
          load_voltage.push(-1 * sine_wave);
          thy2_voltage.push(0);
          thy1_voltage.push(sine_wave);
          current.push((-1 * sine_wave) / loadResistance);
          flag = true;
        } else {
          load_voltage.push(0);
          current.push(0);
          thy2_voltage.push(-1 * (sine_wave / 2));
          thy1_voltage.push(sine_wave / 2);
        }
      } else if (flag) {
        load_voltage.push(-1 * sine_wave);
        thy2_voltage.push(0);
        thy1_voltage.push(sine_wave);
        current.push((-1 * sine_wave) / loadResistance);
      } else {
        load_voltage.push(0);
        current.push(0);
        thy2_voltage.push(-1 * (sine_wave / 2));
        thy1_voltage.push(sine_wave / 2);
      }
    }

    if (starting1 <= x && x <= ending1) {
      gate_pulse1.push(1);
    } else {
      gate_pulse1.push(0);
    }

    if (starting2 <= x && x <= ending2) {
      gate_pulse2.push(1);
    } else {
      gate_pulse2.push(0);
    }

    if (x >= timep) {
      starting1 = starting1 + timp;
      ending1 = ending1 + timp;
      starting2 = starting2 + timp;
      ending2 = ending2 + timp;
      timep = timep + timp;
      flag = false;
    }
  }
  var vavg=((2*sineamplitude)/(Math.PI))*((Math.cos(sta1*(Math.PI/180))));
  var iavg=vavg/(loadResistance*inductor*1000);
  var vrms=(sineamplitude/(Math.sqrt(2*Math.PI)));
  iavg =iavg*100;
  vavg=vavg*100;
  vrms=vrms*100;
  vavg=parseInt(vavg);
  iavg=parseInt(iavg);
  vrms=parseInt(vrms);
  values['vavg']=(vavg/100);
  values['iavg']=(iavg/100);
  values['vrms']=(vrms/100);

  return [
    [sineamplitude, sineamplitude / loadResistance],
    [input_voltage, xval],
    [gate_pulse1, xval],
    [gate_pulse2, xval],
    [load_voltage, xval],
    [current, xval],
    [thy1_voltage, xval],
    [thy2_voltage, xval],
  ];
}
