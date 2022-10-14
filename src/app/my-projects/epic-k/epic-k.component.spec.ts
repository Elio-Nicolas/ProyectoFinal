import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicKComponent } from './epic-k.component';

describe('EpicKComponent', () => {
  let component: EpicKComponent;
  let fixture: ComponentFixture<EpicKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
