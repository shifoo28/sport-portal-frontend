import { IMain } from "../interfaces/main";
import { ACTIVATE_TAB, AUTH_DIALOG_OPEN, SET_LANG } from "../types";

export function setLangAction(lang: string): IMain {
  return { type: SET_LANG, payload: lang };
}

export function activateTab(index: number): IMain {
  return { type: ACTIVATE_TAB, payload: index };
}

export function authDialogOpen(open: boolean): IMain {
  return { type: AUTH_DIALOG_OPEN, payload: open };
}
