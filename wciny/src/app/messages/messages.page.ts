import { Component, OnInit } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite/ngx";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages =[];
  public item: any;
  showEvent;
  pushMessage: string = 'push message will be displayed here';
  constructor(private route: ActivatedRoute, private router: Router, private sqlite: SQLite) {
    this.item = this.route.snapshot.data['special'];
    console.log(this.item);
    let a = new Date();
    const msgDate = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate();
    this.sqlite.create({
      name: 'wciny.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql("DELETE FROM messages WHERE date(date) < date('now','-10 day')",[])
          .then(() => {
                console.log("We have Deleted Old Data");
                if (this.item.body) {
                  db.executeSql('INSERT INTO messages (date, title, message) VALUES (?,?,?)', [msgDate, this.item.title, this.item.body])
                      .then(() => console.log('Executed Insert SQL'))
                      .catch(e => console.log(e));
                }
                db.executeSql('SELECT id, date, title, message FROM messages ORDER BY id DESC', [])
                    .then((data) => {
                      if (data.rows.length >0 ){
                        this.showEvent = true;
                        console.log(data.rows);
                        for (let i = 0; i < data.rows.length; i++) {
                          this.messages.push(data.rows.item(i));
                        }
                      }else{
                        this.showEvent = false;
                      }
                    }).catch(e => console.log(e));
              }
          ).catch(e => console.log(e));
    })
        .catch(e => console.log(e));


    if (this.item.body) {
      this.pushMessage = this.item.body;
    }
  }
  getDay(str){
    const days = ['SUNDAY', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[new Date(parseInt(str)).getDay()];

  }

  getNum(str){
    return new Date(parseInt(str)).getDate();
  }
  ngOnInit() {
  }

}
