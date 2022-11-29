import { createContext, FC, PropsWithChildren, useContext, useMemo, useReducer } from 'react';

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

    // this always create a new object, so the component using this context will always re-render
    // we need to feed it with a memoized value

    // const value = {
    //     ...state,
    //     openSidebar,
    //     closeSidebar,
    // }

    // using useMemo
    // this will only re-render when the state change
    const value = useMemo(() => {
        return {
            ...state,
            openSidebar,
            closeSidebar,
        }
    }, [state.isSidebarOpen])


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