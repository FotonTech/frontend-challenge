// eslint-disable-next-line
export const successObject = (response: any) => {
  return {
    success: true,
    status: response.status,
    data: response.data,
    headers: response.headers,
  };
};

// eslint-disable-next-line
export const errorObject = (error: any) => {
  return {
    success: false,
    // eslint-disable-next-line
    error: error.request._response,
    status: error.request.status,
  };
};
