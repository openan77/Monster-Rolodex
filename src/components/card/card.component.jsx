import './card.styles.css'

const Card = ( {monster} ) => {
    return(
        <div className='card-container'>
            <img src={ `https://robohash.org/${monster.id}?set=set2&size=180x180` } alt={`monster ${monster.name}`} />
            <h1 key={ monster.id }>{ monster.name }</h1>
            <p>{monster.email}</p>
        </div>
    )
}
 
export default Card;