import './App.css'
import { useState, useEffect } from 'react';
import { MainTitle } from './components/MainTitle'
import { createTheme, Stack, Box, Button, IconButton, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CallCard } from './components/CallCard';
import { callUser } from './functions/outboundCalls';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';



const theme = createTheme({
  typography: {
    fontFamily: '"Sour Gummy", sans-serif', // Replace with your desired font family
  },
  palette: {
    mode: 'light', // 'light' or 'dark' mode
    primary: {
      main: '#b3b3e6', // Your specified light green color
      light: '#c6c6ec', // Same as main since you want this as the light color
      dark: '#9f9fdf', // Dark green
      contrastText: '#2d2d86', // White text to contrast primary colors
    },
    background: {
      default: '#ffffff', // White background for the app
      paper: '#2d2d86', // Dark gray background for paper elements
    },
    text: {
      primary: '#2d2d86', // Black text for primary content
      secondary: '#2d2d86', // Gray text for secondary content
    },
    error: {
      main: '#f44336', // Default error color (optional, change as needed)
    },
  },
  components: {
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: 2, // Customize border width (default is usually 1px)
                    borderColor: '#c6c6ec'
                },
            },
        },
    },
  },
});

function App() {
  const [currentCard, setCurrentCard] = useState('networking');
  
  //carousel implementation
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    console.log('card updated:', currentCard);  // Logs the updated count after state changes
  }, [currentCard]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentCard((prevCard) =>
      prevCard === 'pitching'?'networking' :(prevCard === 'networking'?'interviewing':'pitching')
    )
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setCurrentCard((prevCard) =>
      prevCard === 'networking'?'pitching' :(prevCard === 'pitching'?'interviewing':'networking')
    )
  };

  const cards = [
    { title: "networking", subtitle: "chat with pog professionals", image: 'networking.png' },
    { title: "interviewing", subtitle: "embody the alpha talent", image: 'interviewing.png' },
    { title: "pitching", subtitle: "sell your skibidi idea", image: 'pitching.png' },
  ];

  const agentNumbers = {
    "networking": "",
    "interviewing": "",
    "pitching": "",
  }

  return (
   <ThemeProvider theme={theme}>
      
      <MainTitle/>
      <Typography variant='h4'>{currentCard}</Typography>
      

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Carousel Container */}
            <Box
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    alignItems:'center',
                    height: "500px",
                    width: "497px",
                    position: "relative",
                }}
            >
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: "100%",
                            transition: "transform 0.5s ease-in-out",
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        <CallCard title={card.title} subtitle={card.subtitle} image={card.image}/>
                    </Box>
                ))}
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "300px", marginTop: 2 }}>
                <IconButton aria-label="delete" onClick={prevSlide} size='large' sx={{ color: (theme) => theme.palette.text.primary }}>
                    <ArrowCircleLeft />
                </IconButton>
                <IconButton aria-label="delete" onClick={nextSlide} size='large'  sx={{ color: (theme) => theme.palette.text.primary }}>
                    <ArrowCircleRight />
                </IconButton>
            </Box>
        </Box>

   </ThemeProvider>
  )
}

export default App
