
import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
//import './css/Header.css';



function HeaderCompo() {
    const [show,setShow] = React.useState(false);
  
    if(show){
        document.body.classList.add('dark-mode');
        
    }else{
        document.body.classList.remove('dark-mode');
        
    }
    

    return (
      
       <header>
        <div className="container">
            <section className="branding col-md-4 p-2">
                <div className="col-md-2 logo">
                <Link to={'/'}> <img src={logo} alt="" width="100%" /> </Link>  
                </div>
                <div className="col-md-10 site-name">
                    <h4>autofarm</h4>
                    <span>for the true farmers</span>
                </div>
            </section>
            <section className="tabs-nav col-md-4">
                <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="tab" href="#Vaults">Vaults</a></li>
                    <li><Link to={'/swap'}> Swap </Link></li>
                    <li><a href="https://legacy.autofarm.network/" rel="noreferrer" target="_blank">Legacy</a></li>
                </ul>
            </section>
            <section className="toggle-theme col-md-4">
                <div className="cursor-pointer col-md-6" onClick={()=>setShow(!show)}>
                    <FontAwesomeIcon icon={faMoon}/>
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                </div>
                <div className="wallet col-md-6">
                    <button className="btn" data-toggle="modal" data-target="#walletModal">Connect Wallet</button>
                </div>
               
                <div className="modal fade" id="walletModal" tabIndex="-1" role="dialog" aria-labelledby="walletModal"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="wallet-connect">
                                    <div className="wallet-connect-logo"><img
                                            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxNTEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMDgzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuNTc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC42NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljLTEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwtMjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy02LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMjc5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wMDAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDAwMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42NDQxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtLjAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0yLjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtODUuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtNi41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMtMi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMCAuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuNDI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQzIDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1NDkuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxMzkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9zdmc+"
                                            alt="WalletConnect" /></div>
                                    <div className="provider-name">WalletConnect</div>
                                    <div className="provider-description">Scan with WalletConnect to
                                        connect</div>
                                </div>
                                <div className="wallet-connect">
                                    <div className="wallet-connect-logo">
                                        <div className="sc-bdnylx jMhaxE web3modal-provider-icon">
                                            <img src="data:image/jpeg;base64,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"
                                                alt="Binance Chain Wallet"/>
                                        </div>
                                        <div className="provider-name">Binance Chain Wallet</div>
                                        <div className="provider-description">Binance Smart Chain
                                            Wallet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
    
      
    );
  }
  
  export default HeaderCompo;