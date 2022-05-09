import "./App.css";
import XMLParser from "react-xml-parser";
import { useEffect,useState } from "react";
import TicketPDF from "./TicketPDF";
import { PDFViewer } from "@react-pdf/renderer";

const Button = ({ handleConChange }) => {
  return (
    <div>
      <input type="file" onChange={(e) => handleConChange(e)} />
    </div>
  );
};
function App() {
  const [table, seTable] = useState([]);
  const [boleta, setBoleta] = useState({});
  const [xmlDoc, setXmlDoc] = useState();
  const [type,setType]=useState("");
  const handleConChange = (e) => {
    console.log(e.target.files[0].name.substring(0,6));
    const file = e.target.files[0];
    const reader = new FileReader();
    const type=e.target.files[0].name.substring(0,6)
    reader.onload = function (e) {
      console.log(e.target.result);
      let xmlDoc = null;
      if (window.DOMParser) {
        let parser = new DOMParser();
        xmlDoc = parser.parseFromString(e.target.result, "text/xml");
        console.log("AEA");
        console.log(xmlDoc);
        setXmlDoc({document:e.target.result,type: type});
      }
    };
    if (file) {
      reader.readAsText(file);
    }
  };
  console.log(xmlDoc);
  useEffect(() => {
    if (xmlDoc) {
      const xml = new XMLParser().parseFromString(xmlDoc.document);
      setBoleta({
        id: xml.getElementsByTagName("cbc:ID")[1].value,
        subtotal: xml.getElementsByTagName("cbc:TaxableAmount")[0].value,
        igv: xml.getElementsByTagName("cbc:TaxAmount")[0].value,
        nota: xml
          .getElementsByTagName("cbc:Note")[0]
          .value.substring(
            0,
            xml.getElementsByTagName("cbc:Note")[0].value.length - 1
          ),
        cliente: xml
          .getElementsByTagName("cbc:RegistrationName")[1]
          .value.substring(
            0,
            xml.getElementsByTagName("cbc:RegistrationName")[1].value.length - 1
          ),
        total: xml.getElementsByTagName("cbc:PayableAmount")[0].value,
        dni: xml.getElementsByTagName("cbc:ID")[3].value,
        fecha: xml.getElementsByTagName("cbc:IssueDate")[0].value,
        type:xmlDoc.type
      });
      const prices = [];
      xml.getElementsByTagName("cbc:PriceAmount").map((item, index) => {
        if (index % 2 !== 0) {
          prices.push(item.value);
        }
      });
      const amounts = [];
      xml.getElementsByTagName("cbc:LineExtensionAmount").map((item, index) => {
        if (index > 0) {
          amounts.push(item.value);
        }
        return;
      });

      const table = [];
      xml.getElementsByTagName("cbc:Description").map((item, index) => {
        table.push({
          descripcion: xml
            .getElementsByTagName("cbc:Description")
            [index].value.substring(
              0,
              xml.getElementsByTagName("cbc:Description")[index].value.length -
                1
            ),
          cantidad: xml.getElementsByTagName("cbc:InvoicedQuantity")[index]
            .value,
          precio: prices[index],
          subtotal: amounts[index],
        });
      });
      seTable(table);
    }
  }, [xmlDoc,type]);
  return (
    <div className="App">
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <TicketPDF table={table} boleta={boleta} />
      </PDFViewer>
      <Button handleConChange={handleConChange} />
    </div>
  );
}

export default App;
