import Logo from './components/imgs/logo-sesi-blue.png'
import logoInstagram from './components/imgs/logo-instagram.svg'
import logoYoutube from './components/imgs/logo-youtube.svg'
import logoSite from './components/imgs/globe-outline.svg'


function Main() {
    return(
        <div className="container">
            <div className="main">
                <div className="advice">
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <div className="title">
                        <h1>Página em construção</h1>
                        <h4>
                            Nosso site está em construção, estamos trabalhando muito
                            para lhe oferecer a melhor experiência.
                        </h4>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <h3>Avise-me quando estiver pronto</h3>
                        <div className="items-form">
                            <div className="items-form">
                                <input class="input-field" type="text" name="name" placeholder="Nome"></input>
                                <input type="text" name="email" placeholder="E-mail"></input>
                                <input class="input-field" type="submit"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="social-networks">
                    <h6>Saiba mais em</h6>

                    <div className="midias">
                        <ul className="list">
                            <li><a href="https://www.instagram.com/escola.sesirv/"
                                target="_blank"
                                rel="external"><img src={logoInstagram}/></a></li>

                            <li><a href="https://www.youtube.com/user/SISTEMAFIEG"
                                target="_blank"
                                rel="external"><img src={logoYoutube}/></a></li>

                            <li><a href="https://sesigoias.com.br/sesi/site/Home.do?v=h"
                                target="_blank"
                                rel="external"><img src={logoSite}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;