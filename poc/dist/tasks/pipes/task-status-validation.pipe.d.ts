import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: TaskStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
