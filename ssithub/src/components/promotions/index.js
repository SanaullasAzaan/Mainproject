import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useRef, useState } from "react";



const messages=[
    "Name of club1",
    "Name of club2",
    "Name of club3",
    "Name of club4"
];

export default function Promotions(){
    const ContainerRef =useRef();
    const [messageIndex,setMessageIndex]=useState(0)
    const[show,setShow]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
        },3000);
    

    
        const intervalid=setInterval(()=>{
            setMessageIndex((i)=>(i+1)%messages.length);

            setShow(true);

            

                setTimeout(()=>{
                    setShow(false);

                },3000);
            
        },4000);

        return()=>{
            clearInterval(intervalid)
        };

    },[]);


    return(
        <PromotionsContainer ref={ContainerRef}>
            <Slide 
                container={ContainerRef.current}
                direction={show ? "left": "right"} 
                in={show}
                timeout={{
                    enter:500,
                    exit:100
                }}
            >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
            </Slide>
        </PromotionsContainer>
    );
}