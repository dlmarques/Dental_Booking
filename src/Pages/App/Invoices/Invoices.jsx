import React from "react";
import { Grid, Card, Text } from "@nextui-org/react";
import invoice from "../../../assets/imgs/invoice.png"

export default function Invoices() {
  const name = "InvoiceName.pdf";

  const InvoiceItem = ({ text }) => {
    return (
      <Card clickable  css={{height: "150px", backgroundColor: "#689ee2"}}>
        <Card.Body>
            <Card.Image 
            objectFit="cover"
            src={invoice}
            width="100%"

            />
        </Card.Body>
        <Card.Footer css={{ display: "flex", justifyContent: "center"}}>
          <Text h6 size={15} color="white" css={{ mt: 0, fontWeight: "700", fontSize: "1.2rem" }}>
            {text}
          </Text>
        </Card.Footer>
      </Card>
    );
  };
  return (
    <Grid.Container gap={3} justify="center">
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
      <Grid xs={4}>
        <InvoiceItem text={name} />
      </Grid>
    </Grid.Container>
  );
}
