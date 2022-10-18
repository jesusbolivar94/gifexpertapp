import { getGifs } from '../../../src/helpers/getGifs'

describe('Pruebas en el getGifs.js', () => {

    it('Debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs( 'pokemon' )

        // Que regrese un arreglo mayor a 10 items
        expect( gifs.length ).toBeGreaterThan( 0 )

        // Que regrese items con el siguiente formato
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            postUrl: expect.any(String)
        })

    })

})