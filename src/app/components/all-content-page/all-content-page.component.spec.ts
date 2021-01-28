import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContentPageComponent } from './all-content-page.component';

describe('AllContentPageComponent', () => {
  let component: AllContentPageComponent;
  let fixture: ComponentFixture<AllContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
