import * as React from 'react';
import { TextField,Button,Box,Container,Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useSelector } from "react-redux";

const SurveyInformationForm = (props) => {
    const { survey: tempSurvey } = useSelector((store) => ({
        survey: store.survey
      }));
    const {prevStep}=props;
    const theme = createTheme();

    const prevContinue=(e)=>{
        prevStep();
    }
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                  
            <h1>Survey Information</h1>

                <TextField 
                variant="outlined"
                label="Enter your survey caption"
                onChange={(newValue)=>{tempSurvey.caption=newValue}}
                 />
           <Stack direction="horizontal" gap={3}>
           <Button className='float mt-2' type="submit" variant="contained" onClick={prevContinue} >Önceki</Button>
            <Button className='float-end mt-2' type="submit" variant="contained"  >Kaydet</Button>
            </Stack>
        </Box>
        </Container>
        </ThemeProvider>
    );
};
export default SurveyInformationForm;