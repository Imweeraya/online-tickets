import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { TheaterRepository } from "./theater.repository";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    TheaterRepository,
    RestDataSource,
    StaticDataSource,
    { provide: StaticDataSource ,useClass: RestDataSource}
  ],
})
export class ModelModule {}
