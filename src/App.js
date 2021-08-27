import './App.css';
import LetCostVar from "./ES6Module/LetConstVar"
import ArrowFun from "./ES6Module/ArrowFun"
import SpreadOperator from "./ES6Module/SpreadOperator"
import RestOperator from './ES6Module/RestOperator';
import TemplateString from './ES6Module/TemplateString';
import ArrayConcatinate from './ES6Module/ArrayConcating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        "ES 6 Features"
        <LetCostVar/>
        <ArrowFun/>
        <SpreadOperator/>
        <RestOperator/>
        <TemplateString/>
        <ArrayConcatinate/>
      </header>
    </div>
  );
}

export default App;
