import { Component, ElementRef, ViewChild } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent {
  @ViewChild("file", { read: ElementRef })
  file: ElementRef;
  files: FileList;

  constructor(private service: ApiService) {}

  selectFile() {
    const files = (this.file.nativeElement as HTMLInputElement).files;
    this.upload(files[0]);
  }

  upload(file) {
    if (file) this.service.upload(file);
  }
}
