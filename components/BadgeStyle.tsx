import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface BadgeStyleProps {
    style: string;
    setStyle: Dispatch<SetStateAction<string>>;
}

const badgeStyleConfig = [
    {
        name:"plastic",
        width: 99, 
        height: 18
    },
    {
        name: "flat",
        width: 81, 
        height: 20
    },
    {
        name:"flat-square",
        width: 125, 
        height: 20
    },
    {
        name:"for-the-badge",
        width: 210, 
        height: 28
    },
    {
        name:"social",
        width: 98, 
        height: 20
    }
]

const BadgeStyle = ({style,setStyle}:BadgeStyleProps)=>{
    
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Style</FormLabel>
            <RadioGroup
                aria-label="style"
                name="style"
                value={style}
                onChange={({ target: { value } }) => {
                    setStyle(value)
                }}
                style={{ marginTop: 8 }}
            >
                {badgeStyleConfig.map(({name, width, height }) => (
                    <FormControlLabel
                        key={name}
                        value={name}
                        control={<Radio color="primary" />}
                        label={
                            <Image
                                src={`style-${name}.svg`}
                                alt={`badge style "${name.replace("-", " ")}"`}
                                width={width}
                                height={height}
                            />
                        }
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )

}

export default BadgeStyle

