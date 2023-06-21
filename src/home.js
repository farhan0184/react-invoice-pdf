import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import { pageStyle, tableStyle } from './components/styles';
import { companyInfo, firstHeader, secondHeader, thirdHeader } from './components/headerComponent';
import { secondHeaderTableCol, thirdHeaderCol } from './components/tableComponent';
import { total } from './components/total';
import { summarizeCalculation } from './components/summarizeCalculation';
import { signature } from './components/signature';

const WorkTable = () => {

    
    return (
        <Document>
            <Page
                style={pageStyle}
                size="A4"
                orientation="landscape"
            >
                <View style={tableStyle}>
                    {companyInfo()}
                    {firstHeader()}
                    {secondHeader()}
                    {secondHeaderTableCol()}
                    {thirdHeader()}
                    {thirdHeaderCol()}
                    {thirdHeaderCol()}
                    {total()}
                    {summarizeCalculation()}
                    {signature()}
                </View>

            </Page>

        </Document>
    );
};








export default WorkTable;