import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Tests", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text:");
    });

    test('should render default 3 items', () =>  {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    it('should text on input, click button and add item to the list', () => {
        const name = "Enes";
        userEvent.type(input, name);
        userEvent.click(button);
        expect(screen.getByText(name)).toBeInTheDocument();
    });

    test('should find button and input in document', () => {
       expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument()
    });
})