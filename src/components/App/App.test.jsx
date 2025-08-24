import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import App from "./App.jsx";

describe('<App/>' , function(){
    it('should render a heading',function(){
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByText('eBay!')).toBeInTheDocument()



    }
);

    it('should render a footer', function(){
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    });

    it('should render the correct navigation links',function(){
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole('link',{name:'Shop'})).toBeInTheDocument()
        expect(screen.getByRole('link',{name:'Contact'})).toBeInTheDocument()
        expect(screen.getByRole('link',{name:'Home'})).toBeInTheDocument()
        expect(screen.getByRole('link',{name:'Cart'})).toBeInTheDocument()


    })


    })

