import { Component, OnInit } from "@angular/core";
import { Filter } from "../filter/filter.component";

@Component({
  selector: "app-filtered-list",
  templateUrl: "./filtered-list.component.html",
  styleUrls: ["./filtered-list.component.scss"],
})
export class FilteredListComponent implements OnInit {
  filter: Filter;

  constructor() {
    const now = new Date();
    this.filter = {
      transactions: [],
      categories: [],
      startDate: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
      endDate: now,
    };
  }

  ngOnInit(): void {}
}
