import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPOListComponent } from './ipo-list.component';

describe('IPOListComponent', () => {
  let component: IPOListComponent;
  let fixture: ComponentFixture<IPOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
