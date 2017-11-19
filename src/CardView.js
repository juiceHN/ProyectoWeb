import React, { Component } from 'react';
import Card from './Card'

class CardView extends Component{
	render(){
		return(
			<div className='viewer'>
				<Card 
				title='Brain Food! Volume 2: Winners of the year 2016'
				imglink='https://assets.awwwards.com/bundles/tvweb/images/shop/brain-food-vol2.jpg'
				link='https://www.awwwards.com/brain-food-digital-book-vol2/'
				/>
				<Card
				title='Brain Food! Extra: Tasty Type Tips'
				imglink='https://assets.awwwards.com/bundles/tvweb/images/shop/brain-food-typography.jpg'
				link='https://www.awwwards.com/brain-food-typography-tips/'
				/>
				<Card
				title='Brain Food! Extra: WebGL Performance Tips'
				imglink='https://assets.awwwards.com/bundles/tvweb/images/shop/brain-food-webgl.jpg'
				link='https://www.awwwards.com/brain-food-webgl-performance-tips/'
				/>
				<Card
				title='Brain Food for Digital Creatives Vol.1'
				imglink='https://assets.awwwards.com/bundles/tvweb/images/shop/brain-food.jpg'
				link='https://www.awwwards.com/brain-food-digital-book/'
				/>
			</div>
			)
	}
}
export default CardView;