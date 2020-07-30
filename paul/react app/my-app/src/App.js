import React from 'react';
// import logo from './logo.svg';
import './style.css';
// import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <header className="flex-container Screen">
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" className="trello-main-logo" alt="trello" />
        <div className="Card">
          <div className="Container">
            <text className="loginText"> 登入 Trello</text>
            <input type="text" placeholder=" 輸入電子郵件"></input>
            <input type="text" placeholder=" 輸入密碼"></input>
            <button type="button" className="button1">登入</button>
            <text className="text1"> 或者</text>
            <button type="button" className="SmallCard">
              <span className="GoogleIcon"></span>
              <b style={{ color: "#505f79" }}>繼續使用Google帳號登入</b>
            </button>
            <button type="button" className="SmallCard">
              <span className="MsIcon"></span>
              <b style={{ color: "#505f79" }}>繼續使用Microsoft帳號登入</b>
            </button>
            <button type="button" className="SmallCard">
              <span className="AppleIcon"></span>
              <b style={{ color: "#505f79" }}>繼續使用Apple帳號登入</b>
            </button>
            <a className="text2" href="/signup"> 以SSO登入 </a>

            <hr style={{ border: "0.3px solid (0,0%,80%)" }} />

            <ul className="textbox">
              <li><a className="text2" href="/signup">無法登入？&nbsp;</a></li>
              <li>•</li>
              <li><a className="text2" href="/signup">&nbsp;&nbsp;註冊帳號</a></li>
            </ul>
          </div>
        </div>


        <a className="text3" style={{ marginbottom: "55px" }} href="/signup">隱私政策 &nbsp;∙ &nbsp;服務條款</a>

        <footer>
          <form>
            <select className="LanguageBox" name="Language">
              <option value="cs" data-url="https://trello.com/cs/login">Čeština</option>
              <option value="de" data-url="https://trello.com/de/login">Deutsch</option>
              <option value="en" data-url="https://trello.com/en/login">English</option>
              <option value="en-AU" data-url="https://trello.com/en-AU/login">English (AU)</option>
              <option value="en-GB" data-url="https://trello.com/en-GB/login">English (UK)</option>
              <option value="en-US" data-url="https://trello.com/en-US/login">English (US)</option>
              <option value="es" data-url="https://trello.com/es/login">Español</option>
              <option value="fr" data-url="https://trello.com/fr/login">Français</option>
              <option value="it" data-url="https://trello.com/it/login">Italiano</option>
              <option value="hu" data-url="https://trello.com/hu/login">Magyar</option>
              <option value="nl" data-url="https://trello.com/nl/login">Nederlands</option>
              <option value="nb" data-url="https://trello.com/nb/login">Norsk (bokmål)</option>
              <option value="pl" data-url="https://trello.com/pl/login">Polski</option>
              <option value="pt-BR" data-url="https://trello.com/pt-BR/login">Português (Brasil)</option>
              <option value="fi" data-url="https://trello.com/fi/login">Suomi</option>
              <option value="sv" data-url="https://trello.com/sv/login">Svenska</option>
              <option value="vi" data-url="https://trello.com/vi/login">Tiếng Việt</option>
              <option value="tr" data-url="https://trello.com/tr/login">Türkçe</option>
              <option value="ru" data-url="https://trello.com/ru/login">Русский</option>
              <option value="uk" data-url="https://trello.com/uk/login">Українська</option>
              <option value="th" data-url="https://trello.com/th/login">ภาษาไทย</option>
              <option value="zh-Hans" data-url="https://trello.com/zh-Hans/login">中文 (简体)</option>
              <option value="zh-Hant" data-url="https://trello.com/zh-Hant/login">中文 (繁體)</option>
              <option value="ja" data-url="https://trello.com/ja/login">日本語</option>
            </select>
          </form>

          <hr style={{ maxwidth: "400px", margin: "25px auto" }} />

          <div>
            <img className="footer-logo" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" />
          </div>
          <div>
            <span>
              <a className="text4" href="/signup"> 範本 </a>
              <a className="text4" href="/signup"> 價格 </a>
              <a className="text4" href="/signup"> Apps </a>
              <a className="text4" href="/signup"> 工作機會 </a>
              <a className="text4" href="/signup"> 部落格 </a>
              <a className="text4" href="/signup"> 開發者 </a>
              <a className="text4" href="/signup"> 關於 </a>
              <a className="text4" href="/signup"> 求助 </a>
              <a className="text4" href="/signup"> Cookie設定 </a>
            </span>
          </div>
        </footer>
      </header>

    </div>
  );
}

export default App;


// default code:
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}