import { State, Action, StateContext, Selector } from "@ngxs/store";
import { FileTable } from "../models/FileTable";
import { File } from "../models/File";
import { UploadFile } from "../actions/upload.action";

export class UploadFileStateModel {
  fileType: string;
  file: File;
  fileTables: FileTable[];
}

@State<UploadFileStateModel>({
  name: "fileTables",
  defaults: {
    fileType: "",
    fileTables: [],
    file: null
  }
})
export class UploadState {
  @Selector()
  static getFileTables(state: UploadFileStateModel) {
    return state.fileTables;
  }

  @Action(UploadFile)
  add(
    { getState, patchState }: StateContext<UploadFileStateModel>,
    { payload }: UploadFile
  ) {
    const state = getState();
    let fileType = payload.fileName.split(".").pop();
    if (state.fileTables.some(f => f.fileType == fileType)) {
      state.fileTables.forEach(function(file) {
        if (file.fileType == fileType) {
          file.files.push(payload);
        }
      });
    } else {
      state.fileTables.push({
        fileType: fileType,
        files: [payload]
      });
    }
  }
}
