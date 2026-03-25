import { SORT_OPTIONS } from '@/common/constants'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { memo } from 'react';

type SortSelectProps = {
  value: string;
  onChange: (event: any) => void;
};

export const SortSelect = memo(({ value, onChange }: SortSelectProps) => {
  console.log('SortSelect render');

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={value}
        label="Sort by"
        onChange={onChange}
        sx={{
          bgcolor: 'white',
          '& .MuiSelect-select': {
            py: 1
          }
        }}
      >
        {SORT_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

SortSelect.displayName = 'SortSelect';