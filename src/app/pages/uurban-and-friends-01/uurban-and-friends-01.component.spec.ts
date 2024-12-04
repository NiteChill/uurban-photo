import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UurbanAndFriends01Component } from './uurban-and-friends-01.component';

describe('UurbanAndFriends01Component', () => {
  let component: UurbanAndFriends01Component;
  let fixture: ComponentFixture<UurbanAndFriends01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UurbanAndFriends01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UurbanAndFriends01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
