import { Box, Slider } from '@mui/material';
import { memo } from 'react';

type RatingSliderProps = {
  value: [number, number];
  onChange: (event: Event, newValue: number | number[]) => void;
};

export const RatingSlider = memo(({ value, onChange }: RatingSliderProps) => {
  console.log('RatingSlider render');

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" color="text.secondary">
        <div>Rating</div>
        <div>{value[0].toFixed(1)} - {value[1].toFixed(1)}</div>
      </Box>
      <Slider
        value={value}
        min={0}
        max={10}
        step={0.1}
        onChange={onChange}
        sx={{
          '& .MuiSlider-thumb': {
            width: 16,
            height: 16,
          }
        }}
      />
    </Box>
  );
});

RatingSlider.displayName = 'RatingSlider';