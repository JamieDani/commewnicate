import { Typography, Box } from "@mui/material"

export const MainTitle = () => {
    return (
        <Box
            sx={{ color: '#2d2d86', alignItems:'center', textAlign: 'center'}}
        >
            <Typography variant='h1'>ComMEWnicate</Typography>
            <Typography variant='h4'>become sigma by talkmaxxing.</Typography>
            <Box
                    component='img'
                    sx={{
                        width: 'auto',
                        height: '300px',
                        objectFit: 'contain',
                    }}
                    alt="Get mogged by a kitty."
                    src='interviewing.png'
            />
            <Typography variant='subtitle1' gutterBottom>a platform where you can practice rizzing people up.</Typography>
        </Box>
    )
}