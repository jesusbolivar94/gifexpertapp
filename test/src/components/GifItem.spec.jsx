import { render, screen } from '@testing-library/react'

import { GifItem } from '../../../src/components/index.js'

describe('Pruebas en el ', function () {

    const title = 'Saitama'
    const url = 'https://google.com/'

    it('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot()

    })

    it('Debe de mostrar la imagen con el url y alt indicado', () => {

        render( <GifItem title={ title } url={ url }  /> )

        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )

        const { src, alt } = screen.getByRole('img')

        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

    it('Debe de mostrar el titulo en el componente', () => {

        render( <GifItem title={ title } url={ url }  /> )

        expect( screen.getByText( title ) ).toBeTruthy()

    })

})