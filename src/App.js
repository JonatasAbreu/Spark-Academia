import React from "react";
import './styles.css'
import Logo from './assets/logo.png'
import Nutricao from './assets/nutricao.png'
import Treino from './assets/treino.png'
import Personal from './assets/personal.png'
import Confianca from './assets/confianca.png'
import MulherAbs from './assets/mulherAbs.png'
import Prof from './assets/prof.png'
import AbsMulher from './assets/010203.png'
import Planos from './assets/PLANOS.png'
function App() {
    return (
        <div className="container">
            <div className="nav-bar" >
                <header>
                    <img src={Logo} />
                </header>
                <nav>
                    <ul>
                        <li><a href="">SPARK</a></li>
                        <li><a href="">MUSCULAÇÃO</a></li>
                        <li><a href="">PLANOS</a></li>
                        <li><a href="">PARCEIROS</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">FALE CONOSCO</a></li>
                        <li><a href="">INFO</a></li>
                    </ul>
                </nav>

            </div>
            <div className="beneficios">
                <div >
                    <img className="icone-beneficos" src={Nutricao} alt="nutrição" />
                    <h3 className="h3-title">ORIENTAÇÃO NUTRICIONAL</h3>
                    <p className="grap-benef">Alimentação indicada para iniciar o seu treino.</p>
                </div>
                <div >
                    <img className="icone-beneficos" src={Treino} alt="treino" />
                    <h3 className="h3-title">TREINO FORTE</h3>
                    <p className="grap-benef">Treinamento personalizado para melhores resultados</p>
                </div>
                <div  >
                    <img className="icone-beneficos" src={Personal} alt="personal" />
                    <h3 className="h3-title">PERSONALTRAINER</h3>
                    <p className="grap-benef">Contrate um profissional para um treino individual.</p>
                </div>
                <div >
                    <img className="icone-beneficos" src={Confianca} alt="confiança" />
                    <h3 className="h3-title">MAISCONFIANÇA</h3>
                    <p className="grap-benef">Profissional altamente qualificado para seu treino.</p>
                </div>
            </div>
            <div className="descri-gym">
                <div className="icone-gym">
                    <div className="div-gym" >
                        <h3 className="gym">Academias sempre
                            foram vistas
                            como locais de
                            “culto ao corpo”.</h3>
                        <p>Há tempos isso mudou. Hoje, as academias assumiram um papel fundamental na vida das pessoas. Na qualidade de vida das pessoas. Porém, algumas se preocupam com os alunos mais do que outras. Saiba mais sobre os nossos valores e toda a estrutura que disponibilizamos a você.   </p>
                        <button type="button">Sobre a Spark</button>
                    </div>
                </div>
                <div>
                    <img className="imgwomen-abs" src={MulherAbs} alt="img" />
                </div>
            </div>
            <div className="div-Prof">
                <h3>Profissionais Qualificados</h3>
                <p>O time da Spark é formado por profissionais que aliam experiência com muita inovação.<br /> Sempre atentos às tendências que movimentam as academias, os professores têm a <br /> preocupação de implementar novidades para diversificar treinos e intensificar resultados.</p>
                <img src={Prof} alt="img" />
            </div>
            <div className="div-abs">
                <img src={AbsMulher}  alt="img" />
            </div>
            <div className="div-plans">

                <img src={Planos} alt="img" />
                <div className="plans" >
                    <div className="all-plans">
                        <div className="mensal">
                            <h3>Mensal</h3>
                            <p>O plano recomendado para quem não<br /> é acostumado com academia e tem<br /> interesse em ver em prática a nossa,<br /> filosofia de treinamento.</p>
                            <p>1x R$ <span>134,90</span><br />+ R$ 30,00 de taxa de matrícula</p>
                        </div>
                        <div className="benefits">
                            <p className="p-benefits">+  Musculação Completa<br />
                                +  Espaço Funcional<br />
                                +  Acompanhamento Profissional<br />
                                +  Treino Personalizado<br />
                                +  Orientação Nutricional<br />
                            </p>
                        </div>
                        <button type="button">MATRICULA</button>
                    </div>
                    <div className="all-plans">
                        <div className="semestral">
                            <h3>Semestral</h3>
                            <p>O plano recomendado para quem já<br /> experimentou nossa academia e<br /> gostaria de iniciar um compromisso<br /> de saúde consigo mesmo.</p>
                            <p>6x R$ <span>124,90</span><br />+ R$ 30,00 de taxa de matrícula</p>
                        </div>
                        <div className="benefits">
                            <p>+  Musculação Completa<br />
                                +  Espaço Funcional<br />
                                +  Acompanhamento Profissional<br />
                                +  Treino Personalizado<br />
                                +  Orientação Nutricional<br />
                            </p>
                        </div>
                        <button type="button">MATRICULA</button>
                    </div>
                    <div className="all-plans">
                        <div className="anual">
                            <h3>Anual</h3>
                            <p>O plano recomendado para quem já é<br /> habituado a atividades físicas mais<br /> intensas e treinos em academias.</p>
                            <p>12x R$ <span>114,90</span><br />+ R$ 30,00 de taxa de matrícula</p>
                        </div>
                        <div className="benefits">
                            <p>+  Musculação Completa<br />
                                +  Espaço Funcional<br />
                                +  Acompanhamento Profissional<br />
                                +  Treino Personalizado<br />
                                +  Orientação Nutricional<br />
                            </p>
                        </div>
                        <button type="button">MATRICULA</button>
                    </div>
                </div>
            </div>

            <footer>
                <div>
                    <img src={Logo} alt="img" />
                    <p>A Spark Academia é campeã em<br /> oferecer os melhores serviços e <br /> equipamentos para o treino de<br />  musculação e funcional.</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>(11) xxxx-xxxx</p>
                    <p>(11) xxxx-xxxx</p>
                    <h3>ENDEREÇO</h3>
                    <p>Rua martins, vila domigues <br />São Paulo/SP</p>
                </div>
                <div>
                    <h3>HORÁRIO DE <br />FUNCIONAMENTO</h3>
                    <p>Segunda a Sexta:<br />06:00 - 22:00<br />
                        Sábado:<br />
                        09:00 - 13:00 <br />
                        Domingo Fechado
                    </p>
                </div>
            </footer>
            <div className="finished">
                <p>Desenvolvido por Jônatas Abreu</p>
            </div>
        </div>
    );
}

export default App;
