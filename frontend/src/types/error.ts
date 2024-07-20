export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  handled?: boolean;
}
