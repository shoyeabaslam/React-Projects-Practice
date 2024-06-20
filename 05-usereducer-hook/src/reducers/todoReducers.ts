import { Reducer } from "react";
import { getColor } from "../utils/getColor";
import { State } from "../types/state";
import { Action } from "../types/actions";



export const todoReducer: Reducer<State, Action> = (state: State, action: Action): State => {
    switch (action.type) {
        case 'added_todo': {
            const color = getColor();
            return {
                draft: '',
                todo: [{
                    id: state.todo.length,
                    text: state.draft,
                    bgColor:color[0],
                    shade:color[1],
                }, ...state.todo],
            };
        }

        case 'update_input':{
            return{
                draft:action.nextDraft!,
                todo: state.todo
            }
        }

        case 'update_todo':{
            const id = state.todo.findIndex((todo)=>todo.id === action.id);
            const filterData = state.todo.filter((todo)=>todo.id !== action.id);
            const data = [{...state.todo[id],text:action.nextDraft!},...filterData]
            return{
                draft:'',
                todo: data
            }
        }

        case 'delete_todo':{
            const data = state.todo.filter((todo)=> todo.id != action.id);
            return{
                draft:'',
                todo:data
            }
        }
        
        default:
            throw new Error('Unknown action: ' + action.type);
    }
};