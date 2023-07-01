import React from 'react';
import './userInput.css'
const UserInput = ({ handleUserData, data }) => {
    return (
        <div className='userInput'>
            <label htmlFor="">Date</label>
            <input onChange={(e) => handleUserData(e)} id='date' value={data.date} type="date" name="" placeholder='' />
            <div className='userInfo'>
                <div>
                    <label htmlFor="">Expenditure</label>
                    <input onChange={(e) => handleUserData(e)} id='expenditure' value={data.expenditure} type="text" name="" placeholder='Expenditure' />
                    <label htmlFor="">Buyer</label>
                    <input onChange={(e) => handleUserData(e)} id='buyer' value={data.buyer} type="text" name="" placeholder='Buyer' />
                
                    <label htmlFor="">Final Destination</label>
                    <input onChange={(e) => handleUserData(e)} id='finalDes' value={data.finalDes} type="text" name="" placeholder='Final Destination' />
                    <label htmlFor="">Country of Shipment</label>
                    <input onChange={(e) => handleUserData(e)} id='couOfShip' value={data.couOfShip} type="text" name="" placeholder='Country of Shipment' />
                </div>
                <div>
                    <label htmlFor="">Delivery Address</label>
                    <input onChange={(e) => handleUserData(e)} id='DeliAdd' value={data.DeliAdd} type="text" name="" placeholder='Delivery Address' />
                    <label htmlFor="">Notify Party</label>
                    <input onChange={(e) => handleUserData(e)} id='NotifyParty' value={data.NotifyParty} type="text" name="" placeholder='Notify Party' />
                
                    <label htmlFor="">Port of Destination</label>
                    <input onChange={(e) => handleUserData(e)} id='portOfDes' value={data.portOfDes} type="text" name="" placeholder='Port of Destination' />
                    <label htmlFor="">Incoteam</label>
                    <input onChange={(e) => handleUserData(e)} id='incoteam' value={data.incoteam} type="text" name="" placeholder='Incoteam' />
                </div>
            </div>
        </div>
    );
};

export default UserInput;