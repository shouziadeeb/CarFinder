import { useState, useEffect } from "react";
import CarCard from "./components/CarCard";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
// import Wishlists from "./components/Wishlist";

import { Container, Grid, Box, Typography, CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "./store/carsSlice";
import Wishlists from "./components/WishList";

function App() {
  const [cars, setCars] = useState([]);
  // const [carsData, setCarsData] = useState([]);

  const [filters, setFilters] = useState({ brand: "", price: "", fuel: "" });
  const [myWishlist, setMyWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  // const fetchCars = async () => {
  //   try {
  //     const response = await fetch("https://www.freetestapi.com/api/v1/cars");
  //     if (!response.ok) throw new Error("Network response was not ok");

  //     const carss = await response.json();
  //     // console.log(carss);
  //     return carss;
  //   } catch (error) {
  //     console.error("Error fetching cars:", error);
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   const getCars = async () => {
  //     const data = await fetchCars();

  //     setCarsData(data);
  //   };
  //   getCars();
  // }, []);

  const dispatch = useDispatch();
  const { data: carsData } = useSelector((state) => state.cars);
  console.log(carsData);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    const filtered = carsData.filter((car) => {
      return (
        (!filters.brand || car.make === filters.brand) &&
        (!filters.price || car.price <= parseInt(filters.price)) &&
        (!filters.fuel || car.fuelType === filters.fuel)
      );
    });
    setCars(filtered);
    setCurrentPage(1); // reset page on filter change
  }, [carsData, filters]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(myWishlist));
  }, [myWishlist]);

  const addToWishlist = (car) => {
    if (!myWishlist.some((item) => item.id === car.id)) {
      setMyWishlist([...myWishlist, car]);
    }
  };

  const removeFromWishlist = (id) => {
    setMyWishlist(myWishlist.filter((item) => item.id !== id));
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  return (
    <Container maxWidth="lg">
      <CssBaseline />

      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Car Finder
        </Typography>

        {/* Filter Section */}
        <FilterBar filters={filters} setFilters={setFilters} />

        {/* Cars Grid */}
        <Grid
          container
          spacing={2}
          mt={2}
          alignContent={"center"}
          // direction={"column"}
          padding={2}
          justifyContent={"center"}
        >
          {currentCars.map((car) => (
            <Grid item xs={12} key={car.id}>
              <CarCard car={car} onAdd={addToWishlist} />
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Pagination
          total={cars.length}
          carsPerPage={carsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* Wishlist Section */}
        <Wishlists wishlist={myWishlist} onRemove={removeFromWishlist} />
      </Box>
    </Container>
  );
}

export default App;
