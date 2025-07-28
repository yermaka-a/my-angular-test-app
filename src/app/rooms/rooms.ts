export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  // id: any;
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  rating: number;
  checkingTime: Date;
  checkoutTime: Date;
}
