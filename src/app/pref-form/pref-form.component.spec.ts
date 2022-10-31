import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefFormComponent } from './pref-form.component';

describe('PrefFormComponent', () => {
  let component: PrefFormComponent;
  let fixture: ComponentFixture<PrefFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
