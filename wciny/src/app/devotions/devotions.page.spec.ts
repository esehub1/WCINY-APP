import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevotionsPage } from './devotions.page';

describe('DevotionsPage', () => {
  let component: DevotionsPage;
  let fixture: ComponentFixture<DevotionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
