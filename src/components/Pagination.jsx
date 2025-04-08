import { Pagination as MuiPagination, Stack } from "@mui/material";

function Pagination({ total, carsPerPage, currentPage, setCurrentPage }) {
  const pageCount = Math.ceil(total / carsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        variant="outlined"
        size="medium"
      />
    </Stack>
  );
}

export default Pagination;
