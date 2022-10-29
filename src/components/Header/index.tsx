import logo from "../../assets/img/logo.svg"
import "./styles.css"

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
            </div>
            <div className="dsmeta-logo-container">
                <h1>DSMeta</h1>
                <h5>Gestão de vendas</h5>
            </div>
        </header>
    )
}

export default Header