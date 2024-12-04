import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UurbanClub01Component } from './uurban-club-01.component';

describe('UurbanClub01Component', () => {
  let component: UurbanClub01Component;
  let fixture: ComponentFixture<UurbanClub01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UurbanClub01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UurbanClub01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
