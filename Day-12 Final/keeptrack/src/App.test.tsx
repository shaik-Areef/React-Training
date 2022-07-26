import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ProjectsPage from './Projects/Projects_page';
import renderer from 'react-test-renderer';



describe('<Projectspage />', () => {
  test('should render without crashing', () => {
    render(<App />);
  });

  test('snapshot', () => {
    const tree = renderer.create(<ProjectsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


