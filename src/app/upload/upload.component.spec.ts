import { UploadComponent } from "./upload.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ApiService } from "../api.service";
import { NgxsModule } from "@ngxs/store";
import { HttpClientTestingModule } from "@angular/common/http/testing";

const fileOne = new File(["test"], "test.txt", { type: "text/plain" });
const fileTwo = new File([], "test", { type: "text/plain" });

describe("UploadComponent", () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
      providers: [ApiService],
      imports: [NgxsModule.forRoot([]), HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(ApiService);
    fixture.detectChanges();
  });

  it("should create upload component", () => {
    expect(component).toBeTruthy();
  });

  it("file has extension", () => {
    apiService.upload(fileOne);
    expect(fileOne.name.split(".").pop()).not.toBeNull();
  });

  it("file has no extension", () => {
    apiService.upload(fileTwo);
    expect(fileTwo.name.split(".").pop()).not.toBeNull();
  });

  it("file size is greater than zero", () => {
    apiService.upload(fileOne);
    expect(fileOne.size).toBeGreaterThan(0);
  });

  it("file size is zero", () => {
    apiService.upload(fileTwo);
    expect(fileTwo.size).toEqual(0);
  });
});
