import { render } from '@testing-library/react';    
import App from './App';

describe('App', () => {
    it('Should render correctly', () => {
        expect(render(<App />)).toBeTruthy();
    });
});