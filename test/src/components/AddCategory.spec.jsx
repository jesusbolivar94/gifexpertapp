import { fireEvent, render, screen } from '@testing-library/react'

import { AddCategory } from '../../../src/components'

describe('Pruebas en el <AddCategory />', () => {

    const inputValue = 'Pokemon'

    it('Debe de hacer match con el snapshot', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        const { container } = render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )
        expect( container ).toMatchSnapshot()

    })

    it('Debe de cambiar el valor de la caja de texto', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )

        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: inputValue } } )
        expect( input.value ).toBe( inputValue )

    })

    it('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )

        expect( input.value ).toBe('')

        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue.trim() )

    })

    it('Debe de llamar el cleanCategories al hacer clic en el boton limpiar', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )

        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: inputValue } } )

        const button = screen.getByRole('button', { name: 'Buscar' })
        fireEvent.click( button )

        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)

    })

    it('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( onNewCategory ).not.toHaveBeenCalled()

    })

    it('Debe de llamar el cleanCategories al hacer clic en el boton limpiar', () => {

        const onNewCategory = jest.fn()
        const cleanCategories = jest.fn()

        render(
            <AddCategory
                onNewCategory={ onNewCategory }
                cleanCategories={ cleanCategories }
            />
        )

        const button = screen.getByRole('button', { name: 'Limpiar' })
        fireEvent.click( button )

        expect( cleanCategories ).toHaveBeenCalled()
        expect( cleanCategories ).toHaveBeenCalledTimes(1)

    })

})