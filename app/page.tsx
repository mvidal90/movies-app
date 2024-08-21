import { Box, Container } from "@mui/material";
import { MoviesGrid, MoviesListFilters } from "@/components";

export default function Home() {
    return (
        <Box component="main" sx={{ marginTop: "5.5rem" }}>
            <Container>
                <Box component="h2" sx={{ marginBottom: "1rem"}}>Busca tu pelicula favorita</Box>
                <MoviesListFilters />
                <MoviesGrid />
            </Container>
        </Box>
    );
}
