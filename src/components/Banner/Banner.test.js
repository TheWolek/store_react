import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import Header from './header';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders header", () => {
    act(() => {
        render(<Header />, container);
    });

    expect(container.childNodes[0].childNodes[0].src).toBe("logo.png");
    // expect(container).toBe("Hello react");
});
