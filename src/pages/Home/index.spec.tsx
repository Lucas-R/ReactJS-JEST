import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { user } from '../../@types/user';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
    it('Should render correctly', () => {
        expect(render(
            <Home user={user} />, { wrapper: BrowserRouter }
        )).toBeTruthy();
    });

    it('Should name user', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        expect(screen.getByText(/lucas rodrigues/i)).toBeInTheDocument();
    });

    it('Should user login', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        expect(screen.getByText(/lucas-r/i)).toBeInTheDocument();
    });

    it('Should user location', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        expect(screen.getByText(/itanhaém-SP/i)).toBeInTheDocument();
    });

    it('Should user bio', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        expect(screen.getByText(/💻❤🍃 Durma com ideias, acorde com atitudes./i)).toBeInTheDocument();
    });

    it('Should user avatar', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const avatar = screen.getByRole('img');
        expect(avatar).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/19714104?v=4');
        expect(avatar).toHaveAttribute('alt', 'Lucas Rodrigues');
    });

    it('Should user link blog', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const link = screen.getByRole('link', { name: /Blog/i });
        expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/lucasrodriguesbezerra/');
    });

    it('Should user link twitter', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const link = screen.getByRole('link', { name: /Shinigamy_lcs/i });
        expect(link).toHaveAttribute('href', '/');
    });

    it('Should user link public repos', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const link = screen.getByRole('link', { name: /Repos 17/i });
        expect(link).toHaveAttribute('href', 'https://api.github.com/users/Lucas-R/repos');
    });

    it('Should user link followers', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const link = screen.getByRole('link', { name: /9 followers/i });
        expect(link).toHaveAttribute('href', '/followers');
    });

    it('Should user link following', () => {
        render(<Home user={user} />, { wrapper: BrowserRouter })
        const link = screen.getByRole('link', { name: /7 following/i });
        expect(link).toHaveAttribute('href', '/followers');
    });
});