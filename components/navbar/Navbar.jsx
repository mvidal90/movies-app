
import { AppBar, Box, Container } from '@mui/material'
import Searcher from './Searcher'

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ padding: "0.875rem"}}>
            <Container fixed sx={{display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", flexFlow: "wrap" }}>
                <Box component="h1">Movies App</Box>
                <Searcher />
            </Container>
        </AppBar>
    )
}

export default Navbar