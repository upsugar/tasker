import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from './App';

describe('App', () => {

    it('App is rendering', () => {
        render(<App />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('Set up')).toBeInTheDocument();
    });

    it('typing in textbox is working', () => {
        render(<App />);

        expect(screen.queryByDisplayValue(/Hello/)).toBeNull();

        userEvent.type(screen.getByRole('textbox'), 'New task');

        expect(screen.queryByDisplayValue(/New task/)).toBeInTheDocument();
    });

    it('adding a task is working', () => {
        render(<App />);

        expect(screen.getByText('Present')).toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 'New task');
        userEvent.click(screen.getByText('Add'));

        expect(screen.getByText(/New task/)).toBeInTheDocument();

    })
})
