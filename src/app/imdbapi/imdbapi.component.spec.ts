import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbapiComponent } from './imdbapi.component';

describe('ImdbapiComponent', () => {
  let component: ImdbapiComponent;
  let fixture: ComponentFixture<ImdbapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
