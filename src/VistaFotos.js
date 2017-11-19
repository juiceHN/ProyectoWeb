import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../node_modules/swiper/dist/css/swiper.css';
import twitter from 'react-icons/lib/io/social-twitter-outline'

export default class VistaFotos extends Component {
    constructor(props) {
      super(props)
      this.goNext = this.goNext.bind(this)
      this.goPrev = this.goPrev.bind(this)
      this.swiper = null
    }
      goNext() {
        if (this.swiper) this.swiper.slideNext()
      }

      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      }
  render() {
    const params = {
          slidesPerView: 3,
          loop: true,
        }
    return (
    <div className='visor'>
      <div className='gradiente' />
      <Swiper {...params} ref={node => {if(node) this.swiper = node.swiper} }>
            <img className="pics" src="https://assets.awwwards.com/bundles/tvweb/images/book/2017/case-studies-vol3/slides/brain-food-1.jpg?v=2"/>
            <img className="pics" src="https://assets.awwwards.com/bundles/tvweb/images/book/2017/case-studies-vol3/slides/brain-food-2.jpg?v=2"/>
            <img className="pics" src="https://assets.awwwards.com/bundles/tvweb/images/book/2017/case-studies-vol3/slides/brain-food-3.jpg?v=2"/>
            <img className="pics" src="https://assets.awwwards.com/bundles/tvweb/images/book/2017/case-studies-vol3/slides/brain-food-5.jpg?v=2"/>
            <img className="pics" src="https://assets.awwwards.com/bundles/tvweb/images/book/2017/case-studies-vol3/slides/brain-food-4.jpg?v=2"/>
      </Swiper>
      <button onClick={this.goPrev}>←</button>
      <button onClick={this.goNext}>→</button>
    </div>
    )
  }
}