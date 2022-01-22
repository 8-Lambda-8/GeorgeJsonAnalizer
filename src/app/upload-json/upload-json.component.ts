import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../services/transaction.service";

@Component({
  selector: 'app-upload-json',
  templateUrl: './upload-json.component.html',
  styleUrls: ['./upload-json.component.scss']
})
export class UploadJsonComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  uploadFile(event:any) {
    //if (event.target==null) return;
    if (event.target.files.length !== 1) {
      console.error('No file selected');
    } else {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        // handle data processing
        if(reader.result!=null){
          this.transactionService.addJson(reader.result.toString())
        }
      };
      reader.readAsText(event.target.files[0]);
    }
  }


}
