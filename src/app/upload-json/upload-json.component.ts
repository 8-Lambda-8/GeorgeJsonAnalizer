import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { TransactionService } from "../services/transaction/transaction.service";

@Component({
  selector: "app-upload-json",
  templateUrl: "./upload-json.component.html",
  styleUrls: ["./upload-json.component.scss"],
})
export class UploadJsonComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    return;
  }

  uploadFile(event: Event) {
    //if (event.target==null) return;
    const input = event.target as HTMLInputElement;
    if (input.files?.length !== 1) {
      console.error("No file selected");
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        // handle data processing
        if (reader.result != null) {
          this.transactionService.addJson(reader.result.toString());
        }
      };
      reader.readAsText(input.files[0]);
    }
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.transactionService.transactions)
      .split('"_')
      .join('"');
    const uri = this.sanitizer.bypassSecurityTrustUrl(
      "data:text/json;charset=UTF-8," + encodeURIComponent(theJSON)
    );
    return uri;
  }

  deleteLocalStorage() {
    this.transactionService.deleteLocalStorage();
  }
}
