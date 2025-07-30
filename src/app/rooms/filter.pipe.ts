import { Pipe, PipeTransform } from '@angular/core';
import type { RoomList } from './rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(rooms: RoomList[], price: number): RoomList[] {
    return rooms.filter((room) => room.price <= price);
  }
}
