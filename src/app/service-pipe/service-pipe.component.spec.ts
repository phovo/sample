import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePipeComponent } from './service-pipe.component';

describe('ServicePipeComponent', () => {
  let component: ServicePipeComponent;
  let fixture: ComponentFixture<ServicePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
