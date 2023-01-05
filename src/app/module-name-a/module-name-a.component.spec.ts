import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNameAComponent } from './module-name-a.component';

describe('ModuleNameAComponent', () => {
  let component: ModuleNameAComponent;
  let fixture: ComponentFixture<ModuleNameAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleNameAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleNameAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
