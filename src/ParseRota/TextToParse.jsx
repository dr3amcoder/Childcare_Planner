import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TextToParse = ({ rotaText, setRotaText, onParse }) => {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Paste rota text here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            fullWidth
            value={rotaText}
            onChange={(event) => setRotaText(event.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" onClick={() => onParse(rotaText)}>
            Parse data
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TextToParse;
