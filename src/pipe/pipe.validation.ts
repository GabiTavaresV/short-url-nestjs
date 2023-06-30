import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
 
@Injectable()
export class ValidationHttp implements PipeTransform{
    transform(value: any, _metadata: ArgumentMetadata) {
        if(!value.includes('http') || value.includes('https')) {
            value = `http://${value}`;
        }

        return value
    }
}