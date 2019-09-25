import React, {Component}from 'react';
import module from './Slider.module.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



class Slider extends Component{
    
    render(){
        return( 
            <AwesomeSlider className = {module.aws_btn} bullets= {false} >
                <div className = {module.slider__item} data-src = 'https://image.freepik.com/free-photo/close-up-photo-tennis-ball-hitting-net-sport-concept_8353-6582.jpg'>
                    <p className = {module.slider__text}>I believe I can fly</p>
                </div>
                <div className ={module.slider__item}  data-src = 'https://image.freepik.com/free-photo/tennis-ball-hard-court-corner-line_1150-6396.jpg'>
                    <p className = {module.slider__text}>Irwin is the GOAT anime character</p>
                </div>
                <div className = {module.slider__item}  data-src = 'https://image.freepik.com/free-photo/close-up-tennis-racket-with-ball_23-2148218737.jpg'>
                    <p className = {module.slider__text }>It is gonna be a nice website</p>
                </div>
            </AwesomeSlider>
        )
        
    }
        
}

export default Slider;