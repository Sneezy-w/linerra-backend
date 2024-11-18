export interface Response {
  ok(data: any): Response;
  fail(
    errorMessage: string,
    errorCode?: string,
    showType?: number,
    statusCode?: number,
  ): Response;
}

export as namespace Express;
