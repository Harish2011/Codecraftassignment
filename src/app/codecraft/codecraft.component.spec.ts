import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecraftComponent } from './codecraft.component';

describe('CodecraftComponent', () => {
  let component: CodecraftComponent;
  let fixture: ComponentFixture<CodecraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodecraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
