import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuandiejComponent } from './guandiej.component';

describe('GuandiejComponent', () => {
  let component: GuandiejComponent;
  let fixture: ComponentFixture<GuandiejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuandiejComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuandiejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
