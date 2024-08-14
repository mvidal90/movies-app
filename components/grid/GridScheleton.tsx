import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const GridScheleton = () => {
    const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        skeletonItems.map( item =>
            <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
                <Skeleton variant='rectangular' width="100%" height={400} />
            </Grid>
        )
    )
}

export default GridScheleton