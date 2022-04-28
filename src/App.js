import logo from "./logo.svg";
import "./App.css";
import XMLParser from "react-xml-parser";
import { useEffect } from "react";
import axios from "axios";
import TicketPDF from "./TicketPDF";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react/cjs/react.development";

function App() {
  const [table,seTable]=useState([])
  useEffect(() => {
    axios
      .get("/Boleta.xml", {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const xml = new XMLParser().parseFromString(res.data);
        console.log(xml);
        console.log(xml.getElementsByTagName("cbc:ID")[2].value);
        console.log(xml.getElementsByTagName("cbc:Name")[1].value);
        console.log(xml.getElementsByTagName("cbc:RegistrationName")[0].value);
        console.log(xml.getElementsByTagName("cbc:Line")[0].value);
        console.log(xml.getElementsByTagName("cbc:ID")[1].value);
        console.log(xml.getElementsByTagName("cbc:IssueDate")[0].value);
        const prices = [];
        xml.getElementsByTagName("cbc:PriceAmount").map((item, index) => {
          if (index % 2 !== 0) {
            prices.push(item.value);
          }
        });
        const amounts = [];
        console.log(prices);
        xml
          .getElementsByTagName("cbc:LineExtensionAmount")
          .map((item, index) => {
            if (index > 0) {
              amounts.push(item.value);
            }
          });

        //  console.log(xml.getElementsByTagName("cbc:InvoicedQuantity").value)
        const table=[]
        xml.getElementsByTagName("cbc:Description").map((item,index)=>{
          table.push({
            descripcion:xml.getElementsByTagName("cbc:Description")[index].value,
            cantidad:xml.getElementsByTagName("cbc:InvoicedQuantity")[index].value,
            precio:prices[index],
            subtotal:amounts[index],
          })
        })
        seTable(table)
        console.log(amounts);
        console.log(table);
        console.log(xml.getElementsByTagName("cbc:InvoicedQuantity"));
        console.log(xml.getElementsByTagName("cbc:Description"));
        console.log(xml.getElementsByTagName("cbc:TaxableAmount")[0].value);
        console.log(xml.getElementsByTagName("cbc:TaxAmount")[0].value);
        console.log(xml.getElementsByTagName("cbc:PayableAmount")[0].value);
        console.log(xml.getElementsByTagName("cbc:Note")[0].value);
        console.log(xml.getElementsByTagName("cbc:RegistrationName")[1].value);
     
      });
  }, []);
  return (
    <div className="App">
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <TicketPDF table={table}/>
      </PDFViewer>
    </div>
  );
}

export default App;
