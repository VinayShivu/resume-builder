import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

{
  /*

    {
        - Scripts to include store
            import { Provider } from 'react-redux';
            import { store } from './Redux/Store';

        -- Inside component renderer
            <Provider store={store}>

            </Provider>
    }

    // NEW APPROACH USING REACT HOOKS

    {

        import { useSelector, useDispatch } from 'react-redux';

        -- Add below lines inside component
            const dispatch = useDispatch();
            const count = useSelector((state) => state.getCounter);

        -- Dispatch action on any event
            dispatch({type: 'COUNTERDATA', payload: count + 1})

    }

    // OLD APPROACH

    {
        - Import and implement Redux in files
            import { connect } from 'react-redux';
            import { updateCounter } from './Redux/Action';

        --Add below lines outside React component
            function mapStateToProps(state) {
                 return {
                    getCounter: state.getCounter
                }
            } 

        --- Import dispatch and getCounter from props
            const { dispatch, getCounter } = props;
            dispatch(updateCounter(getCounter + 1));	// To update counter

         ---- Export React component as
            export default connect(mapStateToProps)(Component_Name);
    }

*/
}
