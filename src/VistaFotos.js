
    import React, { Component } from 'react';
    import Swiper from 'react-id-swiper';
     import '../node_modules/swiper/dist/css/swiper.css'

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
              slidePerView:'auto',
              pagination:{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            }
        return (
      <div>
        <Swiper {...params} ref={node => {if(node) this.swiper = node.swiper} }>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Swiper>
        <button onClick={this.goNext}>Next</button>
        <button onClick={this.goPrev}>Prev</button>
      </div>
        )
      }
    }