import { Text, View } from "@react-pdf/renderer"
import { secondHeaderLeftStyle, secondHeaderStyle, thirdHeaderLeftColStyle, thirdHeaderRightColStyle, thirdHeaderStyle } from "./styles"

export const companyInfo = () => {
    return (
        <View style={{ textAlign: 'center' }}>
            <Text style={{ fontSize: '10px' }}>
                Hasan Traders
            </Text>
            <Text style={{ fontSize: '9px' }}>
                phone number: +880174534....
            </Text>
        </View>
    )
}
export const firstHeader = ({userData}) => {
    return (
        <View style={{ textAlign: 'center', backgroundColor: 'gray', border: '1px solid #000', marginTop: '5px', borderLeftWidth: 0, borderRightWidth: 0 }}>
            <Text style={{ fontSize: '14px' }}>PACKING LISTE DE COLISAGE/ PACKING LIST</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', fontSize: '12px' }}>
                <Text>
                    NO: {userData.id}
                </Text>
                <Text>
                    Date: {userData.date}
                </Text>
            </View>
        </View>
    )
}
export const secondHeader = () => {
    return (
        <View style={secondHeaderStyle}>
            <View style={secondHeaderLeftStyle}><Text>Seller</Text></View>
            <View style={secondHeaderLeftStyle}><Text>Buyer</Text></View>
            <View style={secondHeaderLeftStyle}><Text></Text></View>
            <View style={{fontFamily:'Times-Bold'}}><Text>Country of shipment</Text></View>

        </View>
    )
}


export const thirdHeader = () => {
    return (
        <View style={thirdHeaderStyle}>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>description of</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Comodity</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View >
                    <Text style={{ padding: "5px 0" }}>BRAND</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>NAME</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <Text style={{ padding: "5px 0" }}>MODEL NO</Text>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Purchase Order</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Number</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>HS Code</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Number</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>CARTON No</Text>
                </View>
                <View style={thirdHeaderRightColStyle}>
                    <View style={{ width: '50%', borderRight: '1px solid #000', textAlign: 'center' }}>
                        <Text style={{ padding: "5px 0" }}>From</Text>
                    </View>
                    <View style={{ textAlign: 'center' }}>
                        <Text style={{ padding: "5px 0" }}>To</Text>
                    </View>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Number</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Of Pallet</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Number of</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>pcs per/prepack</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Number</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>of pieces</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Net Weight/</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Parcel KGS</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Gross Weight/</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Parcel KGS</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}> Volume total</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Total Volume</Text>
                </View>
            </View>
            <View style={thirdHeaderLeftColStyle}>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Net Worth</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Total net Weight</Text>
                </View>
            </View>
            <View>
                <View style={{ borderBottom: '1px solid #000' }}>
                    <Text style={{ padding: "5px 0" }}>Gross Weight</Text>
                </View>
                <View>
                    <Text style={{ padding: "5px 0" }}>Total Gross Weight</Text>
                </View>
            </View>
        </View>
    )
}