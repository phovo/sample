import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForPipeComponent } from './ng-for-pipe.component';

describe('NgForPipeComponent', () => {
  let component: NgForPipeComponent;
  let fixture: ComponentFixture<NgForPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
