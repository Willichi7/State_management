import ReactDOM from 'react-dom/client';
import counterReducer from './counterReducer';
import { createStore } from 'redux';

const store = createStore(counterReducer);

const App = () => {
  const { good, ok, bad } = store.getState();

  return (
    <div>

      <button onClick={() => store.dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={() => store.dispatch({ type: 'OK' })}>ok</button>
      <button onClick={() => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
};

renderApp();
store.subscribe(renderApp);

export default App;
