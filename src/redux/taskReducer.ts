// constants

enum ActionsType {
    ADD_TASK = 'task/ADD_TASK',
    DELETE_TASK = 'task/DELETE_TASK'
}

type TaskType = {
    id: string
    taskText: string
    date: Date
    userId: string
    rate: number
}

// InitialState

let initialState = {
    task: [] as Array<TaskType>
}

type InitialStateType = typeof initialState

// ActionCreators
const ActionCreators = {
    addTaskAC: (text: string, userId: string) => ({ type: ActionsType.ADD_TASK, text, userId } as const),
    deleteTaskAC: (id: string) => ({ type: ActionsType.DELETE_TASK, id } as const),
}
type ActionType = GetActionsTypes<typeof ActionCreators>
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>


let taskReducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case ActionsType.ADD_TASK:
            return {
                ...state
            }
        case ActionsType.DELETE_TASK:
            return {
                ...state
            }
        default:
            return state
    }
}

export default taskReducer