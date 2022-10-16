import { useState } from 'react'

import { AddCategory, GifGrid } from './components/index'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([])

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return

        setCategories( [ newCategory, ...categories ] )

    }

    const cleanCategories = () => {

        setCategories([])

    }

    return (<>
        <h1
            className="text-2xl mb-5 font-bold font-heading">
            GifExpertApp
        </h1>

        <AddCategory
            onNewCategory={ value => onAddCategory( value ) }
            cleanCategories={ cleanCategories }
        />

        {
            categories.map( category => (
                <GifGrid
                    key={ category }
                    category={ category }
                />
            ) )
        }
    </>)
}