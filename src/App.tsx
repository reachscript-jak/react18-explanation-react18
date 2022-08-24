import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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
      <ErrorBoundary fallback={<h1>エラーだよ〜</h1>}>
        <Suspense fallback={<p>ローディング中だよ〜</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
