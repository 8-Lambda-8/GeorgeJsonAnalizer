import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CategoryCakeComponent } from "./category-cake.component";

describe("CategoryCakeComponent", () => {
  let component: CategoryCakeComponent;
  let fixture: ComponentFixture<CategoryCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCakeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
