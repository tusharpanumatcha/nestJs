import { ApiProperty } from "@nestjs/swagger";
import { TaskStatus } from "../tasks.model";

// import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    // @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    title: string;

    // @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    description: string;

    @ApiProperty({
        enum: TaskStatus
    })
    status: TaskStatus
}