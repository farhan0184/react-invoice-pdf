import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import { pageStyle, tableStyle } from './styles';
import { companyInfo, firstHeader, secondHeader, thirdHeader } from './headerComponent';
import { secondHeaderTableCol, thirdHeaderCol } from './tableComponent';
import { total } from './total';
import { summarizeCalculation } from './summarizeCalculation';
import { signature } from './signature';

const WorkTable = ({userData,itemsLists}) => {
   
    return (
        <Document>
            <Page
                style={pageStyle}
                size="A4"
                orientation="landscape"
            >
                <View style={tableStyle}>
                    {companyInfo()}
                    {firstHeader(userData={userData})}
                    {secondHeader()}
                    {secondHeaderTableCol(userData={userData})}
                    {thirdHeader()}
                    {itemsLists.map(item=>
                        thirdHeaderCol(item={item})
                    )}
                    {total()}
                    {summarizeCalculation()}
                    {signature()}
                </View>

            </Page>

        </Document>
    );
};








export default WorkTable;