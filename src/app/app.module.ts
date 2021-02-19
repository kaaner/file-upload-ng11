import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ApiService } from "./api.service";
import { UploadComponent } from "./upload/upload.component";
import { UploadState } from "./states/upload.state";
import { ViewComponent } from "./view/view.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([UploadState]),
  ],
  exports: [AppComponent, UploadComponent],
  declarations: [AppComponent, UploadComponent, ViewComponent],
  bootstrap: [AppComponent],
  providers: [ApiService, UploadComponent],
})
export class AppModule {}
