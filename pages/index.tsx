import Head from "next/head";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Footer from "@/components/Footer";
import TypeHeroBadge from "@/components/TypeHeroBadge";


export default function Home() {

    return (
        <>
            <Head>
                <title>TypeHero Badge</title>
                <meta name="description" content="TypeHero Badge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    minHeight:'100vh'
                }}
            >
                <Paper
                    elevation={3}
                    style={{
                        margin: "24px",
                        padding: "24px 24px 8px 24px",
                    }}
                >
                    <Typography variant="h4" align="center">
                        TypeHero Badge Generator
                    </Typography>

                    <TypeHeroBadge/>

                    <Box style={{marginTop:32}}>
                        <Footer/>
                    </Box>
                    
                </Paper>
            </Box>
        </>
    );
}
