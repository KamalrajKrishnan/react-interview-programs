import React, {useState} from 'react';
import BackButton from './BackButton';

const SumOfNumbersBy3and5 = () => {
    const [summation, setSummation] = useState();
    const [startValue, setStartValue] = useState();
    const [endValue, setEndValue] = useState();
    const SumDivisible = (m, n)=>{
        let sum = 0;
        console.log(m,n)
        for (let index = m; index <= n; index++) {
            //console.log(index%3)
            if(index%3 == 0 && index%5 == 0){
                
                sum += index;
                console.log(sum)
            }
           
        }
        setSummation(sum);
    }

    const handleOnChange = (event)=>{
        console.log(event.target.value)
        return event.target.value;
    }
  return (
        <div className="container mt-4">
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label"> Start Value </label>
                                    <input
                                        type="number"
                                        name="start_value"
                                        id="start_value"
                                        className="form-control"
                                        value={startValue}
                                        onChange={(e)=>setStartValue(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Value</label>
                                    <input
                                        type="number"
                                        name="end_value"
                                        id="end_value"
                                        className="form-control"
                                        value={endValue}
                                        onChange={(e)=>setEndValue(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="text-center my-3">
                                <h2 className="text-success">
                                    {summation}
                                </h2>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-success  px-4 btn-sm"
                                    onClick={() => SumDivisible(startValue, endValue)}
                                > Calculate</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
    <BackButton />
        </div>
    )
}

export default SumOfNumbersBy3and5;