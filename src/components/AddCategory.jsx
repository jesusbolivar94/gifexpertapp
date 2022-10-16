import { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ( { target } ) => {

        setInputValue( target.value )

    }

    const onSubmit = ( event ) => {

        event.preventDefault()

        if ( inputValue.trim().length <= 1 ) return

        setCategories( categories => [ inputValue, ...categories ] )
        setInputValue( '' )

    }

    return (
        <form
            className="flex items-stretch gap-x-3 mb-4"
            onSubmit={ onSubmit }
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
                Agregar
            </button>
        </form>
    )
}