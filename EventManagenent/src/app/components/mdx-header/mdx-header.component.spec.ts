import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdxHeaderComponent } from './mdx-header.component';

describe('MdxHeaderComponent', () => {
  let component: MdxHeaderComponent;
  let fixture: ComponentFixture<MdxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
