export interface State {
    draft: string;
    todo: {
        id: number;
        text: string;
        bgColor:string,
        shade:string
    }[];
}

