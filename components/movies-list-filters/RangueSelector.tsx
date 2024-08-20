"use client"
import React from 'react'

import { Box, FormControl, Slider } from '@mui/material'


interface RangueSelectorProps {
    values: Array<number>
    minValue: number
    maxValue: number
    setMinValue: (n: number) => void
    setMaxValue: (n: number) => void
}


export const RangueSelector = ({values, minValue, maxValue, setMinValue, setMaxValue} : RangueSelectorProps) => {
    
    
    return (
        <FormControl sx={{ width: "100%" }} size="medium">
            <Box component="label" htmlFor="calification">Calificación</Box>
            <Slider
                getAriaLabel={() => 'Rango de calificaciones'}
                id='calification'
                name='calification'
                value={values}
                min={minValue}
                max={maxValue}
                onChange={(e, newValue : number | number[]) => {
                    setMinValue((newValue as number[])[0])
                    setMaxValue((newValue as number[])[1])
                }}
                valueLabelDisplay="auto"
            />
        </FormControl>
    )
}