import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import WorkTable from '../invoicePdf/home';

const InvoicePdfDown = ({ itemsLists, userData,isDataForm }) => {


  console.log(userData)
  return (

    <div>
      <PDFDownloadLink document={<WorkTable itemsLists={itemsLists} userData={userData} />} fileName="FORM">
        {({ loading }) => (loading ? <button>Loading Document .....</button> : <button disabled={!isDataForm}>download</button>)}
      </PDFDownloadLink>
      hello
    </div>
  );
};

export default InvoicePdfDown;