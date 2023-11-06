import { Module } from "@nestjs/common";
import { AccountDatasourceModule } from "src/datasource/account/account.repository.module";
import { FindAccountHttpController } from "./find-account.http.controller";
import { FindAccountUseCase } from "./find-account.use-case";


@Module({
    imports: [AccountDatasourceModule],
    controllers: [FindAccountHttpController],
    providers: [FindAccountUseCase]
})

export class FindAccountModule {}