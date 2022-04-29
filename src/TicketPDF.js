import React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

function TicketPDF({ table, boleta }) {
  Font.register({
    family: "Roboto Bold",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
  });
  Font.register({
    family: "Roboto Light",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
  });
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Roboto Light",
      maxWidth: "219px",
      padding: "10px",
    },
    bolder: {
      fontFamily: "Roboto Bold",
    },
  });
  console.log(table);
  console.log(boleta);
  return (
    <Document style={{ width: "100px" }}>
      <Page style={styles.page}>
        <View
          style={{
            textAlign: "center",
            maxWidth: "219px",
            margin: "0 auto 0 auto",
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              marginBottom: "10px",
              fontFamily: "Roboto Bold",
            }}
          >
            BODEGA BAZAR LIBRERIA JAIMITOS
          </Text>
          <Text style={{ fontSize: "10px" }}>RUC: 10218763320</Text>
          <Text style={{ fontSize: "10px", marginTop: "10px" }}>
            AV. LOS DOMINICOS 555 URB. JORGE CHAVEZ IIETP ENTRE OLIVAR/TOMAS
            VALLE FTE COL.BAUTISTA
          </Text>
          <Text
            style={{
              fontSize: "10px",
              marginTop: "10px",
              fontFamily: "Roboto Bold",
            }}
          >
            Boleta de Venta Electrónica
          </Text>
          <Text
            style={{
              fontSize: "10px",
              marginBottom: "10px",
              fontFamily: "Roboto Bold",
            }}
          >
            {boleta.id}
          </Text>

          <View>
            <View
              style={{
                fontSize: "10px",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
              }}
            >
              <Text style={{width:"30%"}}>Fecha:</Text>
              <Text style={{width:"80%", textAlign:"left",marginLeft:"5px"}}>{boleta.fecha}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
                
              }}
            >
              <Text style={{width:"30%"}}>Cliente:</Text>
              <Text style={{width:"80%", textAlign:"left",marginLeft:"5px"}}>{boleta.cliente}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
                
              }}
            >
              <Text style={{width:"30%"}}>Nro Doc:</Text>
              <Text style={{width:"80%", textAlign:"left",marginLeft:"5px"}}>{boleta.dni}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "100%",
                flexDirection: "row",
                marginBottom: "10px",
              }}
            >
              <Text
                style={{
                  width: "46%",
                  textAlign: "left",
                  fontFamily: "Roboto Bold",
                }}
              >
                Descripcion
              </Text>
              <Text
                style={{
                  width: "18%",
                  textAlign: "left",
                  fontFamily: "Roboto Bold",
                }}
              >
                Cant
              </Text>
              <Text
                style={{
                  width: "18%",
                  textAlign: "left",
                  fontFamily: "Roboto Bold",
                }}
              >
                Precio
              </Text>
              <Text
                style={{
                  width: "18%",
                  textAlign: "left",
                  fontFamily: "Roboto Bold",
                }}
              >
                SubT
              </Text>
            </View>
            {table.map((item, index) => (
              <View
                style={{
                  fontSize: "10px",
                  width: "100%",
                  flexDirection: "row",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ width: "46%", textAlign: "left" }}>
                  {item.descripcion}
                </Text>
                <Text style={{ width: "18%", textAlign: "left" }}>
                  {item.cantidad}
                </Text>
                <Text style={{ width: "18%", textAlign: "left" }}>
                  {item.precio}
                </Text>
                <Text style={{ width: "18%", textAlign: "left" }}>
                  {item.subtotal}
                </Text>
              </View>
            ))}
            <View
              style={{
                fontSize: "10px",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "50%",
                marginTop: "10px"
              }}
            >
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>Subtotal:</Text>
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>{boleta.subtotal}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "50%",
                marginTop: "10px"
              }}
            >
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>IGV:</Text>
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>{boleta.igv}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "50%",
                marginTop: "10px"
              }}
            >
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>Total:</Text>
              <Text style={{width:"40%",textAlign:"right",marginRight:"10px"}}>{boleta.total}</Text>
            </View>
            <View
              style={{
                fontSize: "10px",
                width: "100%",
                textAlign: "center",
                marginTop: "10px"
              }}
            >
              <Text>{boleta.nota}</Text>
            </View>
            <View
              style={{
                fontSize: "7px",
                width: "100%",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <Text>
                {" "}
                Esta es una representación impresa de la Boleta de Venta
                Electrónica, generada en el Sistema de la SUNAT. El Emisor
                Electrónico puede verificarla utilizando su clave SOL, el
                Adquirente o Usuario puede consultar su validez en SUNAT
                Virtual: www.sunat.gob.pe, en Opciones sin Clave SOL/ Consulta
                de Validez del CPE.{" "}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default TicketPDF;
