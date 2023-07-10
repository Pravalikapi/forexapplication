import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyrateComponent } from './currencyrate.component';

describe('CurrencyrateComponent', () => {
  let component: CurrencyrateComponent;
  let fixture: ComponentFixture<CurrencyrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
