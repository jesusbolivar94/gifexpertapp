import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory, cleanCategories } ) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ( { target } ) => {

        setInputValue( target.value )

    }

    const onSubmit = ( event ) => {

        event.preventDefault()

        const newValue = inputValue.trim()

        if ( newValue.length <= 1 ) return

        // setCategories( categories => [ inputValue, ...categories ] )
        setInputValue( '' )
        onNewCategory( newValue )

    }

    return (
        <form
            className="flex items-stretch gap-x-3 mb-8"
            onSubmit={ onSubmit }
            aria-label="form"
        >
            <input
                className="placeholder:font-thin placeholder-stone-400 text-stone-800 font-heading font-medium"
                type="text"
                placeholder="Buscar gifs"
                onChange={ ( event ) => onInputChange( event ) }
                value={ inputValue }
            />
            <button
                className="bg-cyan-600 hover:bg-cyan-500 transition-all px-4 py-2 text-white font-medium rounded text-xs">
                Buscar
            </button>
            <button
                type="reset"
                onClick={ cleanCategories }
                className="bg-neutral-500 px-4 py-2 text-white font-medium rounded text-xs">
                Limpiar
            </button>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    cleanCategories: PropTypes.func.isRequired
}