export interface User {
  login?: string;
  name?: string;
  location?: string;
  public_gists?: string;
  public_repos?: string;
  url?: string;
  html_url?: string;
  repos?: number;
  followers?: number;
  avatar_url?: string;
  bio?: string;
  blog?: string;
  company?: string;
  email?: string;
  loading: boolean;
}

export interface UsersFilter {
  name: string,
  repos: number,
  followers: number;
}

export interface Users {
  users: User[];
  loading: boolean;
  filter: UsersFilter;
}