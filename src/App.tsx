import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model.tsx";

const PATH = {
    ADIDAS: "/adidas",
    PUMA:"/puma",
    ABIBAS:"/abibas",
} as const

const activeStylesHandler = ({isActive}:{isActive:boolean}) => isActive ? styles.activeNavLink : styles.navLink


export const App = ()=> {
    return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
            <div><NavLink to={PATH.ADIDAS} className={activeStylesHandler} >ADIDAS</NavLink></div>
            <div><NavLink to={PATH.PUMA} className={activeStylesHandler} >PUMA</NavLink></div>
            <div><NavLink to={PATH.ABIBAS} className={activeStylesHandler} >ABIBAS</NavLink></div>
            <a href="page3">page3 HTML</a>
        </div>
        <div className={styles.content}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/page1'}/>} />

                <Route path={PATH.ADIDAS} element={<Adidas/>} />
                <Route path={PATH.PUMA} element={<Puma/>} />
                <Route path={PATH.ABIBAS} element={<Abibas/>} />
                <Route path={'/adidas/:id'} element={<Model/>} />

                <Route path={'/*'} element={<Error404/>} />
            </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;



