import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeseComponent } from './sese.component';

describe('SeseComponent', () => {
  let component: SeseComponent;
  let fixture: ComponentFixture<SeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
