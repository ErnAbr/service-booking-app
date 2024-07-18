export interface IBooking {
  companyId: string;
  orderDateTime: Date;
  userEmail: string;
  userName: string;
}

export interface IBookingResponse {
  message: string;
}
