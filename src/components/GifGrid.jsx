import { getGifs } from '../helpers/getGifs'

export const GifGrid = ( { category } ) => {

    getGifs( category )

    return (
        <div className="mb-5">
            <h2
                className="font-heading inline-block text-xl font-medium pb-1 pr-3 border-b-2 border-stone-300"
            >
                { category }
            </h2>
        </div>
    )

}