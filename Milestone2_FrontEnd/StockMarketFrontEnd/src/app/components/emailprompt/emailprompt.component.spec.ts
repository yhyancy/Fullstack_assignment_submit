import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpromptComponent } from './emailprompt.component';

describe('EmailpromptComponent', () => {
  let component: EmailpromptComponent;
  let fixture: ComponentFixture<EmailpromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailpromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
