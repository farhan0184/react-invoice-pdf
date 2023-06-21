import { Text, View } from "@react-pdf/renderer"
import { thirdBodyLeftColStyle, thirdHeaderStyle } from "./styles"

export const total = () =>{
    return(
        <View style={thirdHeaderStyle}>
            <View style={thirdBodyLeftColStyle}><Text>Grand total=</Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View style={thirdBodyLeftColStyle}><Text></Text></View>
            <View><Text></Text></View>
        </View>
    )
}