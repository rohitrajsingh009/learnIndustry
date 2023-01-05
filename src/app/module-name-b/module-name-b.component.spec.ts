import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNameBComponent } from './module-name-b.component';

describe('ModuleNameBComponent', () => {
  let component: ModuleNameBComponent;
  let fixture: ComponentFixture<ModuleNameBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleNameBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleNameBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
