import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeetingroomComponent } from './display-meetingroom.component';

describe('DisplayMeetingroomComponent', () => {
  let component: DisplayMeetingroomComponent;
  let fixture: ComponentFixture<DisplayMeetingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMeetingroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMeetingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
