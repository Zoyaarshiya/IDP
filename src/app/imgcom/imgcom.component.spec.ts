import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcomComponent } from './imgcom.component';

describe('ImgcomComponent', () => {
  let component: ImgcomComponent;
  let fixture: ComponentFixture<ImgcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
