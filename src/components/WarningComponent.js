import React from 'react';
//import ReactDOM from 'react-dom';

function WarningCompo() {
    return(
        <section className="warning turbo col-md-12" id="warning">
            <div className="warning-cont">
                <div className="warning-title"> WARNING </div>
                <div> These farms have NOT been reviewed by the autofarm&nbsp;team. <br /> <b>DYOR</b>,
                use
                at your own risk.
                </div>
            </div>
        </section>
    );
}

export default WarningCompo;