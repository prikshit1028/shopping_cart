import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import HomePage from './Homepage';

describe('homepage',function(){

    it('should render a piece of text describing the content available on home page',function(){
        render(<HomePage/>)

        expect(screen.getByText("Explore a range of exciting jewellery curated by the world's best experts for you.")).toBeInTheDocument();



    })

    it('should render an image',function(){
        render(<HomePage/>)

        expect(screen.getByRole('img')).toBeVisible();
    });



})