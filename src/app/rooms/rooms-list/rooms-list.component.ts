import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  type OnChanges,
  type OnInit,
  type SimpleChanges,
} from '@angular/core';
import type { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, RouterLink, FilterPipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
