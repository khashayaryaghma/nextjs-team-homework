"use client";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Questions({ data }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Stack>
      <Stack justifyContent="center" direction="row">
        <TextField
          value={inputValue}
          onChange={handleChange}
          placeholder="Search"
          sx={{ marginBottom: "3rem", width: "600px" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          size="small"
        />
      </Stack>
      <Stack gap="2rem" mb={15}>
        {data
          ?.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
          ?.map((el) => {
            return (
              <Link key={el.id} href={`/questions/${el.id}`}>
                <Stack
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "1rem 2rem",
                    cursor: "pointer",
                    transition: "all ease-in 0.1s",
                    ":hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" gutterBottom>
                      {el.title}
                    </Typography>
                    <Typography variant="subtitle2">{el.createdTime}</Typography>
                  </Stack>
                  <Typography variant="subtitle2">{el.description.length > 30 ? el.description.slice(0, 30) + "..." : el.description}</Typography>
                </Stack>
              </Link>
            );
          })}
      </Stack>
    </Stack>
  );
}

export default Questions;
