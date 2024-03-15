import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  Container,
} from "@mui/material";
import img1 from "../Assets/banyan.jpg";
import img2 from "../Assets/google.jpg";
import img3 from "../Assets/straw.jpg";
import img4 from "../Assets/comb.jpg";
import img5 from "../Assets/brush.jpg";
import img6 from "../Assets/people.jpeg";

export default function App() {
  const data = [
    {
      image: img1,
      title: "Banyan",
      price: "$100 | A bonsai tree as a gesture of wellness",
    },
    {
      image: img3,
      title: "Bamboo Straw",
      price: "$100 | Made from wood to reduce plastic",
    },
    {
      image: img4,
      title: "Wooden Comb",
      price: "$100 |Made from wood to reduce plastic",
    },
    {
      image: img5,
      title: "Bamboo Brush",
      price: "$100 | Made from wood to reduce plastic",
    },
    {
        image: img6,
        title: "Peepal sapling",
        price: "$100 | A gesture to mother nature",
    },
    {
        image: img2,
        title: "Goggle",
        price: "$100 | Made from fully recycled ocean plastic",
    }
    
  ];
  return (
    <Container style={{ backgroundColor: "#f0f8ea" }}>
      <Typography variant="h4" align="center" marginTop="20px">
        Products To Reduce Your Carbon Emission
      </Typography>
      <Grid container spacing={4} marginTop="20px">
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card maxWidth={345} padding="10px">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={`Image ${index}`}
                  style={{ borderRadius: "5px" }}
                />
                <CardContent style={{ marginBottom: "30px" }}>
                  <Typography gutterBottom variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button variant="contained" color="info">
                Buy Now
              </Button>
              <Button variant="contained" color="inherit">
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
