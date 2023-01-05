import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCrousalComponent } from './banner-crousal.component';

describe('BannerCrousalComponent', () => {
  let component: BannerCrousalComponent;
  let fixture: ComponentFixture<BannerCrousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCrousalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
