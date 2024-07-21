export interface IBooking {
  id: string;
  companyId: string;
  orderDateTime: Date;
  userEmail: string;
  userName: string;
}

export interface BookingResponse {
  message: string;
}
