
import './item_form_input.css'
const ItemInputForm = ({handleChange,data,handleCloseModal, editIndex, handleSubmit, isFormValues}) => {
    

    return (
        <div className="modal" style={{position:'absolute', width:"100%", top:0}}>
            <div className="modal-content">

                <div className='form'>
                    <span style={{cursor:'pointer'}} className="close" onClick={handleCloseModal} >
                        &times;
                    </span>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='input-form'>
                            <div>
                                <label >description of Commodity</label>
                                <input onChange={handleChange} name='comDes' value={data.comDes} type="text" />
                                <label >BRAND NAME</label>
                                <input onChange={handleChange} name='brandName' value={data.brandName} type="text" />
                                <label >Model No.</label>
                                <input onChange={handleChange} name='modelNo' value={data.modelNo} type="text" />
                                <label >Purchase Oder Number</label>
                                <input onChange={handleChange} name='purchaseOrderNumber' value={data.purchaseOrderNumber} type="text" />
                                <label >HS Code Number</label>
                                <input onChange={handleChange} name='hsCodeNumber' value={data.hsCodeNumber} type="text" />
                                <label >Carton No.</label>
                                <input onChange={handleChange} name='cartonNo' value={data.cartonNo} type="text" />
                                <label >Number of Pallet</label>
                                <input onChange={handleChange} name='numberOfPallet' value={data.numberOfPallet} type="text" />

                            </div>
                            <div>
                                <label >Number of pcs per/package</label>
                                <input onChange={handleChange} name='numberOfPCS' value={data.numberOfPCS} type="text" />
                                <label >Number of pieces</label>
                                <input onChange={handleChange} name='numberOfPieces' value={data.numberOfPieces} type="text" />
                                <label >Net Weight/ Parcel KGS</label>
                                <input onChange={handleChange} name='netWeight' value={data.netWeight} type="text" />
                                <label >gross Weight/ Parcel KGS</label>
                                <input onChange={handleChange} name='grossWeight' value={data.grossWeight} type="text" />
                                <label >Volume Total</label>
                                <input onChange={handleChange} name='volumeTotal' value={data.volumeTotal} type="text" />
                                <label >Total Net Weight</label>
                                <input onChange={handleChange} name='totalNetWeight' value={data.totalNetWeight} type="text" />
                                <label >Total Gross Weight</label>
                                <input onChange={handleChange} name='totalGrossWeight' value={data.totalGrossWeight} type="text" />
                            </div>
                        </div>
                        <button type="submit" disabled={!isFormValues}>{editIndex === -1 ? 'Add User' : 'Update User'}</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ItemInputForm;