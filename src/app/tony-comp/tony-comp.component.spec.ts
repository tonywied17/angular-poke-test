import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyCompComponent } from './tony-comp.component';

describe('TonyCompComponent', () => {
  let component: TonyCompComponent;
  let fixture: ComponentFixture<TonyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonyCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
