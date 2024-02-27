
export interface IResponse {
  status: boolean;
  statusCode: number;
  message: string | IMessage;
  data: any;
}

export interface IMessage {
    SUCCESS: 'Success',
    ERROR: 'Error',
}