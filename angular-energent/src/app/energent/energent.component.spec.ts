import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergentComponent } from './energent.component';

describe('EnergentComponent', () => {
  let component: EnergentComponent;
  let fixture: ComponentFixture<EnergentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
