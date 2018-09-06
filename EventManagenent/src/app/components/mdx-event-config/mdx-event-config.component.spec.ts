import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdxEventConfigComponent } from './mdx-event-config.component';

describe('MdxEventConfigComponent', () => {
  let component: MdxEventConfigComponent;
  let fixture: ComponentFixture<MdxEventConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdxEventConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdxEventConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
