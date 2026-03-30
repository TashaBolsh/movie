import IconButton from '@mui/material/IconButton';
import style from './style.module.css';
import globalStyle from '@/common/styles/common.module.css'
import Logo from "../../../assets/images/blue_short.svg";
import { Navigation } from '@/common/components/Header/Navigation/Navigation.tsx';
import { Link } from 'react-router-dom'
import { PATH } from '@/common/constants'

export const Header: React.FC = () => {

  return (
    <div className={`${style.header}`}>
      <div className={globalStyle.container}>
        <div className={style.flexBox}>
          <Link className={style.logo} to={PATH.Main}><img src={Logo} alt="Logo" /></Link>
          <Navigation />
          <IconButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
            }}>
            {'☀️'}
            <span style={{ marginLeft: '4px' }}>{'Светлая'}</span>
          </IconButton>
        </div>
      </div>
    </div>
  );
};