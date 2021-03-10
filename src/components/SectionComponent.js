import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import ToggleComponent from './ToggleComponent'

function SectionCompo(props) {
     const [show,setShow] = React.useState(false);
    
    return (
        <div>
            <section className="content col-md-12 dropdownc">
            
                            <div className="grid">
                            
                                <div className="grid-item  col-md-8">
                                    <div className="stock-img col-md-2">
                                        <img src="https://assets.coingecko.com/coins/images/14072/small/2_%282%29.png?1614151730"
                                            className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png"
                                            className="w-6 h-6 sm:w-8 sm:h-8" style={{marginLeft: "-0.75rem"}} />
                                            
                                    </div>
                                    <div className="col-md-8 stock-detail">
                                   
                                        <span className="title">{props.item.title}</span>&nbsp;<span
                                            className="status">Disabled</span><br />
                                        <span className="rounded">{props.item.rounded}</span>
                                        &thinsp;
                                        <div className="stock-price">TVL&nbsp;${props.item.price}</div>
                                    </div>
                                </div>

                                <div className="grid-item col-md-2">
                                    <div className="value"><span>{props.item.bigper} %</span><br />&nbsp;{props.item.overallper}%</div>
                                </div>
                                <div className="grid-item col-md-2">
                                    <span className="col-md-8">
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </span>
                                    <span className="col-md-4">
                                        <FontAwesomeIcon  icon={show?faAngleUp: faAngleDown} onClick={()=>setShow(!show)}/>
                                       
                                    </span>
                                </div>
                                <div className="grid-item col-md-2"></div>
                            </div>
                            
                            {show?<ToggleComponent/>:null}
                        </section>
                        
        </div>
    );
}
export default SectionCompo;
