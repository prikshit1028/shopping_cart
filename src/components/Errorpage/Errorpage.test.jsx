import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import Errorpage from "./Errorpage";

describe('<Errorpage/>',function(){

    it('should render the error properly', function(){

        render(
            <MemoryRouter>
                <Errorpage/>
            </MemoryRouter>
        )

        expect(screen.getByText("Oops! This page doesn't seem to exist 🙁")).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Click here to go back.'})).toBeInTheDocument();




    })




})