import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTopicsComponent } from './advanced-topics.component';

describe('AdvancedTopicsComponent', () => {
  let component: AdvancedTopicsComponent;
  let fixture: ComponentFixture<AdvancedTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
