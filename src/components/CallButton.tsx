import { Button, Stack } from "@mui/material"
import { Call } from "@mui/icons-material"

export const CallButton = () => {
    return (
        <Button variant='contained' startIcon={<Call/>} disableElevation>Call</Button>
    )
}