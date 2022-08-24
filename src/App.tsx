import './App.css';
import { AutoBatchEventHandler } from './componens/AutoBatchEventHandler';
import { AutoBatchOther } from './componens/AutoBatchOther';
import { Transition } from './componens/Transition';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
    </div>
  );
}

export default App;
