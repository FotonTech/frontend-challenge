export interface FetchDataInput {
  url: string
  method: HttpMethod
  body?: any
  headers?: { [key: string]: string }
}

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DEL = 'DEL',
}
