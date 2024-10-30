import { Box, Container, Stack } from "@mui/material";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "primary.main",paddingY:"3rem" }} component="footer">
      <Container>
        <Stack direction="row" gap={"1rem"} justifyContent="center">
          <Link href={"#"} style={{color:"#fafafa"}}>
            <LanguageIcon fontSize="large"/>
          </Link>
          <Link href={"#"} style={{color:"#fafafa"}}>
            <LinkedInIcon fontSize="large"/>
          </Link>
          <Link href={"#"} style={{color:"#fafafa"}}>
            <InstagramIcon fontSize="large"/>
          </Link>
          <Link href={"#"} style={{color:"#fafafa"}}>
            <GitHubIcon fontSize="large"/>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
