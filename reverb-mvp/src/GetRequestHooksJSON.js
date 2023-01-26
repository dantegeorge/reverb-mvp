import React, { useState, useEffect } from 'react';
var paymentString = "";

function GetRequestHooks({transID}) {
    const [transactionResult, setTransactionResult] = useState([]);
    var classNameVideo1 = "active-title-video-page";
    //console.log('transId: ',transID);

    const newUrl = 'https://jadepacific.eu/reflix?TID='+transID;
    //console.log('newUrl: ',newUrl);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(newUrl, {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => setTransactionResult(data))
            .catch((error) => console.error(error));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [newUrl]);

    paymentString = transactionResult.reduce((result, item) => {
        return `${item.resultcode}`
      }, "");
      
    
    return (
        paymentString
        //<p> {paymentString} </p>
    );
}

export { GetRequestHooks, paymentString};