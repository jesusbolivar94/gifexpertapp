import { useState } from 'react'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

    console.log( categories )

    return (<>
        { /* Titulo */ }
        <h1
            className="text-2xl mb-5 font-bold font-heading">
            GifExpertApp
        </h1>

        { /* Input */ }

        { /* Listado de Gif */ }
        <ol className="list-decimal list-outside">
            { categories
                .map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
        </ol>
            { /* Gif Item */ }
    </>)
}