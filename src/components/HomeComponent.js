import React from 'react';
import ReactDOM from 'react-dom';
import SectionComponent from './SectionComponent'

function Home() {
    return (
        <section>
        <div class="container main">
            <div class="row">
                <div class="tab-content">
                    <div id="Vaults" class="tab-pane fade in active">
                        <section class="report">
                            <div class="heading col-md-6">
                                <h2 class="col-md-12 font-semibold "> TVL $957,026,390</h2>
                                <h4 class="col-md-12">BSC TVL $938,281,372</h4>
                                <h4 class="col-md-12">AUTO $2,247.09</h4>
                                <button class="btn buy-auto" onclick="buy_auto()">Buy
                                    AUTO</button>
                            </div>
                            <div class="total col-md-6">
                                <div class="total-val col-md-12">
                                    <div class="font-semibold col-md-6">Total Deposit</div>
                                    <div class="text-right col-md-6">
                                        <div>$0.00</div>
                                    </div>
                                </div>
                                <div class="total-val col-md-12">
                                    <div class="font-semibold col-md-6">AUTO Rewards</div>
                                    <div class="text-right col-md-6">
                                        <div>0.0000</div>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <div>$0.00</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="highlighted col-md-12">
                            <p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                Low BUSD & USDT liquidity on Venus have delayed withdrawals on these respective autofarm
                                vaults, we
                                seek
                                your understanding on this matter.</p>
                            <ul class="nav nav-pills">
                                <li class="active"><a data-toggle="tab" href="#Vaults">BSC</a></li>
                                <li><a data-toggle="tab" href="#Swap">HECO</a></li>
                            </ul>
                            <label class="switch">
                                <input type="checkbox" id="turbo" onclick="onTurbo()" />
                                <span class="slider round"></span>
                            </label>
                            <span id="turboEl">TURBO</span>
                        </section>
                        <section class="filters col-md-12">
                            <h5>FARM</h5>
                            <ul class="nav nav-pills">
                                <li class="active"><a data-toggle="tab" href="#">All</a></li>
                                <li><a data-toggle="tab" href="#">AUTO</a></li>
                                <li><a data-toggle="tab" href="#">Venus</a></li>
                                <li><a data-toggle="tab" href="#">HECO</a></li>
                                <li><a data-toggle="tab" href="#">BSC</a></li>
                                <li><a data-toggle="tab" href="#">Goose</a></li>
                                <li><a data-toggle="tab" href="#">bDollar</a></li>
                                <li><a data-toggle="tab" href="#">Viking</a></li>
                            </ul>
                        </section>
                        <section class="stacked-only col-md-12">
                            <div class="wallet">
                                <button class="btn">Staked Only
                                    <input type="checkbox" class="cursor-pointer form-checkbox h-5 w-5 text-gray-600"
                                        name="hideEmpty" id="hideEmpty"/>
                                </button>
                            </div>
                        </section>
                        <section class="warning turbo col-md-12" id="warning">
                            <div class="warning-cont">
                                <div class="warning-title"> WARNING </div>
                                <div> These farms have NOT been reviewed by the autofarm&nbsp;team. <br /> <b>DYOR</b>,
                                    use
                                    at your own risk.
                                </div>
                            </div>
                        </section>
                        <section class="content col-md-12">
                            <div class="grid">
                                <div class="grid-item col-md-8">
                                    <div class="font-semibold">Token</div>
                                    <div class="font-semibold flex space-x-1">
                                        <div class="leading-none" >
                                            <div>▲</div>
                                            <div>▼</div>
                                        </div>
                                        <div>TVL</div>
                                    </div>
                                </div>
                                <div class="grid-item col-md-2">
                                    <div class="flex justify-end items-center space-x-1">
                                        <div class="leading-none" >
                                            <div>▲</div>
                                            <div>▼</div>
                                        </div>
                                        <div>APY</div>
                                    </div>
                                    <div class="">Daily APR</div>
                                </div>
                                <div class="grid-item col-md-2">
                                    <div>Balance</div>
                                    <div>Deposit</div>
                                    <div>Rewards</div>
                                </div>
                                <div class="grid-item col-md-2"></div>
                            </div>
                        </section>
                        <SectionComponent />
                        <section class="note col-md-12">
                            Auto-compound assets. Earn AUTO.
                        </section>
                    </div>
                    <div id="Swap" class="tab-pane fade">
                        <p>BSC's best DEX aggregator.
                            Coming soon.</p>
                    </div>
                    <div id="Legacy" class="tab-pane fade">
                        <h3>Legacy</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium,
                            totam
                            rem aperiam.</p>
                    </div>
                </div>
            </div>
        </div>
    
</section>
    );
}

export default Home;