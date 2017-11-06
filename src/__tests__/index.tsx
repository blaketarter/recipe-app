(global as any).requestAnimationFrame = (callback: any) => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
