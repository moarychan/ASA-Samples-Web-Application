import { Dispatch } from "react";
import { TodoActions } from "../actions/common";
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";
import {Account} from "./account";

export interface AppContext {
    state: ApplicationState
    dispatch: Dispatch<TodoActions>
}

export interface ApplicationState {
    account?: Account
    lists?: TodoList[]
    selectedList?: TodoList
    selectedItem?: TodoItem
}

export const getDefaultState = (): ApplicationState => {
    return {
        account: undefined,
        lists: undefined,
        selectedList: undefined,
        selectedItem: undefined
    }
}

