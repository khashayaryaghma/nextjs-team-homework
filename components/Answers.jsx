import { Box, Divider, Stack, Typography } from "@mui/material";
import AnsForm from "./AnsForm";

function Answers({ data }) {
  return (
    <>
      <Typography variant="h3" component="h1" mb={3} mt="7rem">
        {data.title}
      </Typography>
      <Typography gutterBottom>{data.description}</Typography>
      <Divider />
      <Typography variant="h5" my={5}>
        Answers:
      </Typography>
      <Stack gap={"2rem"} mt={5}>
        {data?.answers?.map((el) => (
          <Box key={el.id}>
            <Stack mb={5} padding="2rem 1rem" sx={{ border: "0.5px solid rgba(128, 128, 128, 0.302)", borderRadius: "8px" }}>
              <Typography gutterBottom>{el.ansText}</Typography>
            </Stack>
            <Divider />
          </Box>
        ))}
      </Stack>
      <AnsForm id={data.id} />
    </>
  );
}

export default Answers;
