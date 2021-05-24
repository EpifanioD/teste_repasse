import { createContext } from 'react';

const StoreContent = createContext({
    token: null,
    setToken: () => { },
});

export default StoreContent;