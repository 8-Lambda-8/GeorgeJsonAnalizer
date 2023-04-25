import { Component, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { Filter } from "src/app/filter/filter.component";
import { getColorArray, getLabelArray } from "src/app/models/category";

@Component({
  selector: "app-category-cake",
  templateUrl: "./category-cake.component.html",
  styleUrls: ["./category-cake.component.scss"],
})
export class CategoryCakeComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  filter: Filter;

  diagramType: ChartType = "doughnut";

  public ChartOptions: ChartConfiguration["options"] = {
    aspectRatio: 1,
    layout: { padding: 15 },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const raw = <number>context.raw;
            return (
              label +
              " " +
              raw.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })
            );
          },
        },
      },
    },
  };

  ChartData: ChartData<"doughnut"> = {
    labels: getLabelArray(),
    datasets: [
      {
        data: new Array<number>(61).fill(0),
        backgroundColor: getColorArray(),
        hoverBackgroundColor: getColorArray(),
        borderWidth: 0,
        hoverBorderWidth: 3,
        hoverBorderColor: "black",
        hoverOffset: 20,
      },
    ],
  };

  constructor() {
    const now = new Date();
    this.filter = {
      transactions: [],
      categories: [],
      startDate: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
      endDate: now,
      direction: "out",
    };
  }

  updateChart() {
    if (this.filter === undefined) return;

    this.ChartData.datasets[0].data.fill(0);

    for (const t of this.filter.transactions) {
      if (t.categories) {
        this.ChartData.datasets[0].data[Math.floor(t.categories.categoryId)] +=
          t.amount.valueFloat;
      } else this.ChartData.datasets[0].data[60] += t.amount.valueFloat;
    }

    this.chart?.update();
  }
}
