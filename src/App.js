import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from './redux/uiSlice';
import './App.scss'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.ui.activePage);

  const pages = {
    page1: <Page1 />,
    page2: <Page2 />,
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>UI Showcase</h1>
      <nav>
        <button onClick={() => dispatch(setActivePage('page1'))}>Page 1</button>
        <button onClick={() => dispatch(setActivePage('page2'))}>Page 2</button>
      </nav>
      <div style={{ marginTop: '20px' }}>{pages[activePage]}</div>
    </div>
  );
}

export default App;