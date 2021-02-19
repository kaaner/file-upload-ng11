import { File } from "../models/File";

export class UploadFile {
  static readonly type = "[UploadFile]";
  constructor(public payload: File) {}
}
