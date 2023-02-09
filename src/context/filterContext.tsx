import React, {
    Context,
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

export type ContextValue = {
    from: number | null;
    to: number | null;
    refresh?: string | null;
};

export type ContextType = {
    filter: ContextValue;
    setFilter: Dispatch<SetStateAction<ContextValue>>;
};

const INITIAL_CONTEXT: ContextType = {
    filter: {
        from: null,
        to: null,
        refresh: null,
    },
    setFilter: () => undefined,
};

export const FiltersContext = createContext(INITIAL_CONTEXT);

export const FilterContextProvider: React.FC<{
    children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
    const [filter, setFilter] = useState(INITIAL_CONTEXT.filter);

    return (
        <FiltersContext.Provider value={{ filter, setFilter }}>
            {children}
        </FiltersContext.Provider>
    );
};
