import React from 'react'



const Form = ({
    handleCardNumber, 
    cardNumber,
    handleKeydown, 
    handleDateChange,
    date,
    handleSecurityCode,
    securityCode,
    handlePostalCode,
    postalCode
    }) => {
    return (
        <div className='form'>
            <form>
                <div className="first_input">
                    <label>
                        Credit Form number
                        <input type="tel" 
                         name="credit-number"
                          max="19" 
                          onChange={handleCardNumber}
                          onKeyDown={handleKeydown}
                          value={cardNumber}
                          placeholder="0000 0000 0000 0000"
                          />
                    </label>
                    <label>
                        Expiration date
                        <input 
                        type="tel"
                        onChange={handleDateChange}
                        onKeyDown={handleKeydown}
                        value={date}
                        placeholder="01/31"
                        />
                    </label>
                </div>
                <div className="first_input">
                    <label>
                        Security code
                        <input 
                        type="tel" 
                        name="credit-number"
                        onChange={handleSecurityCode}
                        value={securityCode}
                        placeholder="000"
                        />
                    </label>
                    <label>
                        Postal code
                        <input 
                        type="tel"
                        onChange={handlePostalCode}
                        value={postalCode}
                        placeholder="00000"
                        />
                    </label>
                </div>
                <div className="radio-btn">
                    <input type="radio"/>
                    <p className="para-option">Use this Form next time for purchase</p>
                </div>
            <button className="addCard-btn">Add card</button>
            </form>
        </div>
    )
}

export default Form;
