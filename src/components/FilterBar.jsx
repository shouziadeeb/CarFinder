import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";

function FilterBar({ filters, setFilters }) {
  const theme = useTheme(); // to access current theme palette

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={3}
      bgcolor={theme.palette.background.paper} // adapt to dark/light mode
      boxShadow={2}
      p={3}
      borderRadius={2}
      mb={4}
    >
      {/* Brand Filter */}
      <FormControl sx={{ minWidth: 160 }} size="small">
        <InputLabel id="brand-label">Brand</InputLabel>
        <Select
          labelId="brand-label"
          id="brand"
          label="Brand"
          value={filters.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        >
          <MenuItem value="">All Brands</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Kia">Kia</MenuItem>
          <MenuItem value="Ford">Ford</MenuItem>
          <MenuItem value="Toyota">Toyota</MenuItem>
          <MenuItem value="Honda">Honda</MenuItem>
        </Select>
      </FormControl>

      {/* Price Filter */}
      <FormControl sx={{ minWidth: 160 }} size="small">
        <InputLabel id="price-label">Price</InputLabel>
        <Select
          labelId="price-label"
          id="price"
          label="Price"
          value={filters.price}
          onChange={(e) => handleChange("price", e.target.value)}
        >
          <MenuItem value="">Any Price</MenuItem>
          <MenuItem value="20000">Under $20,000</MenuItem>
          <MenuItem value="30000">Under $30,000</MenuItem>
          <MenuItem value="40000">Under $40,000</MenuItem>
          <MenuItem value="50000">Under $50,000</MenuItem>
        </Select>
      </FormControl>

      {/* Fuel Filter */}
      <FormControl sx={{ minWidth: 160 }} size="small">
        <InputLabel id="fuel-label">Fuel Type</InputLabel>
        <Select
          labelId="fuel-label"
          id="fuel"
          label="Fuel Type"
          value={filters.fuel}
          onChange={(e) => handleChange("fuel", e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Petrol">Petrol</MenuItem>
          <MenuItem value="Diesel">Diesel</MenuItem>
          <MenuItem value="Gasoline">Gasoline</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterBar;
