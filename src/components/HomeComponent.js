import React from 'react';
import ReactDOM from 'react-dom';
import SectionComponent from './SectionComponent'

function Home() {
    const datas=[
        {
            "id":1,
            "title":"WBNB-AUTO LP",
            "rounded":"11.5x",
            "price":"46.0M",
            "bigper":43.6,
            "overallper":0.73
        },
        {
            "id":2,
            "title":"WBNB",
            "rounded":"1.5x",
            "price":"33.3M",
            "bigper":43.6,
            "overallper":0.73
        },
        {
            "id":3,
            "title":"USDT",
            "rounded":"1.0x",
            "price":"148.3M",
            "bigper":19.03,
            "overallper":0.05
        },
        {
            "id":4,
            "title":"DOT",
            "rounded":".20x",
            "price":"20.3M",
            "bigper":14.03,
            "overallper":0.04
        },
        {
            "id":5,
            "title":"LINK",
            "rounded":"1.0x",
            "price":"14.3M",
            "bigper":11.03,
            "overallper":0.05
        }
]
let itemList=datas.map((item,index)=>{
    return <SectionComponent item={item} />
  })
    return (
        <section>
        <div className="container main">
            <div className="row">
                <div className="tab-content">
                    <div id="Vaults" className="tab-pane fade in active">
                        <section className="report">
                            <div className="heading col-md-6">
                                <h2 className="col-md-12 font-semibold "> TVL $957,026,390</h2>
                                <h4 className="col-md-12">BSC TVL $938,281,372</h4>
                                <h4 className="col-md-12">AUTO $2,247.09</h4>
                                <button className="btn buy-auto" onclick="buy_auto()">Buy
                                    AUTO</button>
                            </div>
                            <div className="total col-md-6">
                                <div className="total-val col-md-12">
                                    <div className="font-semibold col-md-6">Total Deposit</div>
                                    <div className="text-right col-md-6">
                                        <div>$0.00</div>
                                    </div>
                                </div>
                                <div className="total-val col-md-12">
                                    <div className="font-semibold col-md-6">AUTO Rewards</div>
                                    <div className="text-right col-md-6">
                                        <div>0.0000</div>
                                    </div>
                                    <div className="text-right col-md-12">
                                        <div>$0.00</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="highlighted col-md-12">
                            <p><i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                Low BUSD & USDT liquidity on Venus have delayed withdrawals on these respective autofarm
                                vaults, we
                                seek
                                your understanding on this matter.</p>
                            <ul className="nav nav-pills">
                                <li className="active"><a data-toggle="tab" href="#Vaults">BSC</a></li>
                                <li><a data-toggle="tab" href="#Swap">HECO</a></li>
                            </ul>
                            <label className="switch">
                                <input type="checkbox" id="turbo" onclick="onTurbo()" />
                                <span className="slider round"></span>
                            </label>
                            <span id="turboEl">TURBO</span>
                        </section>
                        <section className="filters col-md-12">
                            <h5>FARM</h5>
                            <ul className="nav nav-pills">
                                <li className="active"><a data-toggle="tab" href="#">All</a></li>
                                <li><a data-toggle="tab" href="#">AUTO</a></li>
                                <li><a data-toggle="tab" href="#">Venus</a></li>
                                <li><a data-toggle="tab" href="#">HECO</a></li>
                                <li><a data-toggle="tab" href="#">BSC</a></li>
                                <li><a data-toggle="tab" href="#">Goose</a></li>
                                <li><a data-toggle="tab" href="#">bDollar</a></li>
                                <li><a data-toggle="tab" href="#">Viking</a></li>
                            </ul>
                        </section>
                        <section className="stacked-only col-md-12">
                            <div className="wallet">
                                <button className="btn">Staked Only
                                    <input type="checkbox" className="cursor-pointer form-checkbox h-5 w-5 text-gray-600"
                                        name="hideEmpty" id="hideEmpty"/>
                                </button>
                            </div>
                        </section>
                        <section className="warning turbo col-md-12" id="warning">
                            <div className="warning-cont">
                                <div className="warning-title"> WARNING </div>
                                <div> These farms have NOT been reviewed by the autofarm&nbsp;team. <br /> <b>DYOR</b>,
                                    use
                                    at your own risk.
                                </div>
                            </div>
                        </section>
                        <section className="content col-md-12">
                            <div className="grid">
                                <div className="grid-item col-md-8">
                                    <div className="font-semibold">Token</div>
                                    <div className="font-semibold flex space-x-1">
                                        <div className="leading-none" style={{fontSize: 9,transform: "scaleY(0.7)"}}>
                                            <div>▲</div>
                                            <div>▼</div>
                                        </div>
                                        <div>TVL</div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-2">
                                    <div className="flex justify-end items-center space-x-1">
                                        <div className="leading-none" style={{fontSize: 9,transform: "scaleY(0.7)"}}>
                                            <div>▲</div>
                                            <div>▼</div>
                                        </div>
                                        <div>APY</div>
                                    </div>
                                    <div className="">Daily APR</div>
                                </div>
                                <div className="grid-item col-md-2">
                                    <div>Balance</div>
                                    <div>Deposit</div>
                                    <div>Rewards</div>
                                </div>
                                <div className="grid-item col-md-2"></div>
                            </div>
                        </section>
                        {itemList}
                        <section className="note col-md-12">
                            Auto-compound assets. Earn AUTO.
                        </section>
                    </div>
                    <div id="Swap" className="tab-pane fade">
                        <p>BSC's best DEX aggregator.
                            Coming soon.</p>
                    </div>
                    <div id="Legacy" className="tab-pane fade">
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