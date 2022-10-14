import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryJComponent } from './story-j.component';

describe('StoryJComponent', () => {
  let component: StoryJComponent;
  let fixture: ComponentFixture<StoryJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
