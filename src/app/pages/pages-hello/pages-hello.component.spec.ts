import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHelloComponent } from './pages-hello.component';

describe('PagesHelloComponent', () => {
  let component: PagesHelloComponent;
  let fixture: ComponentFixture<PagesHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
