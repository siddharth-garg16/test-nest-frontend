export interface AuthStorage {
  accessToken: string;
  refreshToken: string;
  user: { _id: string; firstName: string; lastName: string; role: unknown; emailId: string };
}
