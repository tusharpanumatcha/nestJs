import { Controller, Get } from '@nestjs/common';

@Controller('api') 
export class ApiInfoController {

    @Get()
    getApiInfo() {
        const apiInfo = {
            "api info": "Nest Js API",
            "version": "1.0.0"
        }
        return apiInfo;
    }
}
