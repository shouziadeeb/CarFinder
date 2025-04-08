import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

function CarCard({ car, onAdd }) {
  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "300px",
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Link to={`/car/${car.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="200"
          image={car.image}
          alt={car.model}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {car.brand} {car.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${car.price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fuel: {car.fuelType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {car.make}
          </Typography>
        </CardContent>
      </Link>

      <Box px={2} pb={2} mt="auto">
        <Button
          variant="contained"
          fullWidth
          onClick={() => onAdd(car)}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Add to Wishlist
        </Button>
      </Box>
    </Card>
  );
}

export default CarCard;
