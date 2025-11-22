import './App.css';
import Accordian from './components/accordian';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {

  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStarts={10} /> */}
      {/* <LoadMoreData/> */}
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
