export interface AuthStorage {
  token: string;
  user: { _id: string; firstName: string; lastName: string; role: unknown };
}
