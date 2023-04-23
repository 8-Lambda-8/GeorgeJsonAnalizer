import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FilteredListComponent } from "./filtered-list/filtered-list.component";
import { AnalyzerComponent } from "./analyzer/analyzer.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "transactionList", component: FilteredListComponent },
  { path: "analyzer", component: AnalyzerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
