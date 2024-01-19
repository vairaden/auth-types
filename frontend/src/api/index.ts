import {api} from "./base.ts";

export function ping() {
  return api.get('/api');
}
