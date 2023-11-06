import { IsNotEmpty, IsString } from "class-validator";


export class FindAccountDto {
    @IsNotEmpty()
    @IsString()
    email: string;
} 