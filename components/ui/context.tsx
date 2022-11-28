import { createContext, FC, PropsWithChildren, useContext, useReducer } from 'react';

// type
export interface StateModifiers {
    closeSidebar: () => void;
    openSidebar: () => void;
}

export interface StateValues {
    isSidebarOpen: boolean;
}

type State = StateValues & StateModifiers;
// type

// initial state
const StateModifiers = {
    openSidebar: () => {},
    closeSidebar: () => {},
}

const initialState = {
    isSidebarOpen: false,
}
// initial state  

type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' };

function uiReducer(state: StateValues, action: Action) {
    switch (action.type) {
        case 'OPEN_SIDEBAR':
            return { ...state, isSidebarOpen: true };
        case 'CLOSE_SIDEBAR':
            return { ...state, isSidebarOpen: false };
        default:
            return state;
    }
}

const UIContext = createContext<State>({
    ...initialState,
    ...StateModifiers,
});

export const UIProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
    const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });

    const value = {
        ...state,
        openSidebar,
        closeSidebar,
    }
    return (
        <UIContext.Provider value={value}>
            {children}   
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext);
    return context;
}