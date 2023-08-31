import {ROLE} from "../../models/gestion-utilisateurs/role";

export interface User {
  [prop: string]: any;

  id?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  roles?: ROLE[];
  permissions?: any[];
}

export interface Token {
  [prop: string]: any;

  token: string;
  token_type?: string;
  expires_in?: number;
  exp?: number;
  refresh_token?: string;
}