import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss']
})
export class CashflowComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  startDate: Date = new Date;
  endDate: Date = new Date;

  selectedPreset: String = 'This Year';
  dateRanges: String[] = [
    'Custom',
    'This Year', 'Last Year', '1 Year',
    '2 Years', '3 Years',
    'This Month', 'Last Month', '1 Month',
    '3 Months', '6 Months', '9 Months',
    'All'
  ];

  resolution = 'Monthly';
  resolutions: String[] = [
    'Yearly',
    'Monthly',
    'Daily',
  ];

  diagramType: ChartType = "bar";
  diagramTypes: ChartType[] = ["bar", "line"];

  transactions: Transaction[] = [];

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
    private transactionservice: TransactionService
  ) {
    this.selectChange('This Year');
  }

  ngOnInit(): void {
  }

  updateTransactions() {
    console.log(this.startDate, this.endDate)
    this.transactions = this.transactionservice.getFiltered([], this.startDate, this.endDate);

    this.ChartData.labels = [];
    this.ChartData.datasets[0].data = [];
    this.ChartData.datasets[1].data = [];

    this.ChartData.datasets[1].hidden = this.diagramType == "line"

    //TODO: Implement Line stuff
    if (this.resolution == "Yearly") {
      for (let year = this.startDate.getFullYear(); year < this.endDate.getFullYear(); year++) {
        this.ChartData.labels?.push(year.toString());
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.transactions.filter(t => t.booking.getFullYear() == year)) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
          }
        }
      }
    } else if (this.resolution == "Monthly") {
      for (let month = new Date(this.startDate.getFullYear(), this.startDate.getMonth()); month < this.endDate; month.setMonth(month.getMonth() + 1)) {
        this.ChartData.labels?.push(this.monthNames[month.getMonth()] + " " + (this.startDate.getFullYear() != this.endDate.getFullYear() ? month.getFullYear() : ""))
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.transactions.filter(t => { return t.booking.getFullYear() == month.getFullYear() && t.booking.getMonth() == month.getMonth() })) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
          }
        }
      }
    } else if (this.resolution == "Daily") {
      for (let day = this.startDate; day < this.endDate; day.setDate(day.getDate() + 1)) {
        this.ChartData.labels?.push(day.toLocaleDateString())
        this.ChartData.datasets[0].data.push(0);
        this.ChartData.datasets[1].data.push(0);

        for (let t of this.transactions.filter(t => { return t.booking.getFullYear() == day.getFullYear() && t.booking.getMonth() == day.getMonth() && t.booking.getDate() == day.getDate() })) {
          if (this.diagramType == "bar") { //do bar stuff
            this.ChartData.datasets[t.amount.valueFloat > 0 ? 0 : 1].data[this.ChartData.datasets[0].data.length - 1] += Math.abs(t.amount.valueFloat)
          } else if (this.diagramType == "line") { //do line stuff
          }
        }
      }
    }
    console.log(this.ChartData)

    this.chart?.update()
  }

  selectChange(value: string) {
    switch (value) {
      case 'This Year':
        this.startDate = new Date(new Date().getFullYear(), 0, 1);
        this.endDate = new Date(new Date().getFullYear() + 1, 0, 0);
        break;
      case 'Last Year':
        this.startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        this.endDate = new Date(new Date().getFullYear(), 0, 0);
        break;
      case '1 Year':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 1);
        break;
      case '2 Years':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 2);
        break;
      case '3 Years':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 3);
        break;
      case 'This Month':
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        break;
      case 'Last Month':
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        this.endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        break;
      case '1 Month':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 1);
        break;
      case '3 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 4);
        break;
      case '6 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 7);
        break;
      case '9 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 10);
        break;
      case 'All':
        this.startDate = this.transactionservice.getEarlyestDate();
        this.endDate = new Date();
        break;
      default:
        break;
    }
    this.updateTransactions()
  }

}
