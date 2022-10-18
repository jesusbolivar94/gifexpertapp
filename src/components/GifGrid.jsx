import PropTypes from 'prop-types'

import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <div className="mb-5">
            {
                !isLoading && (
                    <h2
                        className="font-heading text-xl font-medium pb-1 pr-3 border-b-2 border-stone-300"
                    >
                        { `Resultados de: "${ category }"` }
                    </h2>
                )
            }

            { isLoading && ( <h3 className="text-xl text-stone-600 font-heading">Cargando...</h3> ) }

            <div className="flex flex-wrap items-start gap-x-10 gap-y-7 my-6">
                { images.map( ( image ) =>
                    (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    )
                ) }
            </div>
        </div>
    )

}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}