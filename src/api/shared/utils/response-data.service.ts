import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IMessage, IResponse } from "../constants";



@Injectable()
export class ResponseData {

  public resultResponse(code: HttpStatus, message: IMessage | string, data: Object| Object[]): IResponse {

    // build json to return
    const response: IResponse = {
      status: code < 400 ? true : false,
      statusCode: code,
      message,
      data
    };
    return response;
  }

  public resultError(code: HttpStatus, message: IMessage | string, data: null): IResponse {
    // build json to return
    const response: IResponse = {
      status: code < 400 ? true : false,
      statusCode: code,
      message,
      data
    };
    throw new HttpException(response, response.statusCode);
  }


}