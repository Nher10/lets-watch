import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fethcFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fethcFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: "2",
      }}
    >
      <Typography
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search result for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
