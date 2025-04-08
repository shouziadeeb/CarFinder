import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: carsData } = useSelector((state) => state.cars);
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <Box p={4}>
        <Typography variant="h6" color="error">
          Car not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Button
        variant="text"
        onClick={() => navigate(-1)}
        sx={{ mb: 2, background: "skyblue", color: "Black" }}
      >
        ← Back
      </Button>

      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="300"
          image={car.image}
          alt={car.model}
          sx={{ borderRadius: 2, objectFit: "cover", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            {car.brand} {car.model}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Price:</strong> ${car.price.toLocaleString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Fuel:</strong> {car.fuelType}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Engine:</strong> {car.engine}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Model:</strong> {car.make}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Horsepower:</strong> {car.horsepower}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Owners:</strong> {car.owners}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Year:</strong> {car.year}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>transmission:</strong>
            {car.transmission}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {car.features.map((item) => (
              <strong>{item} </strong>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CarDetail;
