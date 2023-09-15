import { IMain } from "../interfaces/main";
import { ACTIVATE_TAB, SET_LANG } from "../types";

export function setLangAction(lang: string): IMain {
  return { type: SET_LANG, payload: lang };
}

export function activateTab(index: number): IMain {
  return { type: ACTIVATE_TAB, payload: index };
}
