import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeaturesSectionComponent } from './product-features-section.component';

describe('ProductFeaturesSectionComponent', () => {
  let component: ProductFeaturesSectionComponent;
  let fixture: ComponentFixture<ProductFeaturesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFeaturesSectionComponent]
    });
    fixture = TestBed.createComponent(ProductFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
