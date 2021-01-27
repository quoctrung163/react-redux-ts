export interface Action {
    type: string,
    payload?: string
}

export interface NotesState {
    notes: string[]
}