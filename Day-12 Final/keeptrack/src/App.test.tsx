import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ProjectsPage from './Projects/ProjectsPage';
import renderer from 'react-test-renderer';
import { QueryClient, QueryClientProvider } from 'react-query';



describe('<Projectspage />', () => {
  test('should render without crashing', () => {
    render(<App />);
  });
})



