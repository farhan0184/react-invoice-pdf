import { Text, View } from "@react-pdf/renderer"

export const signature = () => {
    return (
        <View style={{ borderTop: "1px solid #000", padding: "20px 0",position: "relative" }}>
            <View style={{
                position: "absolute",
                bottom: 0,
                right: 0, 
                width: "20%",
                borderTop:'1px solid #000',
                margin:"10px 0",
                fontSize: '10px',
                textAlign: 'center'
            }}>
                <Text>Signature</Text>
            </View>
        </View>
    )
}