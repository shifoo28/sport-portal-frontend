import { IMain } from "../interfaces/main";
import { SET_LANG } from "../types";

export function setLangAction(lang: string): IMain {
  return { type: SET_LANG, payload: lang };
}
