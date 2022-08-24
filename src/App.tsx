import { Suspense } from 'react';
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
      <Suspense fallback={<p>ローディング中だよ〜</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
