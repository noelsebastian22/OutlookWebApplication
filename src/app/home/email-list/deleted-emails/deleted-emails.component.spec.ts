import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedEmailsComponent } from './deleted-emails.component';

describe('DeletedEmailsComponent', () => {
  let component: DeletedEmailsComponent;
  let fixture: ComponentFixture<DeletedEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
