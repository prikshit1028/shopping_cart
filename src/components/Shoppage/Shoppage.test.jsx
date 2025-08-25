import { describe, it, expect,vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import Shoppage from "./Shoppage";



const mockedUpdater = vi.fn(function(){
    return 'mocked updater was called';
})
const mockedContextData = [[],mockedUpdater];

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
    return {
    ...actual,
    useOutletContext: () => mockedContextData, 
  };
});



const mockedData = [{title:'productOne',price:'50',image:'someurl'},{title:'productTwo',price:'60',image:'someurl'},{title:'productThree',price:'70',image:'someurl'}];
globalThis.fetch = vi.fn(function(){
    return Promise.resolve(
        {json: function(){
            return Promise.resolve(mockedData)
        }}
    )
});



vi.mock('../RenderProduct/RenderProduct',function(){
    return{ 
        default: function(props){
            return (
                <>
                <div>{props.productobj.title}</div>
                <div>{props.productobj.price}</div>
                <img src={props.productobj.image} alt="someimage" />
                <div>{props.cartCountVal.length} is the total items in the cart.</div>
                <div>{(typeof(props.cartCountUpdater)=='function') && 'a function is provided'}</div>

                </>
            )
        }
    }
})




describe('shop component', function(){

    it('should render loading', async function(){

        render(<MemoryRouter>
            <Shoppage/>
        </MemoryRouter>)

        // let final = await screen.findByText("Loading...");
        // expect(final).toBeInTheDocument();
        expect(screen.getByText("Loading...")).toBeInTheDocument();

    })


    it('should call the fetch',function(){
        render(<MemoryRouter>
            <Shoppage/>
        </MemoryRouter>)

        expect(fetch).toHaveBeenCalled();
    })


    describe('should render data received from the fetch',function(){


        it('should render the title correctly', async function(){
        render(<MemoryRouter>
            <Shoppage/>

        </MemoryRouter>)

        // let nodeTitleOne =  await screen.findByText('productOne');
        // let nodeTitleTwo =  await screen.findByText('productTwo');
        // let nodeTitleThree =  await screen.findByText('productThree');

        let result = await Promise.all([screen.findByText('productOne'),screen.findByText('productTwo'),screen.findByText('productThree')]);
        result.forEach(function(ele){
            expect(ele).toBeInTheDocument();
        })



    })


        it('should render the price correctly', async function(){
            render(
                <MemoryRouter>
                    <Shoppage/>
                </MemoryRouter>
            )

            let result = await Promise.all([screen.findByText('50'),screen.findByText('60'),screen.findByText('70')]);
            result.forEach(function(ele){
                expect(ele).toBeInTheDocument();
            })

        })


        it ('should render the image correctly', async function(){
            render(
                <MemoryRouter>
                    <Shoppage/>
                </MemoryRouter>
            )

            let result = await screen.findAllByAltText('someimage');
            result.forEach(function(ele){
                expect(ele).toBeInTheDocument();
            })



        })

        it('should render the cartCountVal prop correctly', async function(){
            render(
                <MemoryRouter>
                    <Shoppage/>
                </MemoryRouter>
            )

            let result = await screen.findAllByText('0 is the total items in the cart.');
            result.forEach(function(ele){
                expect(ele).toBeInTheDocument();
            })
        })


        it('should render the cartCountUpdater prop correctly', async  function(){
            render(
                <MemoryRouter>
                    <Shoppage/>
                </MemoryRouter>
            )

            let result = await screen.findAllByText('a function is provided');
            result.forEach(function(ele){
                expect(ele).toBeInTheDocument();
            })
        })




    })

})