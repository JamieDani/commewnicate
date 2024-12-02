import { Call } from "@mui/icons-material";
import { Box, Typography, Stack, TextField, Button } from "@mui/material"
import { useState } from "react";
import { callUser } from "../functions/outboundCalls";

interface CallCardProps {
    title: string;  // Title of the card
    subtitle: string;  // Content to display in the card
    image: string;
    editTranscript: React.Dispatch<React.SetStateAction<string>>;
    editAnalysis: React.Dispatch<React.SetStateAction<any>>;
  }

  
  
  export const CallCard: React.FC<CallCardProps> = ({ title, subtitle, image, editTranscript, editAnalysis }) => {
    const [inputValue, setInputValue] = useState<string>('Insert text here...');
    
    const handleChange = (event: any) => {
        // Step 3: Update the state with the new input value
        setInputValue(event.target.value);
    };

    async function handleCall(number: string, description: string, call_type: string) {
        console.log("calling number...")
        
        const phoneCallResponse = await callUser(number, description, call_type)

        console.log(phoneCallResponse);
        console.log(phoneCallResponse.agent_id);
        console.log(phoneCallResponse.transcript);
        console.log(phoneCallResponse.call_analysis);

        if (phoneCallResponse.transcript) { editTranscript(phoneCallResponse.transcript); }
        if (phoneCallResponse.call_analysis?.custom_analysis_data) { editAnalysis(phoneCallResponse.call_analysis.custom_analysis_data); }
    }

    return (
        <Box
          sx={{
            color: 'text.primary',
            fontFamily: (theme) => theme.typography.fontFamily,
            height: '450px',
            width: '450px',
            padding: '20px',
            borderStyle: 'solid',
            textAlign: 'center',
            borderRadius: '30px',
            borderColor: 'text.primary',
            borderWidth: '3px',
          }}
        >
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='subtitle1'>{subtitle}</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 2, height: '80%'}}>
                <Box
                    component='img'
                    sx={{
                        width: 'auto',
                        height: '70%',
                        objectFit: 'contain',
                    }}
                    alt="Get mogged by a kitty."
                    src={image}
                />
                <TextField 
                    label='Write a description'
                    value={inputValue}  // Step 4a: The value of the input is controlled by state
                    onChange={handleChange}
                />
                <Button variant='contained' startIcon={<Call/>} disableElevation onClick={() => handleCall('[]', inputValue, title)}>Call</Button>
                
            </Box>
        </Box>
    )
}