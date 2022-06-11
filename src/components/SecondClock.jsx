import React, { useEffect } from 'react'

const SecondClock = ({ date, color }) => {
    const style = {
        color: color ? "tomato" : "black",
    };
    useEffect(() => {
        console.log("SecondClock.jsx - Mount useEffect()");
        return ()=>{
            console.log("SecondClock.jsx - UnMount useEffect()");
        }
    }, []);

    useEffect(() => {
        console.log("SecondClock.jsx - Update Color useEffect()");
    }, [color]);
    return (
        <>
            <p style={style}>
                ساعت در حال حاضر برابر : {date.toLocaleTimeString()}
            </p>
        </>
    )
}

export default SecondClock;