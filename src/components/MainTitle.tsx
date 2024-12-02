import { Typography, Box } from "@mui/material"

export const MainTitle = () => {
    return (
        <Box
            sx={{ color: '#b30059', alignItems:'center', textAlign: 'center'}}
        >
            <Typography variant='h1'>ComMEWnicate</Typography>
            <Typography variant='h4'>become sigma by talkmaxxing</Typography>
            <Typography variant='subtitle1' gutterBottom>practice rizzing people up via AI chats</Typography>

            <Box
                    component='img'
                    sx={{
                        width: 'auto',
                        height: '300px',
                        objectFit: 'contain',
                    }}
                    alt="Get mogged by a kitty."
                    src='main.png'
            />
        </Box>
    )
}