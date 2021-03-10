import React from 'react';

// Components
import Navigation 	from '../components/Navigation';
import Footer 		from '../components/Footer';

// Images
import ImgAlbum1	from '../images/album1.png';
import ImgAlbum2	from '../images/album2.png';
import ImgAlbum3	from '../images/album3.png';
import ImgAlbum4	from '../images/album4.png';
import ImgShirt		from '../images/shirt.png';
import ImgCoffe		from '../images/coffe.png';

function Store(){
	return(
		<div id="store">
			<header className="main-header">
	            <Navigation />
	            <h1 className="band-name band-name-large">The Generics</h1>
	        </header>
	        <section className="container content-section">
	            <h2 className="section-header">MUSIC</h2>
	            <div className="shop-items">
	                <div className="shop-item">
	                    <span className="shop-item-title">Album 1</span>
	                    <img className="shop-item-image" src={ImgAlbum1} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$12.99</span>
	                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
	                    </div>
	                </div>
	                <div className="shop-item">
	                    <span className="shop-item-title">Album 2</span>
	                    <img className="shop-item-image" src={ImgAlbum2} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$14.99</span>
	                        <button className="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
	                    </div>
	                </div>
	                <div className="shop-item">
	                    <span className="shop-item-title">Album 3</span>
	                    <img className="shop-item-image" src={ImgAlbum3} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$9.99</span>
	                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
	                    </div>
	                </div>
	                <div className="shop-item">
	                    <span className="shop-item-title">Album 4</span>
	                    <img className="shop-item-image" src={ImgAlbum4} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$19.99</span>
	                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
	                    </div>
	                </div>
	            </div>
	        </section>
	        <section className="container content-section">
	            <h2 className="section-header">MERCH</h2>
	            <div className="shop-items">
	                <div className="shop-item">
	                    <span className="shop-item-title">T-Shirt</span>
	                    <img className="shop-item-image" src={ImgShirt} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$19.99</span>
	                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
	                    </div>
	                </div>
	                <div className="shop-item">
	                    <span className="shop-item-title">Coffee Cup</span>
	                    <img className="shop-item-image" src={ImgCoffe} />
	                    <div className="shop-item-details">
	                        <span className="shop-item-price">$6.99</span>
	                        <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
	                    </div>
	                </div>
	            </div>
	        </section>
	        <section className="container content-section">
	            <h2 className="section-header">CART</h2>
	            <div className="cart-row">
	                <span className="cart-item cart-header cart-column">ITEM</span>
	                <span className="cart-price cart-header cart-column">PRICE</span>
	                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
	            </div>
	            <div className="cart-items">
	                <div className="cart-row">
	                    <div className="cart-item cart-column">
	                        <img className="cart-item-image" src={ImgShirt} width="100" height="100" />
	                        <span className="cart-item-title">T-Shirt</span>
	                    </div>
	                    <span className="cart-price cart-column">$19.99</span>
	                    <div className="cart-quantity cart-column">
	                        <input className="cart-quantity-input" type="number" value="1" />
	                        <button className="btn btn-danger" type="button">REMOVE</button>
	                    </div>
	                </div>
	                <div className="cart-row">
	                    <div className="cart-item cart-column">
	                        <img className="cart-item-image" src={ImgAlbum3} width="100" height="100" />
	                        <span className="cart-item-title">Album 3</span>
	                    </div>
	                    <span className="cart-price cart-column">$9.99</span>
	                    <div className="cart-quantity cart-column">
	                        <input className="cart-quantity-input" type="number" value="2" />
	                        <button className="btn btn-danger" type="button">REMOVE</button>
	                    </div>
	                </div>
	            </div>
	            <div className="cart-total">
	                <strong className="cart-total-title">Total</strong>
	                <span className="cart-total-price">$39.97</span>
	            </div>
	            <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
	        </section>
	        <Footer />
	    </div>
	);
}

export default Store;