import { Box, Typography } from "@mui/material"

interface CallAnalysisProps {
    transcript: string;
    confidenceScore: number; 
  }
  
export const CallAnalysis: React.FC<CallAnalysisProps> = ({transcript, confidenceScore}) => {
  return (
      <>
      <Typography variant='h3'>Transcript</Typography>
      <Typography variant='h6' gutterBottom>sus out your speech.</Typography>
      <Box
        sx={{
          color: 'text.primary',
          fontFamily: (theme) => theme.typography.fontFamily,
          height: 'auto',
          width: '80%',
          padding: '20px',
          borderStyle: 'solid',
          textAlign: 'center',
          borderRadius: '30px',
          borderColor: 'text.primary',
          borderWidth: '3px',
        }}
      >
          <Typography variant="body1">{transcript}</Typography>
    </Box>
    <Typography variant='h3'>Scores</Typography>
    <Typography variant='h6' gutterBottom>stonks dont lie.</Typography>
    <Box
        sx={{
            color: 'text.primary',
            fontFamily: (theme) => theme.typography.fontFamily,
            height: '30px',
            width: '30px',
            padding: '20px',
            borderStyle: 'solid',
            textAlign: 'center',
            borderRadius: '30px',
            borderColor: 'text.primary',
            borderWidth: '3px',
            backgroundColor: 'red',
        }}
    >score
    </Box>
    </>
  )
}