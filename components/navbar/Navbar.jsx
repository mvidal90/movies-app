
import { AppBar, Box, Container } from '@mui/material'

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ padding: "0.875rem"}}>
            <Container fixed >
                <Box component="h1">Movies App</Box>
            </Container>
        </AppBar>
    )
}

export default Navbar