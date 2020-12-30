export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("shoppiesNominatedState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("shoppiesNominatedState", serializedState);
    } catch (error) {
        // ignore errors
    }
};