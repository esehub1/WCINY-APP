import { Component, OnInit } from '@angular/core';
import { DataService} from "../services/data.service";

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  public showEvent;
  public itemList;
  constructor(private apiCall: DataService) { }

  getMinistries(){
    this.apiCall.fetchData('get/nubia/pull',"opt=ministry",true).subscribe(
        data => {
            this.showEvent = !!(Array.isArray(data['items']) && data['items'].length > 0);
            this.itemList = data['data'];
          console.log(data['data']);
        },
        err => console.error(err),
        () => console.log('Fetch Ministries Completed')
    );

  }
  ngOnInit() {
    this.getMinistries()
  }

}
