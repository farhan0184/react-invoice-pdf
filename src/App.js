import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import PDFFile from "./components/pdffile";
// import TableDocument from "./components/tableDocument";
import WorkTable from "./home";
import './App.css';


function App() {
  return (
    <div className="app">
      <h1>hello world</h1>
      <PDFDownloadLink document={<WorkTable/>} fileName="FORM">
        {({ loading }) => (loading ? <button>Loading Document .....</button> : <button>download</button>)}
      </PDFDownloadLink>
      <PDFViewer style={viewerStyle}>
      <WorkTable />
    </PDFViewer>
      
    </div>
  );
}
const viewerStyle = {
  display: "block",
  margin: "0 auto",
  width: "70vw",
  height: "90vh"
};

export default App;
