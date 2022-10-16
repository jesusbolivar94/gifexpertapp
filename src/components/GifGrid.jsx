import { useEffect, useState } from 'react'

import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ( { category } ) => {

    const [ images, setImages ] = useState([])

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages( newImages )
    }

    useEffect( () => {

        getImages()

    }, [] )

    return (
        <div className="mb-5">
            <h2
                className="font-heading text-xl font-medium pb-1 pr-3 border-b-2 border-stone-300"
            >
                { category }
            </h2>

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