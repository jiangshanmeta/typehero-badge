import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Box, Tooltip, Zoom } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import copy from "copy-to-clipboard";
import { FC, useEffect, useState } from "react";

import styles from "./CopyToClipboard.module.css";

import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const COPY_TO_CLIPBOARD = "Copy to clipboard";

// const useDarkStyle = makeStyles(() => ({
//     arrow: {
//         color: "#212121",
//     },
//     tooltip: {
//         backgroundColor: "#212121",
//     },
// }));

const CopyToClipboard: FC<{
  icon: IconDefinition;
  label: string;
  textToCopy: string;
}> = ({ icon, label, textToCopy }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipText, setTooltipText] = useState(COPY_TO_CLIPBOARD);

    // const classes = useDarkStyle();

    useEffect(() => {
        const tId = setTimeout(() => {
            if (!tooltipOpen) setTooltipText(COPY_TO_CLIPBOARD);
        }, 500);
        return () => clearTimeout(tId);
    }, [tooltipOpen]);



    return (
        <Tooltip

            open={tooltipOpen}
            onOpen={() => setTooltipOpen(true)}
            onClose={() => setTooltipOpen(false)}
            title={tooltipText}
            placement="bottom"

            arrow
            enterTouchDelay={0}
            leaveTouchDelay={1000}
        >
            <Box
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    cursor: "pointer"
                }}

                className={styles.main}
                onClick={() => {
                    copy(textToCopy);
                    setTooltipText("Copied!");
                }}
                tabIndex={0}
                data-testid="CopyToClipboardBox"
            >
                <FontAwesomeIcon icon={icon} size="2x" />
                <span style={{ fontWeight: 400 }}>{label}</span>
            </Box>
        </Tooltip>
    );
};

export default CopyToClipboard;