import { useSelector, useDispatch } from 'react-redux';
import { setComponentData } from '../redux/uiSlice';

function Page1() {
  const dispatch = useDispatch();
  const componentData = useSelector((state) => state.ui.componentData);

  const handleClick = () => {
    dispatch(setComponentData({ buttonClicked: true }));
    console.log('Button clicked!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <h2>Page 1 - Buttons</h2>
      <button
        style={{
          background: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={handleClick}
      >
        Click Me
      </button>
      {componentData.buttonClicked && <p>Button was clicked!</p>}
    </div>
  );
}

export default Page1;