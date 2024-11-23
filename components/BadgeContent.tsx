import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Dispatch, SetStateAction, useState } from "react";

export interface BadgeField {
    label:string;
    displayValue:string;
}

interface BadgeContentProps {
    badgeContent: BadgeField;
    setBadgeContent: Dispatch<SetStateAction<BadgeField>>;
}

const PRESETS = [
    {
        name: "solved",
        label: "Solved",
        displayValue: "solved"
    },
    {
        name: "solvedOverTotal",
        label: "Solved",
        displayValue: "solvedOverTotal"
    },
    {
        name: "solvedPercentage",
        label: "Solved",
        displayValue: "solvedPercentage"
    },
    {
        name: "full",
        label: "Solved",
        displayValue: "full"
    },

];

const BadgeContent = ({badgeContent,setBadgeContent}:BadgeContentProps)=>{
    const [preset,setPreset] = useState("solvedOverTotal")

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Content</FormLabel>
            <FormControl style={{ marginTop: "16px" }}>
                <InputLabel id="badge-content-preset-label">Preset</InputLabel>
                <Select
                    labelId="badge-content-preset-label"
                    id="badge-content-preset-select"
                    onChange={({ target: { value } }) => {
                        setPreset(value);

                        if (value === "custom") {
                            return
                        }

                        const config = PRESETS.find(item=>item.name === value)!;
                        setBadgeContent({
                            label: config.label,
                            displayValue: config.displayValue
                        })

                    }}
                    label="Preset"
                    defaultValue="solvedOverTotal"
                    autoWidth={true}
                >
                    {PRESETS.map(
                        ({name }) => (
                            <MenuItem value={name} key={name}>
                                {name}
                            </MenuItem>
                        )
                    )}
                    <MenuItem value="custom">
                        <em>Custom</em>
                    </MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="badge-label"
                label="Label"
                value={badgeContent.label}
                onChange={(e) => setBadgeContent((b) => ({ ...b, label: e.target.value }))}
                disabled={preset !== "custom"}
                style={{ marginTop: "24px" }}
            />
            <FormControl style={{ marginTop: "24px" }}>
                <InputLabel id="badge-value-label">Displayed value</InputLabel>
                <Select
                    labelId="badge-value-label"
                    id="badge-value-select"
                    value={badgeContent.displayValue}
                    onChange={(e) =>
                        setBadgeContent((b) => ({
                            ...b,
                            displayValue: e.target.value ,
                        }))
                    }
                    label="Displayed value"
                    defaultValue="solvedOverTotal"
                    autoWidth={true}
                    disabled={preset !== "custom"}
                >
                    {PRESETS.map(
                        ({displayValue}) => (
                            <MenuItem value={displayValue} key={displayValue}>
                                {displayValue}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </FormControl>
    )
}

export default BadgeContent