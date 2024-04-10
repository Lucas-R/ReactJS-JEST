import { render } from '@testing-library/react';    
import { Router } from './Router';

describe('App', () => {
    it('Should render correctly', () => {
        expect(render(<Router />)).toBeTruthy();
    });
});