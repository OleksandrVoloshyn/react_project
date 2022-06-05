import {FC} from "react"

import css from './SwitchTheme.module.css'

const SwitchTheme: FC = () => {
    const setTheme = (themeName: string): void => {
        localStorage.setItem('theme', themeName);
    }

    const toggleTheme = (): void => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            document.body.style.background = '#1c3248'
            document.body.style.color = 'white'
            setTheme('theme-light')
        } else {
            document.body.style.color = 'black'
            document.body.style.background = 'white'
            setTheme('theme-dark');
        }
    }

    return (
        <div className={css.container}>
            <label id={css.switch} className={css.switch}>
                <input type="checkbox" onChange={toggleTheme} id={css.slider}/>
                <span className={`${css.slider} ${css.round}`}></span>
            </label>
        </div>
    );
};

export {SwitchTheme};