import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhotelComponent } from './prohotel.component';

describe('ProhotelComponent', () => {
  let component: ProhotelComponent;
  let fixture: ComponentFixture<ProhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProhotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
