import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPost } from './category-post';

describe('CategoryPost', () => {
  let component: CategoryPost;
  let fixture: ComponentFixture<CategoryPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
