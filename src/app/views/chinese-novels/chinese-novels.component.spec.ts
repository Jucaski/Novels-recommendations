import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseNovelsComponent } from './chinese-novels.component';

describe('ChineseNovelsComponent', () => {
  let component: ChineseNovelsComponent;
  let fixture: ComponentFixture<ChineseNovelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChineseNovelsComponent]
    });
    fixture = TestBed.createComponent(ChineseNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
