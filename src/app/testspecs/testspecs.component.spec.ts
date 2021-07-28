import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestspecsComponent } from './testspecs.component';

describe('TestspecsComponent', () => {
  let component: TestspecsComponent;
  let fixture: ComponentFixture<TestspecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestspecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
