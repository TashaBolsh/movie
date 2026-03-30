import {Button, styled} from "@mui/material";

export const OvalButton = styled(Button)(({ theme }) => ({
    borderRadius: 50,
    textTransform: 'none',
    '&.Mui-disabled': {
        backgroundColor: theme.palette.primary.main, // синий цвет
        color: theme.palette.primary.contrastText,
        opacity: 0.6,
    },
    '&.active':{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main,
    }
}));