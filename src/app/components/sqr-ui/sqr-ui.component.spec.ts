import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqrUiComponent } from './sqr-ui.component';

describe('SqrUiComponent', () => {
  let component: SqrUiComponent;
  let fixture: ComponentFixture<SqrUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqrUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqrUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
