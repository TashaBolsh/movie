import { Box, TextField } from '@mui/material'
import { OvalButton } from '@/common/components/OvalButton/OvalButton'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PATH } from '@/common/constants'

export const SearchForm = () => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setTitle(query);
    } else {
      setTitle('');
    }
  }, [searchParams]);

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.currentTarget.value
    setTitle(newValue)
    if (!newValue.trim() && searchParams.get('query')) {
      navigate(PATH.Search);
    }
  }
  const handleSearch = () => {
    if (title.trim()) {
      // Переходим на страницу поиска с параметром запроса
      navigate(`${PATH.Search}?query=${title}`);
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <Box component="form" sx={{ display: 'flex', gap: '12px' }}>
      <TextField onChange={changeTitleHandler}
                 onKeyDown={handleKeyPress}
                 size={'small'}
                 fullWidth
                 value={title}
                 type={'search'}
                 placeholder={'Search for a movie'}
                 sx={{
                   '& .MuiOutlinedInput-root': {
                     borderRadius: '50px',
                     backgroundColor: 'white',
                     '&.Mui-focused fieldset': {
                       borderWidth: '0px'
                     }
                   },
                   '& .MuiOutlinedInput-root.Mui-focused': {
                     outline: '3px solid #1976d2',
                     outlineOffset: '3px'
                   }
                 }} />
      <OvalButton onClick={handleSearch} type={'button'} disabled={!title} size="large" variant="contained">Search</OvalButton>
    </Box>
  )
}