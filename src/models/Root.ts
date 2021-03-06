import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import persist from 'mst-persist';
import { Counter } from './Counter';
import { AuthStore } from '../features/auth/store/AuthStore';

const RootModel = types.model('RootStore', {
    counter: Counter,
    authStore: AuthStore,
});

const initialState = RootModel.create({
    counter: {},
    authStore: {},
});

persist('authStore', initialState.authStore, {
    storage: localStorage,
    jsonify: true,
    blacklist: ['loading'],
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
