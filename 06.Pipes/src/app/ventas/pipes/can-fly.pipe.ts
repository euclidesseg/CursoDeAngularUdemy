import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'canFly'
})
export class CanflyPipe implements PipeTransform{
    transform(value:boolean) {
        if(value){
            return 'Vuela';
           }else{
            return  'No vuela';
           }
    }
}