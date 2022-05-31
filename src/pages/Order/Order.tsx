{/* <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap" rel="stylesheet" /> */ }
import '../Order/order.css';
import illHero from '../../images/illustration-hero.svg';
import iconMusic from '../../images/icon-music.svg';

export const Order = () => {
    return (
        <div className='container-principal'>
            <div className='card-container'>
                <img className='img-hero' src={illHero} alt="ilustration hero" />
                <div className='txt-container'>
                    <h1 className='title-card'>Order Summary</h1>
                    <p className='txt-card'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                </div>
                <div className='plan-container'>
                    <img className='icon-music' src={iconMusic} alt="icon Music" />
                    <div className='price-container'>
                        <p className='plan-txt'>Anual Plan</p>
                        <p className='price-txt'>$59.99/year</p>
                    </div>
                    <p className='change-txt'>Change</p>
                </div>
                <div className='btn-container'>
                    {/* <button className='btn-new'>Proced to Payment</button> */}
                    <p className='btn-payment'>Proceed to Payment</p>
                    <p className='btn-cancel'>Cancel Order</p>
                </div>
            </div>
        </div>
    )
}
