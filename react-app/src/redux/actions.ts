import { Action } from "redux";
import { StoreState } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { Channel } from "@kbase/ui-lib";

export enum ActionType {
  APP_LOAD = "app/load",
  APP_UNLOAD = "app/unload",
  APP_SET_TITLE = "app/set/title"
}

export interface AppLoad extends Action<ActionType.APP_LOAD> {
  type: ActionType.APP_LOAD;
  title: string;
}

export interface AppUnload extends Action<ActionType.APP_UNLOAD> {
  type: ActionType.APP_UNLOAD;
}

export interface AppSetTitle extends Action<ActionType.APP_SET_TITLE> {
  type: ActionType.APP_SET_TITLE;
  title: string;
}

export function appLoad(title: string) {
  return async (dispatch: ThunkDispatch<StoreState, void, Action>, getState: () => StoreState) => {};
}

export function appSetTitle(title: string) {
  return async (dispatch: ThunkDispatch<StoreState, void, Action>, getState: () => StoreState) => {
    const {
      app: {
        runtime: { channelId }
      }
    } = getState();

    if (!channelId) {
      console.warn("Trying to set title without a channel!");
      return;
    }

    const channel = new Channel({ to: channelId });
    channel.send("set-title", {
      title
    });
  };
}
