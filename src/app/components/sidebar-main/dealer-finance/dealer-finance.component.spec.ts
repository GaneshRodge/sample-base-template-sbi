import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerFinanceComponent } from './dealer-finance.component';

describe('DealerFinanceComponent', () => {
  let component: DealerFinanceComponent;
  let fixture: ComponentFixture<DealerFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
