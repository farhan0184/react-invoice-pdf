import React from 'react';
import './table.css'
const Table = ({itemsLists, handleEdit,handleDelete}) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>description of commodity</th>
                        <th>Brand Name</th>
                        <th>Model No</th>
                        <th>Purchase Order No</th>
                        <th>HS Code Number</th>
                        <th>Carton No</th>
                        <th>Number of pallet</th>
                        <th>Number of PCS</th>
                        <th>Number of pieces</th>
                        <th>Net Weight</th>
                        <th>Gross Weight</th>
                        <th>Volume Total</th>
                        <th>Net Weight</th>
                        <th>Gross Weight</th>
                        <th>Edit & delete btn</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemsLists.map((item,index) =>
                        <tr key={item.id}>
                            <td>{item.comDes}</td>
                            <td>{item.brandName}</td>
                            <td>{item.modelNo}</td>
                            <td>{item.purchaseOrderNumber}</td>
                            <td>{item.hsCodeNumber}</td>
                            <td>{item.cartonNo}</td>
                            <td>{item.numberOfPallet}</td>
                            <td>{item.numberOfPCS}</td>
                            <td>{item.numberOfPieces}</td>
                            <td>{item.netWeight}</td>
                            <td>{item.grossWeight}</td>
                            <td>{item.volumeTotal}</td>
                            <td>{item.totalNetWeight}</td>
                            <td>{item.totalGrossWeight}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Table;