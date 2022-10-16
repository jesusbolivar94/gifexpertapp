import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

    const onAddCategory = ( newCategory ) => {

        setCategories( [ newCategory, ...categories ] )

    }

    return (<>
        { /* Titulo */ }
        <h1
            className="text-2xl mb-5 font-bold font-heading">
            GifExpertApp
        </h1>

        { /* Input */ }
        <AddCategory
            // setCategories={ setCategories }
            onNewCategory={ value => onAddCategory( value ) }
        />

        { /* Listado de Gif */ }
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