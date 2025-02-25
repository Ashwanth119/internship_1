import { useState } from "react";
import Loader from "./Loader";


const Operators = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);
    
    const isEven = () => {
        setLoading(false)
        if (Math.round(Math.random() * 1000) % 2 === 0) {
            setData('number is even')
        } else {
            setError("number is not even")
        }
    }

    const handleClick = () => {
        setError("")
        setLoading(true);
        setData("")
        setTimeout(() => {
            isEven();
        }, 2000)
    }
    
    return (
        <>
            {
                loading
                    ? <Loader />
                    : error && !data
                        ? <h1 style={{
                            color: 'red'
                        }}>{error}</h1>
                        : data
                            ? <h1>{data}</h1>
                            : null
            }
            {
                
            }
            {/* {loading && <Loader />}
            {error && <h1 style={{
                color: 'red'
            }}>{error}</h1>}
            {data && <h1>{data}</h1>} */}
            <button onClick={handleClick} disabled={loading}>Click</button>
        </>
    )
}

export default Operators;