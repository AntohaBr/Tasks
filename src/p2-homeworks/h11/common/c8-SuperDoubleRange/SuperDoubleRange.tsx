import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import Slider from "@mui/material/Slider";
import {Box} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange: (value: [number, number] | number[]) => void
    commonValue?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        commonValue,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };
    return (
        <Box sx={{width: 110}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={commonValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}

export default SuperDoubleRange