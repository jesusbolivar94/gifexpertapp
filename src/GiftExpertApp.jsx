import { useState } from 'react'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

    const onAddCategory = () => {

        setCategories( [ ...categories, 'Hola mundo' ] )

    }

    return (<>
        { /* Titulo */ }
        <h1
            className="text-2xl mb-5 font-bold font-heading">
            GifExpertApp
        </h1>

        { /* Input */ }

        { /* Listado de Gif */ }
        <button
            className="bg-teal-400 px-4 py-2 text-white rounded mb-3 text-sm"
            onClick={ onAddCategory }>
            Agregar
        </button>
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