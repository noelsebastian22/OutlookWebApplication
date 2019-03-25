import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkEmailComponent } from './junk-email.component';

describe('JunkEmailComponent', () => {
  let component: JunkEmailComponent;
  let fixture: ComponentFixture<JunkEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunkEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunkEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
