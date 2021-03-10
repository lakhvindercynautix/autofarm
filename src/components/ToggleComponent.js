import React from 'react';
import ReactDOM from 'react-dom';


function ToggleCompo(){
   
    return(
        <div>
            <div className="row col-md-12 showtogle">
                            <div className=" col-lg-5">
                                <div className="box">
                                    <div className="head">
                                        <h4 className="d-flex align-items-center">Balance <span className="ml-auto">-($-)</span>
                                        </h4>
                                    </div>
                                    <div className="input-box1">
                                        <input className="form-control form-control-lg" type="text" placeholder="0" />
                                    </div>
                                    <div className="max-btn"><a href="#">MAX</a></div> 
                                    <button className="btn-1">Deposit</button>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="box">
                                    <div className="head">
                                        <h4 className="d-flex align-items-center">Deposit <span className="ml-auto">-($-)</span>
                                        </h4>
                                        <h5 className=" content align-items-center"><span className="ml-auto">% of vault</span>
                                        </h5>
                                    </div>
                                    <div className="input-box">
                                        <input className="form-control form-control-lg" type="text" placeholder="0" />
                                    </div>
                                    <div className="max-text">
                                    <div className="max-btn"><a href="#">MAX</a></div> 
                                    </div>
                                    <button className="btn">Withdraw</button>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="box reward">
                                    <div className="head">
                                        <h4 className="d-flex align-items-center">AUTO rewards</h4>
                                    </div>
                                    <div className="input-box">
                                        <p>-</p>
                                        <span>$-</span>
                                    </div>
                                    <button className="btn">Harvest</button>
                                </div>
                            </div>
                        </div>
                        <div className="first-box col-md-12 showtogle" >
                            <div className="first col-md-4">
                             <h6><b>Vault Details</b></h6>
                             <h6 className="text">Asset: <a href="#">WBNB-AUTO LP</a></h6>
                             <h6 className="text-1">($1,894.39)</h6>
                             <h6>AUTO multiplier: 11.50x</h6>
                             <h6>Type: staking</h6>
                             <h6>Farm name: AUTO</h6>
                             <h6 className="text-2">Farm contract:  <a href="#">view</a></h6>
                             <h6 className="tex-3">Vault contract: <a href="#">view</a></h6>
                            </div> 
                            <div className="second col-md-3">
                            <h6><b>APY Calculations</b></h6>
                             <h6 className="text-4">Farm APR: 0.0%<mark>(0.00% daily)</mark></h6>
                             <h6>Optimal compounds per year: 0</h6>
                             <h6>Farm APY: 0.0%</h6>
                             <h6>AUTO APR: 261.3% <mark>(0.72% daily)</mark></h6>
                             <h6>Total APY: 261.3%</h6>
                            </div>
                            <div className="third col-md-3">
                              <h6><b>Fees</b></h6>
                             <h6>Controller fee: none</h6>   
                             <h6> Platform fee: none</h6>
                             <h6>AUTO buyback rate: none</h6>
                             <h6>Max entrance fee: none</h6>
                             <h6>Withdrawal fee: none</h6>
                            </div>
                        </div>
        </div>
    );
}

export default ToggleCompo;