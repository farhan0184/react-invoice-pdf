import { Text, View } from "@react-pdf/renderer"
import { secondHeaderColStyle, secondHeaderLeftColLeftStyle, secondHeaderLeftColStyle, secondHeaderRightColStyle, thirdBodyLeftColStyle, thirdHeaderStyle, } from "./styles"

export const secondHeaderTableCol = () => {
    return (
        <View style={secondHeaderColStyle}>
            <View style={secondHeaderLeftColStyle}>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        Mr X 
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
                        Mr y
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
                        
                        Final Destination: kkkkkk 
                        
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
                        khulna
                    </Text>
                    <Text>
                        boyra, road no: 12, mujgoni
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                <Text>
                        khulna
                    </Text>
                    <Text>
                        boyra, road no: 12, mujgoni
                    </Text>
                </View>
                <View style={secondHeaderLeftColLeftStyle}>
                    <Text>
                        port of king 
                    </Text>
                    <View style={{border:'1px solid #000', borderLeft: 0, borderRight:0, margin: "10px 0"}}>
                        <Text>INCOTEAM: CHITTAGONG</Text>
                    </View>
                </View>
            </View>
            <View style={secondHeaderRightColStyle}>
                <Text style={{textAlign:'center', marginTop: "30px"}}>Bangladesh</Text>
            </View>

        </View>

    )
}


export const thirdHeaderCol = () =>{
    return(
        <View style={thirdHeaderStyle}>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View style={thirdBodyLeftColStyle}><Text>demo</Text></View>
            <View><Text>demo</Text></View>
        </View>
    )
}