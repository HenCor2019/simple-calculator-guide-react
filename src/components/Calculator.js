import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator({ currentValue, previusValue, saveOperation,setCurrentValue, setSaveOperation, setPreviusValue }) {

    let [operation, setOperation] = useState('');


    const updateValues = (results) => {
        setCurrentValue(results.toString())
        setPreviusValue('')
        setSaveOperation('')
        setOperation('')
       
    }

    const handlerOperation = () => {
        let result = 0
        switch( operation ) {
            case '+' :
                result = parseFloat(previusValue) + parseFloat(currentValue);
                updateValues(result)
            break;
            case '-' :
                result = parseFloat(previusValue) - parseFloat(currentValue);
                updateValues(result)
            break;
            case '*' :
                result = parseFloat(previusValue)*parseFloat(currentValue);
                updateValues(result)
            break;
            case '/' :
                result = parseFloat(previusValue)/parseFloat(currentValue);
                updateValues(result)
            break;

        }
    }

    const selectHandlerOperation = (e) => {
        const operationValue = e.target.firstChild.data;
        if(operation === '') {
            setOperation(operationValue);
            let value = currentValue + operationValue;
            setSaveOperation(value)
            setPreviusValue(value)
            setCurrentValue('')

        }else {
            return
        }
    }


    const updateValue = (e) => {
        const clickValue = e.target.firstChild.data;
        let value = ''
        value += currentValue.toString() + clickValue.toString()
        setCurrentValue(value)
    }


    const cleanScreenHandler = () => {
        setCurrentValue('');
        setPreviusValue('')
        setSaveOperation('')
        setOperation('')
    }

    const removeLastValue = () => {
        const valueLength = currentValue.length
        let tmpvalue = currentValue
        console.log(valueLength);
        console.log(tmpvalue);
        console.log(tmpvalue[ valueLength - 1 ])

    }

    return(
        <div className='container w-25'>
            <div className="row row-col-4 bg-primary">{saveOperation}</div>
            <div className="row row-col-4 bg-dar">{currentValue}</div>
            <div className="row row-cols-4">
                <div className="col w-100"><button className="btn btn-danger" onClick={cleanScreenHandler}>AC</button></div>
                <div className="col w-100"><button className="btn" onClick={selectHandlerOperation}>/</button></div>
                <div className="col w-100"><button className="btn" onClick={selectHandlerOperation}>*</button></div>
                <div className="col w-100"><button className="btn" onClick={removeLastValue}>C</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>7</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>8</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>9</button></div>
                <div className="col w-100"><button className="btn" onClick={selectHandlerOperation}>+</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>4</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>5</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>6</button></div>
                <div className="col w-100"><button className="btn" onClick={selectHandlerOperation}>-</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>1</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>2</button></div>
                <div className="col w-100"><button className="btn" onClick={updateValue}>3</button></div>
                <div className="col w-100"><button className="btn btn-primary" onClick={handlerOperation}>=</button></div>
           </div>
        </div>
    )
}
export default Calculator
