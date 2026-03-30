// Выносим кнопку в отдельный мемоизированный компонент
import React, { memo, useCallback } from 'react'
import { ToggleButton } from '@mui/material'

export const GenreButton = memo(({ genre, isSelected, onToggle }: any) => {
  console.log(`GenreButton ${genre.name} render`, isSelected);

  return (
    <ToggleButton
      value={genre.id}
      selected={isSelected}
      onChange={() => onToggle(genre.id)}
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '20px !important',
        fontSize: '0.8rem',
        padding: '4px 12px',
        textTransform: 'none',
        backgroundColor: 'white',
        color: 'text.primary',
        '&.Mui-selected': {
          backgroundColor: '#1976d2',
          color: 'white',
          borderColor: '#1976d2',
        },
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
          borderColor: '#1976d2',
        },
        '&.MuiToggleButton-root': {
          margin: 0,
        },
      }}
    >
      {genre.name}
    </ToggleButton>
  );
});