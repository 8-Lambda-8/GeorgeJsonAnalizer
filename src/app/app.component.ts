import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "GeorgeJsonAnalyzer";

  constructor(matIconRegistry: MatIconRegistry, domSanitzer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      "code_json",
      domSanitzer.bypassSecurityTrustResourceUrl("../assets/code_json.svg")
    );
  }
}
