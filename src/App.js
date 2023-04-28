
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import { ROUTER } from './Route';

function App() {
  // console.log('//////////////////');
  return (<>
    <BrowserRouter>
      <div className='App'>
        <Routes>

          {ROUTER.map(({ url, component: Component }) => {
            return (
              <Route exact path={url} element={< Component />}></Route>
            )
          })

          }

        </Routes>
      </div>
    </BrowserRouter>

  </>

  );
}
export default App;
