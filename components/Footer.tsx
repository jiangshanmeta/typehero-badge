import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";



const Footer = () => (
    <footer>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="caption" align="center">
                Built on top of &nbsp;
                <Link href="https://typehero.dev/">TypeHero.dev</Link>{" "}
                and &nbsp;
                <Link href="https://shields.io/">Shields.io</Link>
                <br />
                 by &nbsp;
                <Link href="https://github.com/jiangshanmeta">jiangshanmeta</Link>
            </Typography>
        </Box>
    </footer>
);

export default Footer;