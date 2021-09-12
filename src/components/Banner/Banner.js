import logo from '../../assets/logo.png'
import accountImg from '../../assets/account.png'
import basketImg from '../../assets/basket.png'

import Navigation from '../nav/Navigation'
import './Banner.scss'

function Banner() {
    return (
        <header>
            <div className="topBar">
                <img src={logo} className="logo" alt="logo" />
                <div className="userMenuContainer">
                    <div id="userAccount">
                        <img src={accountImg} className="userMenuImg" alt="accountImg" />
                        <p>Twoje konto</p>
                    </div>
                    <div id="basket">
                        <img src={basketImg} className="userMenuImg" alt="basketImg" />
                        <p>Koszyk</p>
                    </div>
                </div>
            </div>
            <div className="bottomBar">
                <Navigation />
            </div>
        </header>
    );
}

export default Banner;