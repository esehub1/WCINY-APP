import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, NavigationExtras, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {DataService} from '../services/data.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';

// import { Device } from '@ionic-native/device';

@Component({
    selector: 'app-new',
    templateUrl: './new.page.html',
    styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
    @ViewChild('profileSlider') profileSlider: any;

    firstForm: FormGroup;
    public hideMe = true;
    public isPageTwo = false;
    public isChecked = false;
    public userDob = null; // : String = new Date().toISOString();
    public userWedding = null; // : String = new Date().toISOString();
    items = [];
    // Item;
    Parish;
    verifyData;
    hideVerify = false;
    submitAttempt = false;

    constructor(private  nCtrl: Router, private toastCtrl: ToastController, private storage: Storage,
                private apiCall: DataService, public formBuilder: FormBuilder, public navParams: ActivatedRoute) {
    }

    save() {
        this.submitAttempt = true;

        if (!this.firstForm.valid) {
            console.log(this.firstForm);
            console.log('INVALID DETAILS FORM!');
            this.presentToast('Invalid Form, Please fill all required Information');
        } else {
            console.log('success!');
            console.log(this.firstForm.value);
            const objToken = this.items.filter((obj) => {
                return obj.Token;
            })[0];
            const postData = this.firstForm.value;
            postData.PushId = (typeof objToken !== 'undefined') ? objToken.Token : '';
            // postData.PushId = objToken.Token;
            postData.Platform = 'windows'; // this.plt.is('ios') ? 'ios' : this.plt.is('android') ? 'android' : 'windows';
            if (postData.Value < 1) {
                console.log(postData);
                // submit form details add addItem(userId)
                this.apiCall.sendData('user/new', postData, true).subscribe(
                    (data:any) => {
                        if (data.status === 'ko') {
                            this.presentToast('There was a problem with your submission: ' + data.error_description);
                        } else {
                            this.presentToast('Profile information successfully saved');
                        }
                        const navigationExtras: NavigationExtras = {
                            queryParams: {
                                item: JSON.stringify({ProfileId: postData.Phone, Registered: true})
                            }
                        };
                        this.nCtrl.navigate(['/home'], navigationExtras);
                    },
                    err => this.presentToast('There was an error saving your Profile information'),
                    () => console.log('Profile submission Completed')
                );

            } else {
                const link = 'user/' + postData.Value;
                this.apiCall.putData(link, postData, true).subscribe(
                    data => {
                        // console.log(data);
                        if (data.status === 'ko') {
                            this.presentToast('There was a problem with your submission: ' + data.error_description);
                        } else {
                            this.presentToast('Profile information successfully saved');
                        }
                        // if(this.newMode){
                        const navigationExtras: NavigationExtras = {
                            queryParams: {
                                item: JSON.stringify({Parish: this.Parish, ProfileId: data.value, ProfilePhone: postData.Phone, New: true})
                            }
                        };
                        this.nCtrl.navigate(['/home'], navigationExtras);
                        // }
                        // console.log(this.Parish);

                    },
                    err => console.error(err),
                    () => console.log('Profile submission Completed')
                );
            }
        }
    }

    prev() {
        this.isPageTwo = false;
    }

    next() {
        if (!this.firstForm.valid) {
            console.log(this.firstForm);
            console.log('INVALID first FORM!');
            this.presentToast('Invalid entries, Please fill all required Information');
        } else {
            console.log('Going on Next');
            this.isPageTwo = true;
        }

    }


    async presentToast(msg) {

        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });

        toast.present();
        toast.onDidDismiss().then((val) => {
            console.log('Toast Dismissed');
        });
    }

    onChange() {
        this.hideMe = this.firstForm.value.Married === 0;
        console.log('success!, Hide Married element set to ' + this.hideMe + ' User selected value ' + this.firstForm.value.Married);
    }

    /* addItem(key,val) {
       this.items.push({[key] : val});
       this.saveLocal();
     }*/

    /*  removeItem(item) {
        let index = this.items.indexOf(item, 0);
        if (index > -1) {
          this.items.splice(index, 1);
        }
        this.saveLocal();
      }*/

    clearDob() {
        this.userDob = null;
    }

    clearWedding() {
        this.userWedding = null;
    }

    /* saveLocal() {
       this.storage.set('profile', JSON.stringify(this.items));
     }*/

    pollItems() {
        const env = this;
        this.storage.get('profile')
            .then((data) => {
                (data === null) ? console.warn('Profile Not defined') : env.items = JSON.parse(data);
                console.log(env.items);
            }, (error) => {
                // we don't have the user data so we will ask him to log in
                console.log(error);
            });
    }

    ngOnInit() {
        this.pollItems();
        this.firstForm = this.formBuilder.group({
            Fname: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required
                , Validators.pattern('[a-zA-Z ]*')])),
            Lname: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.required
                , Validators.pattern('[a-zA-Z ]*')])),
            Email: new FormControl('', Validators.compose([Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), Validators.required])),
            Phone: new FormControl('', Validators.compose([Validators.required])),
            Dob: new FormControl('', Validators.compose([Validators.maxLength(100)])),
            Married: new FormControl('', Validators.compose([Validators.maxLength(5)])),
            Wedding: new FormControl('', Validators.compose([Validators.maxLength(100)])),
            Address: new FormControl('', Validators.compose([Validators.maxLength(300)])),
            City: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])),
            State: new FormControl('', Validators.compose([Validators.maxLength(100)])),
            Zip: new FormControl('', Validators.compose([Validators.maxLength(10)])),
            Platform: new FormControl('', Validators.compose([Validators.maxLength(10)])),
            Country: new FormControl('', Validators.compose([Validators.maxLength(100)])),
            CreatedAt: new FormControl('', Validators.compose([Validators.maxLength(100)])),
            Value: new FormControl('0', Validators.compose([Validators.maxLength(5)]))
        });

    }

}
