import React, { useState } from 'react';
import UserInput from './userInput/userInput';
import Table from './tableSection/table';
import './dashBoard.css'
import ItemInputForm from './modal/item_form_input';
import InvoicePdfDown from '../invoicePdfDownlod/InvoicePdfDown';

const DashBoard = () => {

    const [id, setId] = useState(1)
    const [itemsListId, setItemsListId] = useState(1)
    const [itemsLists, setItemsLists] = useState([])
    const [editIndex, setEditIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({
        id: id,
        date: '',
        expenditure: '',
        buyer: '',
        finalDes: '',
        couOfShip: '',
        DeliAdd: '',
        NotifyParty: '',
        portOfDes: '',
        incoteam: '',

    })
    const handleUserData = e => {
        const newUserData = { ...userData }
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData)
    }
    const isDataForm = userData.date.trim() !== '' && userData.expenditure.trim() !== '' &&  userData.buyer.trim() !== '' && userData.finalDes.trim() !== '' && userData.couOfShip.trim() !== '' && userData.DeliAdd.trim() !== '' && userData.NotifyParty.trim() !== '' && userData.portOfDes.trim() !== '' && userData.incoteam.trim() !== ''

    // row item


    const [formValues, setFormValues] = useState({
        comDes: '',
        brandName: '',
        modelNo: '',
        purchaseOrderNumber: '',
        hsCodeNumber: '',
        cartonNo: '',
        numberOfPallet: '',
        numberOfPCS: '',
        numberOfPieces: '',
        netWeight: '',
        grossWeight: '',
        volumeTotal: '',
        totalNetWeight: '',
        totalGrossWeight: ''
    });

    const isFormValues = formValues.comDes.trim() !== '' && formValues.brandName.trim() !== '' && formValues.modelNo.trim() !== '' && formValues.purchaseOrderNumber.trim() !== '' && formValues.hsCodeNumber.trim() !== '' && formValues.cartonNo.trim() !== '' && formValues.numberOfPallet.trim() !== '' && formValues.numberOfPCS.trim() !== '' && formValues.numberOfPieces.trim() !== '' && formValues.netWeight.trim() !== '' && formValues.grossWeight.trim() !== '' && formValues.volumeTotal.trim() !== '' && formValues.totalNetWeight.trim() !== '' && formValues.totalGrossWeight.trim() !== '';

    const handleInputChange = (e) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();


        if (editIndex === -1) {
            // Create a new user object with a unique ID
            const newUser = {
                id: itemsListId,
                ...formValues,
            };

            // Add the new user to the users array
            setItemsLists([...itemsLists, newUser]);
        } else {
            // Update the user at the specified index
            const updatedUsers = [...itemsLists];
            updatedUsers[editIndex] = {
                ...updatedUsers[editIndex],
                ...formValues,
            };
            setItemsLists(updatedUsers);
            setEditIndex(-1);
        }
        setItemsListId(itemsListId + 1)
        // Clear the form inputs
        setFormValues({
            comDes: '',
            brandName: '',
            modelNo: '',
            purchaseOrderNumber: '',
            hsCodeNumber: '',
            cartonNo: '',
            numberOfPallet: '',
            numberOfPCS: '',
            numberOfPieces: '',
            netWeight: '',
            grossWeight: '',
            volumeTotal: '',
            totalNetWeight: '',
            totalGrossWeight: ''
        })
        setShowModal(false);

    };

    const handleDelete = (index) => {
        // Remove the user at the specified index
        const updatedItemsLists = [...itemsLists];
        updatedItemsLists.splice(index, 1);
        setItemsLists(updatedItemsLists);
    };

    const handleEdit = (index) => {
        // Set the form inputs to the values of the user being edited
        const itemsListToEdit = itemsLists[index];
        setFormValues({
            comDes: itemsListToEdit.comDes,
            brandName: itemsListToEdit.brandName,
            modelNo: itemsListToEdit.modelNo,
            purchaseOrderNumber: itemsListToEdit.purchaseOrderNumber,
            hsCodeNumber: itemsListToEdit.hsCodeNumber,
            cartonNo: itemsListToEdit.cartonNo,
            numberOfPallet: itemsListToEdit.numberOfPallet,
            numberOfPCS: itemsListToEdit.numberOfPCS,
            numberOfPieces: itemsListToEdit.numberOfPieces,
            netWeight: itemsListToEdit.netWeight,
            grossWeight: itemsListToEdit.grossWeight,
            volumeTotal: itemsListToEdit.volumeTotal,
            totalNetWeight: itemsListToEdit.totalNetWeight,
            totalGrossWeight: itemsListToEdit.totalGrossWeight
        });
        setEditIndex(index);
        setShowModal(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setEditIndex(-1);
        setFormValues({
            comDes: '',
            brandName: '',
            modelNo: '',
            purchaseOrderNumber: '',
            hsCodeNumber: '',
            cartonNo: '',
            numberOfPallet: '',
            numberOfPCS: '',
            numberOfPieces: '',
            netWeight: '',
            grossWeight: '',
            volumeTotal: '',
            totalNetWeight: '',
            totalGrossWeight: ''
        })
    };

    

    return (
        <div className='dashBoard'>

            <UserInput handleUserData={handleUserData} data={userData} />
            <Table itemsLists={itemsLists} handleEdit={handleEdit} handleDelete={handleDelete} />
            <button onClick={() => setShowModal(true)} className='addItem'>Add Item</button>
            {
                showModal && <ItemInputForm
                    handleChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    data={formValues}
                    editIndex={editIndex}
                    handleCloseModal={handleCloseModal}
                    isFormValues = {isFormValues}
                />
            }
            <InvoicePdfDown isDataForm={isDataForm} userData={userData} itemsLists={itemsLists} />
        </div>
    );
};

export default DashBoard;