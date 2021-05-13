import { render } from '@testing-library/react';
import Greetings from '../Greetings';

test('renders without crashing', () => {
  render(<Greetings />);
});
