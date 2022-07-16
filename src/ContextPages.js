import React, { createContext, useState, useContext } from "react";

const LangContext = createContext()
const { Provider: LangProvider, Consumer: LangConsumer } = LangContext

const ThemeContext = createContext()
const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext

function LandingPage() {
    const [lang, setLang] = useState("🇮🇩")
    const changeLang = e => setLang(e.target.value)
    const langState = { lang, changeLang }

    const [theme, setTheme] = useState("light")
    const changeTheme = e => setTheme(e.target.value)
    const themeState = { theme, changeTheme }


    const Header = () => {
        return (
            <>
                <h1>-- Header --</h1>
            </>
        )
    }

    const Menu = () => {
        const props = useContext(LangContext)
        const themeProps = useContext(ThemeContext)

        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>
                        Languange
                        <select value={props.lang} onChange={props.changeLang}>
                            <option value="🇬🇧"> 🇬🇧 English </option>
                            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
                        </select>
                    </li>
                    <li>
                        Theme
                        <select value={themeProps.theme} onChange={themeProps.changeTheme}>
                            <option value="light"> light </option>
                            <option value="dark"> dark </option>
                        </select>
                    </li>
                </ul>

            </div>
        )
    }

    const Content = () => {
        return (
            <>

            </>
        )
    }

    const Footer = () => {
        const props = useContext(LangContext)
        const themeProps = useContext(ThemeContext)

        return (
            <>
                <i>-- Footer --</i>
                <p>Languange : {props.lang}</p>
                <p>Theme : {themeProps.theme}</p>
            </>
        )
    }

    return (
        <LangProvider value={langState}>
            <ThemeProvider value={themeState}>
                <Header />
                <Menu />
                <Content />
                <Footer />
            </ThemeProvider>
        </LangProvider>
    )
}

export default LandingPage