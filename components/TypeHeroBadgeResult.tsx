/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box"
import Alert from '@mui/material/Alert';
import { TypeHeroBadgeFormData } from "./TypeHeroBadgeForm"
import Grid from "@mui/material/Grid2";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import CopyToClipboard from "./CopyToClipboard";
interface TypeHeroBadgeResultProps {
    formData: TypeHeroBadgeFormData
}

function getUrl(formData: TypeHeroBadgeFormData){
    return "https://img.shields.io/endpoint?"+ new URLSearchParams({
        url:`https://typehero-badge.vercel.app/api/users/${formData.username}?`+new URLSearchParams({
            type:formData.displayValue
        }),
        labelColor:"#555555",
        color:"#97CA00",
        style:formData.style,
        label:formData.label
    })
}

function getMarkdown(formData: TypeHeroBadgeFormData){
    const username = formData.username.startsWith("@")? formData.username: `@${formData.username}`;
    return `[![TypeHero user ${username}](${getUrl(
        formData
    )})](https://typehero.dev/${username}/)`;
}

const TypeHeroBadgeResult = ({formData}:TypeHeroBadgeResultProps)=>{
    if(!formData.username){
        return <Alert severity="error">Input Username</Alert>
    }


    return (
        <>
            <Box
                style={{
                    marginTop:32,
                    minHeight:50,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <img
                    src={getUrl(formData)}
                    alt={formData.username}
                />
            </Box>
            <Grid
                container
                spacing={10}
                justifyContent="center"
                alignItems="flex-end" 
                style={{ marginTop: "8px" }}
            >
                <Grid size={6}>
                    <CopyToClipboard
                        icon={faImage}
                        label="Copy Image URL"
                        textToCopy={getUrl(formData)}
                    />
                </Grid>
                <Grid size={6}>
                    <CopyToClipboard
                        icon={faMarkdown}
                        label="Copy Markdown Code"
                        textToCopy={getMarkdown(formData)}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default TypeHeroBadgeResult