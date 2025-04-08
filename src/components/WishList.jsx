import { Typography, Grid, Card, CardContent, Button } from "@mui/material";

function Wishlist({ wishlist, onRemove }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Wishlist
      </Typography>

      {wishlist.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No items in wishlist.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {wishlist.map((car) => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {car.brand} {car.model}
                  </Typography>
                  <Button
                    onClick={() => onRemove(car.id)}
                    color="error"
                    size="small"
                    sx={{
                      marginTop: 1,
                      background: "gray",
                      color: "white",
                      padding: "0 15px 0 15px",
                    }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Wishlist;
