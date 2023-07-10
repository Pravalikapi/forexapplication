import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooserecipentComponent } from './chooserecipent.component';

describe('ChooserecipentComponent', () => {
  let component: ChooserecipentComponent;
  let fixture: ComponentFixture<ChooserecipentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooserecipentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooserecipentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
