import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: LibComponent;
  let fixture: ComponentFixture<LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
