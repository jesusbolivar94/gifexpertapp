import PropTypes from 'prop-types'

export const GifItem = ( { title, url, postUrl } ) => {

    return (
        <>
            <a
                target="_blank"
                href={ postUrl }
                className="max-w-xs w-60 block text-center shadow hover:shadow-lg p-2 hover:cursor-pointer transition-shadow bg-slate-50 rounded"
            >
                <img className="rounded" src={ url } alt={title} />
                <span
                    className="text-xs text-stone-600 block my-1 p-4 text-center bg-transparent"
                >
                    { title }
                </span>
            </a>
        </>
    )

}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}