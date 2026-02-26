import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

test('renders ClearUI navigation and default section', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/ClearUI/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Button Component/i })).toBeInTheDocument();
});
