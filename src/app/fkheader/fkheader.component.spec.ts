import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FkheaderComponent } from './fkheader.component';

describe('FkheaderComponent', () => {
  let component: FkheaderComponent;
  let fixture: ComponentFixture<FkheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FkheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FkheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
