import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";

function TicketPDF() {
  return (
    <Document>
      <Page>
        <Text>Ticket</Text>
        <Text>Ticket</Text>
        <Text>Ticket</Text>
        <Text>Ticket</Text>
      </Page>
    </Document>
  );
}

export default TicketPDF;
