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
import Link from 'next/link';
interface IProps{
    data:ITrackTop[],
    title: string;
}

const MainSlider = (props:IProps) => {
    // console.log(props.data)
    const { data, title } = props;
    const NextButton = (props:any) => { 
      return (
        <Button  
        color='inherit'
        variant='contained'
        onClick={props.onClick}
        sx={{
            position: "absolute",
            right: 25,
            top: "25%",
            zIndex: 2,
            minWidth: 30,
            width: 35,
        }}
        >
             <ChevronRightIcon/>
        </Button>
      )
    }
    const PreviewButton = (props:any) => { 
       return (
        <Button  
        color='inherit'
        variant='contained'
        onClick={props.onClick}
        sx={{
            position: "absolute",
            top: "25%",
            zIndex: 2,
            minWidth: 30,
            width: 35,
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
        ".track": {
            padding: "0 10px",

            "img": {
                height: 150,
                width: 150
            }
        },
        "h3": {
            border: "1px solid #ccc",
            padding: "20px",
            height: "200px",

        }
    }}

    >
        <h2>{title}</h2>
    <Slider {...settings}>
    {data.map(track => {
                    return (
                        <div className="track" key={track._id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`} />
                            <Link style={{cursor:'pointer'}} href={`/track/${track._id}?audio=${track.trackUrl}`}><h4>{track.title}</h4></Link>   
                            <h5>{track.description}</h5>
                        </div>
                    )
                })}

    </Slider>
    <Divider/>  
    </Box>
    
  
   </>
  )
}

export default MainSlider