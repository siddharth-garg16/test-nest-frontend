interface Endpoints {
  [key: string]: { [key: string]: SubControllerEndpoints };
}
interface SubControllerEndpoints {
  httpMethod: string;
  url: string;
}

export const ENDPOINTS: Endpoints = {
  USER: {
    SIGNUP_URL: {
      httpMethod: 'POST',
      url: '/api/user/signup',
    },
    LOGIN_URL: {
      httpMethod: 'POST',
      url: '/api/user/login',
    },
    LOGOUT_URL: {
      httpMethod: 'POST',
      url: '/api/user/logout',
    },
    REFRESH_TOKEN_URL: {
      httpMethod: 'POST',
      url: '/api/user/refresh-token',
    },
  },
};
