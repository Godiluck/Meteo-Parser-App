import Header from './header'
import GraphicPage from "./GraphicPage";
import {observer} from "mobx-react-lite";
import Rechart from "./rechart";
import GraphicTarget from "./graphicTarget";

const App = observer(() => {
  return (
    <div className="App">
        <Header/>
        <GraphicPage/>
        <Rechart/>
        <GraphicTarget/>
    </div>
  );
})

export default App;
