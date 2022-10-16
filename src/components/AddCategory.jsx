import { useState } from 'react'

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ( { target } ) => {

        setInputValue( target.value )

    }

    const onSubmit = ( event ) => {
        event.preventDefault()

        console.log( inputValue )
    }

    return (
        <form onSubmit={ event => onSubmit( event ) }>
            <input
                className="mb-4 block placeholder:font-normal placeholder-stone-400 text-stone-800 font-heading font-medium"
                type="text"
                placeholder="Buscar gifs"
                onChange={ ( event ) => onInputChange( event ) }
                value={ inputValue }
            />
        </form>
    )
}