import React,{Fragment} from 'react';

const HeaderForm = () => {
    return ( 
        <Fragment>
            <div className="header-register">
              <div className="title">
                <h4>Registro de usuarios</h4>
                <img  style={{width: '15%'}} src='../images/speech-bubble.svg' alt='speech-bubble' className="speech-bubble"></img>
              </div>
              <div className="subtitle">
                <img style={{width: '5%', height:' 25px', 'margin-right': '10px'}} src='../images/clock.svg' alt='clock' className="speech-bubble"></img>
                <p>En menos de 5 minutos.</p>
              </div>
            </div>
        </Fragment>
     );
}
 
export default HeaderForm;