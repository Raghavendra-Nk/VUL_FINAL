export interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
  exp?: number;
} 