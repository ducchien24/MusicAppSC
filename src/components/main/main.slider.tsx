'use client'
import React from 'react'
import Container from '@mui/material/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider,{Settings} from "react-slick";
import { Box, Button, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Padding } from '@mui/icons-material';
const MainSlider = () => {
    const NextButton = (props:any) => { 
      return (
        <Button  
        variant='outlined'
        onClick={props.onClick}
        sx={{
          position:'absolute',
          right:0,
          top:"50%",
          zIndex:2,
          minWidth:30,
          width:35
        }}
        >
             <ChevronRightIcon/>
        </Button>
      )
    }
    const PreviewButton = (props:any) => { 
       return (
        <Button  
        variant='outlined'
        onClick={props.onClick}
        sx={{
          position:'absolute',
          left:0,
          top:"50%",
          zIndex:2,
          minWidth:30,
          width:35
        }}
        >
             <ChevronLeftIcon/>
        </Button>
       )
    }
    const settings : Settings= {
        
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextButton/>,
        prevArrow: <PreviewButton/>,
      };
      
  return (
    <>
    <Box
     sx={{
        margin: "0 50px",
        ".abc":{
            padding : "0 10px"
        },
        "h3" : {
            border: "1px solid #ccc",
            padding: "20px",
            height : "200px"
        }
     }}
    >
        <h2>Mutiple tracks</h2>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    <Divider/>  
    </Box>
    
    <Box
     sx={{
        margin: "0 50px",
        ".abc":{
            padding : "0 10px"
        },
        "h3" : {
            border: "1px solid #ccc",
            padding: "20px",
            height : "200px"
        }
     }}
    >
        <h2>Mutiple tracks</h2>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    <Divider/>  
    </Box>
    <Box
     sx={{
        margin: "0 50px",
        ".abc":{
            padding : "0 10px"
        },
        "h3" : {
            border: "1px solid #ccc",
            padding: "20px",
            height : "200px"
        }
     }}
    >
        <h2>Mutiple tracks</h2>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    <Divider/>  
    </Box>
   </>
  )
}

export default MainSlider