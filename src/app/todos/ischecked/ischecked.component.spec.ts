import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscheckedComponent } from './ischecked.component';

describe('IscheckedComponent', () => {
  let component: IscheckedComponent;
  let fixture: ComponentFixture<IscheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IscheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IscheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
