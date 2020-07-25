import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTransformComponent } from './pipe-transform.component';

describe('PipeTransformComponent', () => {
  let component: PipeTransformComponent;
  let fixture: ComponentFixture<PipeTransformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTransformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
