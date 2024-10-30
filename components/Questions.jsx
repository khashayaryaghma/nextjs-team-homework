"use client";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Questions({ data }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Stack>
      <Stack justifyContent="center" direction="row">
        <TextField value={inputValue} onChange={handleChange} placeholder="Search" sx={{ marginBottom: "3rem", width: "600px" }} size="small" />
      </Stack>
      <Stack gap="2rem">
        {data
          ?.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
          ?.map((el) => {
            return (
              <Stack key={el.id} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "1rem 2rem", cursor: "pointer" }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6">{el.title}</Typography>
                  <Typography>{el.createdTime}</Typography>
                </Stack>
                <Typography variant="subtitle2">{el.description.length > 30 ? el.description.slice(0, 30) + "..." : el.description}</Typography>
              </Stack>
            );
          })}
      </Stack>
    </Stack>
  );
}

export default Questions;
