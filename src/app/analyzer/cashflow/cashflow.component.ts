import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Filter } from 'src/app/filter/filter.component';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss']
})
export class CashflowComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  filter: Filter;

  resolution = 'Monthly';
  resolutions: String[] = [
    'Yearly',
    'Monthly',
    'Daily',
  ];

  diagramType: ChartType = "bar";
  diagramTypes: ChartType[] = ["bar", "line"];
  public ChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      },
      bar: {
        hoverBorderWidth: 2,
        hoverBorderColor: "#666",
      },
    },
    scales: {
      x: {
      },
      y: {
        ticks: {
          callback: label => {
            return label.toLocaleString('de-DE', { style: 'currency', currency: "EUR" });
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        callbacks: {
          label: context => {
            let label = context.dataset.label || '';
            let raw = <number>context.raw;
            return label + " " + raw.toLocaleString('de-DE', { style: 'currency', currency: "EUR" });
          },
        },
      },
    },
  };

  ChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'In', backgroundColor: "#3F3", hoverBackgroundColor: "#3F3", barPercentage: 1 },
      { data: [], label: 'Out', backgroundColor: "#F33", hoverBackgroundColor: "#F33", barPercentage: 1 }
    ]
  };

  monthNames: String[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(
  ) {
    let now = new Date();
    this.filter = { transactions: [], categories: [], startDate: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()), endDate: now };
  }


  updateChart() {
    if (this.filter === undefined) return;

    this.ChartData.labels = [];
    this.ChartData.datasets[0].data = [];
    this.ChartData.datasets[1].data = [];

    this.ChartData.datasets[1].hidden = this.diagramType == "line"

    if (this.resolution == "Yearly") {
      for (let year = this.filter.startDate.getFullYear(); year < this.filter.endDate.getFullYear(); year++) {
        this.ChartData.labels?.push(year.toString());
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.filter.transactions.filter(t => t.booking.getFullYear() == year)) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
            this.ChartData.datasets[0].data[this.ChartData.datasets[0].data.length - 1] += t.amount.valueFloat;
          }
        }
      }
    } else if (this.resolution == "Monthly") {
      for (let month = new Date(this.filter.startDate.getFullYear(), this.filter.startDate.getMonth()); month < this.filter.endDate; month.setMonth(month.getMonth() + 1)) {
        this.ChartData.labels?.push(this.monthNames[month.getMonth()] + " " + (this.filter.startDate.getFullYear() != this.filter.endDate.getFullYear() ? month.getFullYear() : ""))
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.filter.transactions.filter(t => { return t.booking.getFullYear() == month.getFullYear() && t.booking.getMonth() == month.getMonth() })) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
            this.ChartData.datasets[0].data[this.ChartData.datasets[0].data.length - 1] += t.amount.valueFloat;
          }
        }
      }
    } else if (this.resolution == "Daily") {
      for (let day = this.filter.startDate; day < this.filter.endDate; day.setDate(day.getDate() + 1)) {
        this.ChartData.labels?.push(day.toLocaleDateString())
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.filter.transactions.filter(t => { return t.booking.getFullYear() == day.getFullYear() && t.booking.getMonth() == day.getMonth() && t.booking.getDate() == day.getDate() })) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
            this.ChartData.datasets[0].data[this.ChartData.datasets[0].data.length - 1] += t.amount.valueFloat;
          }
        }
      }
    }
    this.chart?.update();
  }

}
