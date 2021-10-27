import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellonComponent } from './sellon.component';

describe('SellonComponent', () => {
  let component: SellonComponent;
  let fixture: ComponentFixture<SellonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
