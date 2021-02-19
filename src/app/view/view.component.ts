import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { FileTable } from "../models/FileTable";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  @Select("fileTables.fileTables") fileTables: Observable<FileTable[]>;
  constructor() {}

  ngOnInit() {}
}
