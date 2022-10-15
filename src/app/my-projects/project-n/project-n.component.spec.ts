import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNComponent } from './project-n.component';

describe('ProjectNComponent', () => {
  let component: ProjectNComponent;
  let fixture: ComponentFixture<ProjectNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
