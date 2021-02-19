import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { UploadFile } from "./actions/upload.action";
import { apiUrl } from "./environments/environment";

@Injectable()
export class ApiService {
  constructor(private store: Store, private httpClient: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    return this.httpClient
      .post(apiUrl + "upload", formData, {
        reportProgress: true,
        observe: "events",
      })
      .subscribe(
        (event: any) => {
          if (event instanceof HttpResponse) {
            console.log("success");
            let data = new UploadFile({
              fileName: file.name,
              fileSize: file.size,
              uploadDate: new Date(),
            });

            this.store.dispatch(data);
          }
        },
        (error) => {
          console.log("error: " + error.message);
        }
      );
  }
}
