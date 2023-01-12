import './card.styles.css'

const Card = ({ articles }) => {
    const { title, urlToImage,url} = articles;
    return (
        <div className='card-container' >
            
            <img
                className='card-image'
                src={urlToImage}
                alt={title}
            />
            <div className='product-title'>
                <h3>{title}</h3>
    
            </div>
            <button><a href={url}> Haberin devamı...</a></button>
        </div>
    )
}


export default Card;