import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeonelseComponent } from './someonelse.component';

describe('SomeonelseComponent', () => {
  let component: SomeonelseComponent;
  let fixture: ComponentFixture<SomeonelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeonelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeonelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
