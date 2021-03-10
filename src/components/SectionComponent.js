import React from 'react';
import ReactDOM from 'react-dom';

function SectionCompo() {
    return (
        <div>
            <section class="content col-md-12 dropdownc">
                            <div class="grid">
                                <div class="grid-item  col-md-8">
                                    <div class="stock-img col-md-2">
                                        <img src="https://assets.coingecko.com/coins/images/14072/small/2_%282%29.png?1614151730"
                                            class="w-6 h-6 sm:w-8 sm:h-8" />
                                        <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png"
                                            class="w-6 h-6 sm:w-8 sm:h-8"  />
                                    </div>
                                    <div class="col-md-8 stock-detail">
                                        <span class="title">VIKING-WBNB LP</span>&nbsp;<span
                                            class="status">Disabled</span><br />
                                        <span class="rounded">.00x</span>
                                        &thinsp;
                                        <div class="stock-price">TVL&nbsp;$24.7K</div>
                                    </div>
                                </div>

                                <div class="grid-item col-md-2">
                                    <div class="value"><span>86.6M%</span><br />&nbsp;3.85%</div>
                                </div>
                                <div class="grid-item col-md-2">
                                    <span class="col-md-8">
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </span>
                                    <span class="col-md-4">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div class="grid-item col-md-2"></div>
                            </div>
                        </section>
                        <div class="row col-md-12 showtogle">
                            <div class=" col-lg-5">
                                <div class="box">
                                    <div class="head">
                                        <h4 class="d-flex align-items-center">Balance <span class="ml-auto">-($-)</span>
                                        </h4>
                                    </div>
                                    <div class="input-box1">
                                        <input class="form-control form-control-lg" type="text" placeholder="0" />
                                    </div>
                                    <div class="max-btn"><a href="#">MAX</a></div> 
                                    <button class="btn-1">Deposit</button>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="box">
                                    <div class="head">
                                        <h4 class="d-flex align-items-center">Deposit <span class="ml-auto">-($-)</span>
                                        </h4>
                                        <h5 class=" content align-items-center"><span class="ml-auto">% of vault</span>
                                        </h5>
                                    </div>
                                    <div class="input-box">
                                        <input class="form-control form-control-lg" type="text" placeholder="0" />
                                    </div>
                                    <div class="max-text">
                                    <div class="max-btn"><a href="#">MAX</a></div> 
                                    </div>
                                    <button class="btn">Withdraw</button>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="box reward">
                                    <div class="head">
                                        <h4 class="d-flex align-items-center">AUTO rewards</h4>
                                    </div>
                                    <div class="input-box">
                                        <p>-</p>
                                        <span>$-</span>
                                    </div>
                                    <button class="btn">Harvest</button>
                                </div>
                            </div>
                        </div>
                        <div class="first-box col-md-12 showtogle">
                            <div class="first col-md-4">
                             <h6><b>Vault Details</b></h6>
                             <h6 class="text">Asset: <a href="#">WBNB-AUTO LP</a></h6>
                             <h6 class="text-1">($1,894.39)</h6>
                             <h6>AUTO multiplier: 11.50x</h6>
                             <h6>Type: staking</h6>
                             <h6>Farm name: AUTO</h6>
                             <h6 class="text-2">Farm contract:  <a href="#">view</a></h6>
                             <h6 class="tex-3">Vault contract: <a href="#">view</a></h6>
                            </div> 
                            <div class="second col-md-3">
                            <h6><b>APY Calculations</b></h6>
                             <h6 class="text-4">Farm APR: 0.0%<mark>(0.00% daily)</mark></h6>
                             <h6>Optimal compounds per year: 0</h6>
                             <h6>Farm APY: 0.0%</h6>
                             <h6>AUTO APR: 261.3% <mark>(0.72% daily)</mark></h6>
                             <h6>Total APY: 261.3%</h6>
                            </div>
                            <div class="third col-md-3">
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
export default SectionCompo;
