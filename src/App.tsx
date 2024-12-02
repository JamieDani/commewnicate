import './App.css'
import { useState, useEffect } from 'react';
import { MainTitle } from './components/MainTitle'
import { createTheme, Stack, Box, Button, IconButton, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CallCard } from './components/CallCard';
import { callUser } from './functions/outboundCalls';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { CallAnalysis} from './components/CallAnalysis';



const theme = createTheme({
  typography: {
    fontFamily: '"Sour Gummy", sans-serif', // Replace with your desired font family
  },
  palette: {
    mode: 'light', // 'light' or 'dark' mode
    primary: {
      main: '#ffb3d9', // Your specified light green color
      light: '#ffcce6', // Same as main since you want this as the light color
      dark: '#ff99cc', // Dark green
contrastText: '#b30059', // White text to contrast primary colors
    },
    background: {
      default: '#ffffff', // White background for the app
      paper: '#b30059', // Dark gray background for paper elements
    },
    text: {
      primary: '#b30059', // Black text for primary content
      secondary: '#b30059', // Gray text for secondary content
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
                    borderColor: '#ffb3d9'
                },
            },
        },
    },
  },
});

function App() {
  const [currentCard, setCurrentCard] = useState('networking');
  
  const [transcript, setTranscript] = useState<string>('No transcript yet.');
  const [analysis, setAnalysis] = useState<any>(null);
  
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
    { title: "networking", subtitle: "chat with pog professionals ~ write who you want to meet", image: 'networking.png' },
    { title: "interviewing", subtitle: "embody the alpha talent ~ write the job you want", image: 'interviewing.png' },
    { title: "pitching", subtitle: "sell your skibidi idea ~ write the prize you're going for", image: 'pitching.png' },
  ];
  //end carousel

  return (
   <ThemeProvider theme={theme}>
      <MainTitle/>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "text.primary" }}>
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
                        <CallCard title={card.title} subtitle={card.subtitle} image={card.image} editTranscript={setTranscript} editAnalysis={setAnalysis}/>
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
