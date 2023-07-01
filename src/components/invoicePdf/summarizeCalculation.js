import { Text, View } from "@react-pdf/renderer"
import {  summarizeCalculationColLeftStyle, summarizeCalculationColRightStyle, summarizeCalculationStyle } from "./styles"

export const summarizeCalculation =() =>{
    return(
        <View style={summarizeCalculationStyle}>
            <View style={summarizeCalculationColLeftStyle}>
                <Text>Gross Weight:         <Text>3455.93</Text>         <Text>KG</Text></Text>
                <Text>Wet Weight:            <Text>3255.93</Text>         <Text>KG</Text></Text>
                <Text>Volume:                      <Text>55.93</Text>         <Text>KG</Text></Text>
                
            </View>
            
            <View style={summarizeCalculationColRightStyle}>
            <Text>Total Pallet qty:         <Text>  10</Text>   </Text>
            <Text>Total Pcs qty:              <Text>1328</Text>   </Text>
            </View>
        </View>
    )
}