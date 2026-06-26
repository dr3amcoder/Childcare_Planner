import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextToParse from "./TextToParse";
import ParsedText from "./ParsedText";

const ParseRota = () => {
  const [rotaText, setRotaText] = useState("");
  const [parsedRows, setParsedRows] = useState([]);

  const parseDataHandler = () => {
    const lines = rotaText
      .split("\n")
      .filter((line) => line.trim() !== "");

    setParsedRows(lines);
  };

  return (
    <div className="ParseRota">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "'Fascinate', system-ui, sans-serif" }}
        >
          Parse Rota
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            How to retrieve the rota details from a picture?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To automatically retrieve this data from a picture, use your phone’s
            OCR feature.
            <br />
            1. Open the rota image in your Photos app. If your phone detects
            text in the image, a text scanner icon should appear in the
            bottom-right corner of the screen.
            <br />
            2. Tap it to select and copy the rota text.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is OCR?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Optical Character Recognition (OCR) is a technology that converts
            images of typed, handwritten, or printed text into machine-encoded,
            editable, and searchable digital text. It acts like "digital eyes,"
            extracting data from scans, PDFs, or photos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <TextToParse
        rotaText={rotaText}
        setRotaText={setRotaText}
        onParse={parseDataHandler}
      />
      <ParsedText parsedRows={parsedRows} />
    </div>
  );
};

export default ParseRota;
