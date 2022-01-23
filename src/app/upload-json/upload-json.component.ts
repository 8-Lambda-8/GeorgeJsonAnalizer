import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TransactionService } from "../services/transaction.service";

@Component({
  selector: 'app-upload-json',
  templateUrl: './upload-json.component.html',
  styleUrls: ['./upload-json.component.scss']
})
export class UploadJsonComponent implements OnInit {

  constructor(private transactionService: TransactionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    //if (event.target==null) return;
    if (event.target.files.length !== 1) {
      console.error('No file selected');
    } else {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        // handle data processing
        if (reader.result != null) {
          this.transactionService.addJson(reader.result.toString())
        }
      };
      reader.readAsText(event.target.files[0]);
    }
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.transactionService.transactions).split("\"_").join("\"");
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    return uri;
  }

  deleteLocalStorage(){
    this.transactionService.deleteLocalStorage();
  }

}
