import React, {useEffect} from 'react';

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

	useEffect(()=>{

		document.getElementsByClassName('btn-purchase')[0].addEventListener('click', function purchaseClicked(){
			alert("Thank you for purchase your items");
			let cartItems:any = document.getElementsByClassName('cart-items')[0];
			while(cartItems.hasChildNodes()){
				cartItems.removeChild(cartItems.firstChild);
			}
			updateCarTotal();
		});

		// Adding to cart
		let addingButton = document.getElementsByClassName('shop-item-button');
		for(let i = 0; i < addingButton.length; i++){
			let button = addingButton[i];
			button.addEventListener('click', (event: any)=>{
				let shopItem = event.target.parentElement.parentElement;
				let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
				let image = shopItem.getElementsByClassName('shop-item-image')[0].src;
				let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
				addItemToCart(title, price, image);
				updateCarTotal();
			});
		}

		function addItemToCart(title:any, price:any, image:any){
			let cartRow = document.createElement('div');
			cartRow.classList.add('cart-row');
			let cartItems = document.getElementsByClassName('cart-items')[0];

			// Item already added to the cart validation
			let cartItemsName:any = cartItems.getElementsByClassName('cart-item-title');
			for(let i = 0; i < cartItemsName.length; i++){
				if(cartItemsName[i].innerText == title){
					alert('This item is already added to the cart');
					return;
				}
			}

			let cartRowContent = `
					<div class="cart-item cart-column">
	                    <img class="cart-item-image" src=${image} width="100" height="100" />
	                    <span class="cart-item-title">${title}</span>
	                </div>
	                <span class="cart-price cart-column">${price}</span>
	                <div class="cart-quantity cart-column">
	                    <input class="cart-quantity-input" type="number" value="1" />
	                    <button class="btn btn-danger" type="button">REMOVE</button>
	                </div>
			`;
			cartRow.innerHTML = cartRowContent;
			cartItems.append(cartRow);
			cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItemCart);
			cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click', updateQuantity);
		}

		// Updating item quantity
		function updateQuantity(){
			let quantityInputs = document.getElementsByClassName('cart-quantity-input');
			for(let i = 0; i < quantityInputs.length; i++){
				let input = quantityInputs[i];
				input.addEventListener('change', (event: any)=>{
					if(isNaN(event.target.value) || event.target.value <= 0){
						event.target.value = 1;
					}
					updateCarTotal();
				});
			}
		}
		
		// Remove item from cart
		function removeItemCart(){
			let removeButtons = document.getElementsByClassName('btn-danger');
			for(let i = 0; i < removeButtons.length; i++){
				let button = removeButtons[i];
				button.addEventListener('click', (event: any)=>{
					event.target.parentElement.parentElement.remove();
					updateCarTotal();
				});
			}
		}
		

		// Updating price
		function updateCarTotal(){
			const cartItemsContainer = document.getElementsByClassName('cart-items')[0];
			let cartItems = cartItemsContainer.getElementsByClassName('cart-row');
			let total = 0;
			for(let i = 0; i < cartItems.length; i++){
				let cartItem = cartItems[i];
				let priceItem:any = cartItem.getElementsByClassName('cart-price')[0];
				let quantityItems:any = cartItem.getElementsByClassName('cart-quantity-input')[0];

				let price = parseFloat(priceItem.innerText.replace('$', ''));
				let quantity = quantityItems.value;
				total = total + (price * quantity);
			}
			let totalPrice:any = document.getElementsByClassName('cart-total-price')[0];
			total = Math.round(total * 100) / 100;
			totalPrice.innerText = `$ ${total}`;
		}
	});

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
	                
	            </div>
	            <div className="cart-total">
	                <strong className="cart-total-title">Total</strong>
	                <span className="cart-total-price">$0,00</span>
	            </div>
	            <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
	        </section>
	        <Footer />
	    </div>
	);
}

export default Store;