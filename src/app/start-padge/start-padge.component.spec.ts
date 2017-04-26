import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPadgeComponent } from './start-padge.component';

describe('StartPadgeComponent', () => {
  let component: StartPadgeComponent;
  let fixture: ComponentFixture<StartPadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
