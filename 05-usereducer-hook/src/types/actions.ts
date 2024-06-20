export interface Action {
    id?:number,
    type: 'added_todo' | 'update_input' | 'update_todo' | 'delete_todo';
    nextDraft?: string;
}
