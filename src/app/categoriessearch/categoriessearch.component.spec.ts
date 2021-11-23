import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriessearchComponent } from './categoriessearch.component';

describe('CategoriessearchComponent', () => {
  let component: CategoriessearchComponent;
  let fixture: ComponentFixture<CategoriessearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriessearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriessearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
