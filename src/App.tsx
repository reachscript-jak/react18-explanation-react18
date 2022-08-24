import './App.css';
import { AutoBatchEventHandler } from './componens/AutoBatchEventHandler';
import { AutoBatchOther } from './componens/AutoBatchOther';
import { ReactQuery } from './componens/ReactQuery';
import { Transition } from './componens/Transition';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ReactQuery />
    </div>
  );
}

export default App;
