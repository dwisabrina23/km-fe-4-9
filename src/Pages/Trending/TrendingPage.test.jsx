import React from 'react';
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrendingPage from './TrendingPage';

jest.mock("axios");

describe("Trending page", () => {
    test("fetch data from trending Giphy API", async() => {
        const trending = [
            { url: "testurl.com", title: "object1" },
            { url: "testurl.com", title: "object2" },
            { url: "testurl.com", title: "object3" },
        ];
        axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { data: trending } })
      );
      render(<TrendingPage />);
       const items = await screen.findAllByTestId("gif");

        expect(items).toHaveLength(3);
    });

    // test("fetches trending gif from an API and fails", async () => {
    //     axios.get.mockImplementationOnce(() =>
    //       Promise.reject(new Error("Error Jaringan"))
    //     );
    
    //     render(<TrendingPage />);
    //     const message = await screen.findByText(/Ada yang error/);
    
    //     expect(message).toContainHTML();
    //   });
})