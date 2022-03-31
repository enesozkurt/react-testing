import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe('Counter Tests', () => {
    let increaseBtn, decreaseBtn, count;
    beforeEach(() => {
        console.log("Her testten önce çalışacağım");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    })

    beforeAll(() => {
        console.log("En başta 1 kere çalışacağım")
    })

    afterEach(() => {
        console.log("Her testten sonra çalışacağım")
    })

    afterAll(() => {
        console.log("En son 1 kere çalışacağım")
    })

    test('should increase Button', () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1")
    });

    test('should decrese Button', () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1")
    });
})
