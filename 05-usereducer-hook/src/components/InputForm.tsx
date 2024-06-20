import React, { FormEvent, Reducer, useReducer} from 'react';
import DisplayTodo from './DisplayTodo';
import './input.css';
import { State } from '../types/state';
import { Action } from '../types/actions';
import { todoReducer } from '../reducers/todoReducers';

const initialValue: State = {
    draft: '',
    todo: [],
};

const InputForm: React.FC = () => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(todoReducer, initialValue);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        console.log(state)
        event.preventDefault();
        if (state.draft !== '') {
            dispatch({ type: 'added_todo'});
        }
    };

    return (
        <div className='w-full px-5 flex flex-col items-center space-y-10'>
            <h1 className='text-3xl font-bold text-slate-800'>MY TODO</h1>
            <form onSubmit={handleSubmit} className="w-[60%] form_wrapper flex items-center h-[50px] mt-5">
                <div className="flex-1">
                    <input
                        value={state.draft}
                        onChange={(e) => dispatch({type:'update_input',nextDraft:e.target.value}) }
                        className="w-full text-sm bg-transparent border outline-none border-slate-900 px-2 py-3"
                        type="text"
                        placeholder="Add TODO"
                    />
                </div>
                <button className="mx-4 p-3 text-sm border border-slate-900">ADD</button>
            </form>
            <div className='w-[60%]'>
                {state.todo.map((item) => (
                        <DisplayTodo key={item.id} id={item.id} text={item.text} shade={item.shade} bgColor={item.bgColor} dispatch={dispatch}/>
                    )
                )}
            </div>
        </div>
    );
};

export default InputForm;


