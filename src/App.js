import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserComponent from './components/UserComponent'

//practice
import Fight from './practice/practiceComp/Fight'
import practiceStore from './practice/practiceRedux/practiceStore'

function App() {
  return (
     <Provider store={store}>
	    <div className="App">
        <UserComponent />
        {/*<ItemContainer cake/>
        <ItemContainer />
        <NewCakeContainer />
	      <HooksCakeContainer />
	      <CakeContainer />
	      <IceCreamContainer />*/}
	    </div>
    </Provider>
    
    /*practice*/
    /*<Provider store={practiceStore}>
    	<div className="App">
    		<Fight id='practice'/>
    	</div>
    </Provider>*/
  )
}

export default App;
