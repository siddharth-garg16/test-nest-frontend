import { UserType } from '../enums/userType.enum';

export interface LoginRequestDTO {
  emailId: string;
  password: string;
}
export interface LoginResponseDTO {
  status: number;
  message: string;
  accessToken: string;
  refreshToken: string;
  user: {
    firstName: string;
    lastName: string;
    userType: UserType;
    emailId: string;
  };
}

export interface SignupRequestDTO {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  userType: UserType;
}
export interface SignupResponseDTO {
  message: string;
  status: number;
  id: string;
}
