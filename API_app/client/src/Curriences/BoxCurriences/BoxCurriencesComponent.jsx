import React from "react";

const BoxCurriencesComponent = (props) =>{
    const currenciesData = props.value;

    return(
        <div className='navigateCurrency'>
            {currenciesData
                .filter((currency) => ['EUR', 'USD', 'GBP'].includes(currency.code))
                .map((object, index) => (
                    <p key={index} className='boxCurrency'>
                        {object.code}: {object.bid}, {object.ask}
                    </p>
            ))}
      </div>
    )
}

export default BoxCurriencesComponent;