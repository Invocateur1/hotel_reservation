import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfComponent } from './registerf.component';

describe('RegisterfComponent', () => {
  let component: RegisterfComponent;
  let fixture: ComponentFixture<RegisterfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
