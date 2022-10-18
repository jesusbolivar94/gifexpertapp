import { render, screen } from '@testing-library/react'

import { GifGrid } from '../../../src/components/index'
import { useFetchGifs } from '../../../src/hooks/useFetchGifs'

jest.mock( '../../../src/hooks/useFetchGifs' )

describe('Pruebas en el <GifGrid />', () => {

    const category = 'Pokemon'

    it('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={ category } /> )

        const cargando = screen.getByRole('heading', { level: 3 })

        expect( cargando ).toBeTruthy()
        expect( cargando.innerHTML ).toBe('Cargando...')

    })

    it('Debe de mostrar el titulo de la categoria', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false,
        })

        render( <GifGrid category={ category } /> )

        const titulo = screen.getByRole('heading', { level: 2 })

        expect( titulo ).toBeTruthy()
        expect( titulo.innerHTML ).toBe( `Resultados de: "${ category }"` )

    })

    it('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Pokemon',
                url: 'https://google.com'
            },
            {
                id: '1234',
                title: 'Digimon',
                url: 'https://google.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getAllByRole('img').length ).toBe(2)

    })

})