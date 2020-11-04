import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator({ currentValue, previusValue, saveOperation }) {

    return(
        <div className='container w-25'>
            <div className="row row-col-4 bg-primary">{saveOperation}</div>
            <div className="row row-col-4 bg-dar">{currentValue}</div>
            <div className="row row-cols-4">
                <div className="col w-100"><button className="btn btn-danger">AC</button></div>
                <div className="col w-100"><button className="btn">/</button></div>
                <div className="col w-100"><button className="btn">*</button></div>
                <div className="col w-100"><button className="btn">C</button></div>
                <div className="col w-100"><button className="btn">7</button></div>
                <div className="col w-100"><button className="btn">8</button></div>
                <div className="col w-100"><button className="btn">9</button></div>
                <div className="col w-100"><button className="btn">+</button></div>
                <div className="col w-100"><button className="btn">4</button></div>
                <div className="col w-100"><button className="btn">5</button></div>
                <div className="col w-100"><button className="btn">6</button></div>
                <div className="col w-100"><button className="btn">-</button></div>
                <div className="col w-100"><button className="btn">1</button></div>
                <div className="col w-100"><button className="btn">2</button></div>
                <div className="col w-100"><button className="btn">3</button></div>
                <div className="col w-100"><button className="btn btn-primary">=</button></div>
           </div>
        </div>
    )
}
export default Calculator
