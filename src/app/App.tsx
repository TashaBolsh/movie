import {Outlet} from 'react-router-dom';
import { Header } from '@/common/components/Header/Header.tsx'
import { Footer } from '@/common/components/Footer/Footer.tsx'
import s from "./App.module.css"

export const App = () => {
  return (
    <div className={s.app}>
      <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}