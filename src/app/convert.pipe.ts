import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hoangDuc'
})

export class HoangDucPipe implements PipeTransform {
    transform(value: number, unit?: string) {
        if (value && !isNaN(value)) {
            if(unit === 'C') {
                var tem = (value - 32) / 1.8;
                return tem.toFixed(2)
            }
            else if (unit === 'F') {
                var tem = (value * 1.8) + 32;
                return tem.toFixed(2)
            }
        }
        return;
    }
}