import React from "react";
import { Document, Font, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

function TicketPDF({table}) {

  Font.register({
    family: "Roboto Bold",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf"
  }
  );
  Font.register({
    family: "Roboto Light",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
  })
  const styles=StyleSheet.create({
    page:{
      fontFamily:"Roboto Light",
      maxWidth:"219px",
      padding:"10px"
    },
    bolder:{
      fontFamily:"Roboto Bold",
    }
  })
  console.log(table)
  return (
    <Document style={{width:"100px"}}>
      <Page  style={styles.page}>
        <View style={{textAlign:"center",maxWidth:"219px",margin:"0 auto 0 auto"}}>
        <Text style={{fontSize:"10px",marginBottom:"10px",fontFamily:"Roboto Bold"}}>BODEGA BAZAR LIBRERIA JAIMITOS</Text>
        <Text style={{fontSize:"10px"}}>RUC: 10218763320</Text>    
        <Text style={{fontSize:"10px",marginTop:"10px"}}>AV. LOS DOMINICOS 555 URB. JORGE CHAVEZ IIETP ENTRE OLIVAR/TOMAS VALLE FTE COL.BAUTISTA</Text>
        <Text style={{fontSize:"10px",marginTop:"10px",fontFamily:"Roboto Bold"}}>Boleta de Venta Electrónica</Text>
        <Text style={{fontSize:"10px",marginBottom:"10px",fontFamily:"Roboto Bold"}}>E001-99</Text>
 
        <View>
          <View style={{fontSize:"10px", width:"50%", display:"flex", flexDirection:"row",justifyContent:"space-between",marginBottom:"10px"}}>
            <Text>Fecha:</Text>
            <Text>2022-04-11</Text>
          </View>
          <View style={{fontSize:"10px", width:"100%", display:"flex", flexDirection:"row",justifyContent:"space-around", marginBottom:"10px"}}>
            <Text>Cliente:</Text>
            <Text style={styles.boldga}>CARMEN ROSA SANCHEZ LOPEZ </Text>
          </View>
          <View style={{fontSize:"10px", width:"100%", flexDirection:"row", marginBottom:"10px"}}>
            <Text style={{width:"46%", textAlign:"left",fontFamily:"Roboto Bold"}}>Descripcion</Text>
            <Text style={{width:"18%", textAlign:"left",fontFamily:"Roboto Bold"}}>Cant</Text>
            <Text style={{width:"18%", textAlign:"left",fontFamily:"Roboto Bold"}}>Precio</Text>
            <Text style={{width:"18%", textAlign:"left",fontFamily:"Roboto Bold"}}>SubT</Text>
          </View>
          {
            table.map((item,index)=>(
              <View style={{fontSize:"10px", width:"100%", flexDirection:"row",marginBottom:"5px"}}>
            <Text style={{width:"46%", textAlign:"left"}}>{item.descripcion}</Text>
            <Text style={{width:"18%", textAlign:"left"}}>{item.cantidad}</Text>
            <Text style={{width:"18%", textAlign:"left"}}>{item.precio}</Text>
            <Text style={{width:"18%", textAlign:"left"}}>{item.subtotal}</Text>
          </View>
            ))
          }
          <View style={{fontSize:"10px", width:"50%", display:"flex", flexDirection:"row",justifyContent:"space-around", marginLeft:"50%",marginTop:"10px"}}>
            <Text>Subtotal:</Text>
            <Text>24.15</Text>
          </View>
          <View style={{fontSize:"10px", width:"50%", display:"flex", flexDirection:"row",justifyContent:"space-around", marginLeft:"50%",marginTop:"10px"}}>
            <Text>IGV:</Text>
            <Text>4.35</Text>
          </View>
          <View style={{fontSize:"10px", width:"50%", display:"flex", flexDirection:"row",justifyContent:"space-around", marginLeft:"50%",marginTop:"10px"}}>
            <Text>Total:</Text>
            <Text>28.50</Text>
          </View>
          <View style={{fontSize:"10px", width:"100%",textAlign:"center",marginTop:"10px"}}>
            <Text>SON:  VEINTIOCHO Y 50/100  SOLES </Text>
          </View>
          <View style={{fontSize:"7px", width:"100%",textAlign:"center",marginTop:"10px"}}>
            <Text> Esta es una representación impresa de la Boleta de Venta Electrónica, generada en el Sistema de la SUNAT. El Emisor Electrónico puede verificarla utilizando su clave SOL, el Adquirente o Usuario puede consultar su validez en SUNAT Virtual: www.sunat.gob.pe, en Opciones sin Clave SOL/ Consulta de Validez del CPE. </Text>
          </View>
         
        </View>
        </View>
      </Page>
    </Document>
  );
}

export default TicketPDF;
