import { useState } from 'react'
import {AddCategory} from './components/AddCategory'

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
        <AddCategory />

        { /* Listado de Gif */ }
        <button
            className="bg-cyan-600 hover:bg-cyan-500 transition-all px-4 py-2 text-white rounded mb-5 text-xs"
            onClick={ onAddCategory }>
            Agregar
        </button>
        <ol className="list-decimal list-outside ml-4">
            { categories
                .map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
        </ol>
            { /* Gif Item */ }
    </>)
}