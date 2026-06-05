export type UserRole = "member" | "athlete" | "coach" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  clubId?: string;
};
