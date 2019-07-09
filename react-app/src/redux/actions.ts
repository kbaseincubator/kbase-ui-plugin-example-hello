import { Action } from "redux";
import { StoreState } from "./store";
import { ThunkDispatch } from "redux-thunk";

export enum ActionType {
  APP_LOAD = "app/load",
  APP_UNLOAD = "app/unload"
}

export interface AppLoad extends Action<ActionType.APP_LOAD> {
  type: ActionType.APP_LOAD;
  title: string;
}

export interface AppUnload extends Action<ActionType.APP_UNLOAD> {
  type: ActionType.APP_UNLOAD;
}



export function appLoad(title: string) {
  return async (dispatch: ThunkDispatch<StoreState, void, Action>, getState: () => StoreState) => {};
}

