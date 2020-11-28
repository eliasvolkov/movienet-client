import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import { Counter } from './Counter';

const RootModel = types.model('RootStore', {
    counter: Counter,
});

const initialState = RootModel.create({
    counter: {},
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const { Provider } = RootStoreContext;
export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}
