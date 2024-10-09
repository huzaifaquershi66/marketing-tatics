import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage ke liye
import userDataReducer from './userdataslice'; // apna correct slice path use karo
import authReducer from './userslice'; // apna correct slice path use karo

// CombineReducers ka use karke userData aur auth ko combine karo
const rootReducer = combineReducers({
    userData: userDataReducer,
    auth: authReducer,
});

// Redux-persist ka config set karo
const persistConfig = {
    key: 'root',
    storage,
};

// PersistedReducer ko create karo
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store ko configure karo with persisted reducer
const store = configureStore({
    reducer: persistedReducer,
    // Middleware redux-persist ke liye
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // redux-persist ke conflicts ko avoid karne ke liye
    }),
});

// Persistor ko set karo
const persistor = persistStore(store);

// Store aur persistor ko export karo
export { store, persistor };

