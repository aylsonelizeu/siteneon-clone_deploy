import logo from "./img/logo_neon-negativo.webp";
import principal from "./img/D-site_neon_principal.png";
import cartao from "./img/D-neon_site_cartao.webp";
import semtaxas from "./img/D-neon_site_tarifa.webp";
import invest from "./img/D-neon_site_invest.webp";
import googleplay from "./img/google-play-badge-1.svg";
import appstore from "./img/app-store-badge.svg";
import dashboard from "./img/D-neon-dashboard.png";
import './App.css';

function App() {
  return (
    <div>
    <body>
    <nav>
        <img src={logo} alt=""/>
        <ul>
            <li>Conta</li>
            <li>Pejota</li>
            <li>Perguntas</li>
            <li>Tarifas</li>
            <li>#Focanodinheiro</li>
            <li>Conheça a Neon</li>
            <li>ABRA SUA CONTA</li>
        </ul>
    </nav>
    <main>
        <div className="container-main">
            <h1> A conta digital certa pra cuidar bem do seu dinheiro</h1>
            <h4>Neon, conta grátis e cartão sem anuidade. Abra sua conta, é só baixar o app!</h4>
            <a href="http://localhost:3000" className="button-account">ABRA SUA CONTA</a>
        </div>
        <img src={principal} alt=""/>
    </main>
    <section className="video-prop">
        <iframe className="ifrm" width="560" height="315" src="https://www.youtube.com/embed/cEM7Ff_d1BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <h2 className="phrase">Cartão de crédito ou investimentos? Resolva sua vida direto no app!</h2>
    <section className="container-cards">
        <div>
            <img src={cartao} alt=""/>
            <h2>Crédito</h2>
            <p>Sua conta digital tem cartão de crédito sem anuidade nem complicação</p>

        </div>

        <div>
            <img src={semtaxas} alt=""/>
            <h2>Sem taxas</h2>
            <p>Você não paga nada por transferências, boletos de deposito e outros servicos no app</p>

        </div>

        <div>
            <img src={invest} alt=""/>
            <h2>Investimentos</h2>
            <p>Rendem mais que a poupança e voce resgata quando quiser</p>

        </div>
    </section>
    <div className="container-button-2">
    <a href="http://localhost:3000" className="button-account-2">TODOS OS PRODUTOS</a>
    </div>

  <section className="container-dashboard">
      <div>
          <h2>Abra sua conta digital e veja como a gente faz sua vida mais simples</h2>
          <img src={googleplay} alt=""/>
          <img src={appstore} alt=""/>
      </div>
      <img src={dashboard} alt=""/>
  </section>
    
</body>
</div>
  );
}

export default App;
