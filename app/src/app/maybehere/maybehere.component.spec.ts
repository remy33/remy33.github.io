import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybehereComponent } from './maybehere.component';

describe('MaybehereComponent', () => {
  let component: MaybehereComponent;
  let fixture: ComponentFixture<MaybehereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaybehereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybehereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
