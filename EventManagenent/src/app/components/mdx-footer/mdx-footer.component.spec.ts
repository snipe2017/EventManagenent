import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdxFooterComponent } from './mdx-footer.component';

describe('MdxFooterComponent', () => {
  let component: MdxFooterComponent;
  let fixture: ComponentFixture<MdxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
