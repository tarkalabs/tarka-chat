import { createNode, createTextNode } from "./utils";

export function highchartsPresent() {
  return typeof Highcharts != "undefined";
}

export function configHighcharts() {
  if (highchartsPresent()) {
    Highcharts.setOptions({
      credits: {
        enabled: false,
      },
      title: {
        style: {
          fontSize: "12px",
          fontWeight: "normal",
        },
      },
      plotOptions: {
        series: {
          dataLabels: {
            style: {
              fontSize: "10px",
              fontWeight: "normal",
            },
          },
        },
      },
    });
  }
}

export function createHighchartsNode(config) {
  if (highchartsPresent()) {
    let ele = createNode("high-chart-container");
    Highcharts.chart(ele, config);
    return ele;
  } else {
    return createTextNode(
      "Highcharts is not loaded to render charts. Please check if its script tag is included in the page.",
    );
  }
}
