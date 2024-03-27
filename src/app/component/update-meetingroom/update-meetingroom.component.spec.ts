import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeetingroomComponent } from './update-meetingroom.component';

describe('UpdateMeetingroomComponent', () => {
  let component: UpdateMeetingroomComponent;
  let fixture: ComponentFixture<UpdateMeetingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMeetingroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMeetingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
