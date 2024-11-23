import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import BadgeStyle from "./BadgeStyle";
import BadgeContent, { BadgeField } from "./BadgeContent";
import Button from '@mui/material/Button';

export interface TypeHeroBadgeFormData {
    username:string;
    style:string;
    label:string;
    displayValue:string;
}

export interface TypeHeroBadgeFormProps {
    submitFormData:(data:TypeHeroBadgeFormData)=>void;
}

const TypeHeroBadgeForm = ({submitFormData}:TypeHeroBadgeFormProps)=>{
    const [username,setUsername] = useState("");
    const [style,setStyle] = useState("flat");
    const [badgeContent,setBadgeContent] = useState<BadgeField>({
        label: "Solved",
        displayValue: "solvedOverTotal"
    })

    return (
        <Box
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <Box
                style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"flex-start",
                    marginTop:32,
                    width:256,
                    minHeight:96,
                }}
            >
                <TextField
                    autoFocus
                    id="username"
                    label="Your TypeHero username"
                    variant="outlined"
                    size="medium"
                    value={username}
                    onChange={({ target: { value } }) => {
                        setUsername(value);
                    }}
                    fullWidth
                />
            </Box>
            <Box
                style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:"flex-start",
                    justifyContent:"space-around",
                    flexWrap:"wrap"
                }}
            >
                <Box
                    style={{
                        minWidth:264,
                        marginTop:8,
                        marginLeft:16,
                    }}
                >    
                    <BadgeContent badgeContent={badgeContent} setBadgeContent={setBadgeContent}  />
                </Box>
                <Box
                    style={{
                        minWidth:264,
                        marginTop:8,
                        marginRight:-16
                    }}
                >
                    <BadgeStyle style={style} setStyle={setStyle} />
                </Box>
            </Box>
            
            <Button 
                variant="contained" 
                style={{marginTop:16}}
                onClick={()=>{
                    submitFormData({
                        username,
                        style,
                        ...badgeContent
                    })
                }}
            >Generate</Button>
        </Box>
    )
}

export default TypeHeroBadgeForm;