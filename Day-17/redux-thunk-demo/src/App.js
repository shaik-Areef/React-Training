
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LogState, { initialState } from './Redux-thunk-container';

export const LOAD_PHOTOS_REQUEST = 'LOAD_PHOTOS_REQUEST';
export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
export const LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';

export const store = createStore(reducer, applyMiddleware(thunk));

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PHOTOS_REQUEST:
      return { ...state, processing: true };
    case LOAD_PHOTOS_SUCCESS:
      return { ...state, processing: false, photos: action.payload };
    case LOAD_PHOTOS_FAILURE:
      return { ...state, processing: false, error: action.payload.message };
    default:
      return state;
  }
}

function App() {
  return (
    <div >
      <Provider store={store}>
        <LogState />
      </Provider>

    </div>
  );
}

export default App;
