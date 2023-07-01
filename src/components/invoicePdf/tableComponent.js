import { Text, View } from "@react-pdf/renderer"
import { secondHeaderColStyle, secondHeaderLeftColLeftStyle, secondHeaderLeftColStyle, secondHeaderRightColStyle, thirdBodyLeftColStyle, thirdHeaderStyle, } from "./styles"

export const secondHeaderTableCol = ({userData}) => {
    const data = userData.userData
    return (
        <View style={secondHeaderColStyle}>
            <View style={secondHeaderLeftColStyle} >
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                       Name: {data.expenditure}
                    </Text>
                    <Text>
                    Address: ddddddddd 
                        
                    </Text>
                    <Text>
                    Mobile Number: +880014546...  
                    </Text>
                    
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                       Name: {data.buyer}
                    </Text>
                    <Text>
                    Address: YYYYYYYYYY
                        
                    </Text>
                    <Text>
                    Mobile Number: +8814546...  
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        
                        Final Destination: {data.finalDes}
                        
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        Delivery address : 
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        Notify party : 
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        port of Destination:
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        {data.DeliAdd}
                    </Text>
                    <Text>
                        boyra, road no: 12, mujgoni
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                <Text>
                        {data.NotifyParty}
                    </Text>
                    <Text>
                        boyra, road no: 12, mujgoni
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        {data.portOfDes}
                    </Text>
                    <View style={{border:'1px solid #000', borderLeft: 0, borderRight:0, margin: "10px 0"}}>
                        <Text>INCOTEAM: {data.incoteam}</Text>
                    </View>
                </View>
            </View>
            <View style={secondHeaderRightColStyle}>
                <Text style={{textAlign:'center', marginTop: "30px"}}>{data.couOfShip}</Text>
            </View>

        </View>
        
    )
}


export const thirdHeaderCol = ({item}) =>{
    return(
        <View  style={thirdHeaderStyle}>
            <View style={thirdBodyLeftColStyle}><Text>{item.comDes}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.brandName}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.modelNo}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.purchaseOrderNumber}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.hsCodeNumber}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.cartonNo}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.numberOfPallet}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.numberOfPCS}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.numberOfPieces}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.netWeight}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.grossWeight}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.volumeTotal}</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>{item.totalNetWeight}</Text></View>
            <View><Text>{item.totalGrossWeight}</Text></View>
        </View>
        
    )
}