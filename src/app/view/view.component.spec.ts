import { ViewComponent } from "./view.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";

describe("ViewComponent", () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponent],
      imports: [NgxsModule.forRoot([])],
    });

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create view component", () => {
    expect(component).toBeTruthy();
  });
});
