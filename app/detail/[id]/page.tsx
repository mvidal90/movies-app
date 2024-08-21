import { MovieDetail } from "@/components";
import { Box, Container } from "@mui/material";

export default function Detail({params: {id}}: { params: { id: string }}) {
    return (
        <Box component="main" sx={{ marginTop: "5.5rem" }}>
            <Container fixed>
                <MovieDetail id={id} />
            </Container>
        </Box>
    );
}
