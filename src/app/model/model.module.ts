import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { TheaterRepository } from "./theater.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    TheaterRepository,
    RestDataSource,

  ],
})
export class ModelModule {}
