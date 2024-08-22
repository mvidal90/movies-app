import { MovieDetail } from "@/components";
import { getMovieById } from "@/util/api";
import { Box, Container } from "@mui/material";

import type { Metadata } from 'next'
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const movie = await getMovieById(params.id)
    
    return {
        title: movie.title,
        description: movie.overview
    }
}

export default function Detail({params: {id}}: { params: { id: string }}) {
    return (
        <Box component="main" sx={{ marginTop: "5.5rem" }}>
            <Container fixed>
                <MovieDetail id={id} />
            </Container>
        </Box>
    );
}
