import React from 'react';
import {Container, Button, Box, TextField, Grid, Paper} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container maxWidth="lg" className="container">
                    <Box className="box searchBox">
                        <Autocomplete
                            options={[]}
                            getOptionLabel={option => option.title}
                            className="autocomplete"
                            renderInput={params => (
                                <TextField {...params} label="City" variant="outlined" fullWidth />
                            )}
                            />
                        <Button variant="contained" color="primary" size="large">
                            Connect
                        </Button>
                    </Box >
                    <Box className="box resultBox">
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                            alignContent="stretch"
                        >
                            <Grid item xs={6}>
                                <Paper>Day 1</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>Day 2</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>Day 3</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>Day 4</Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>Day 5</Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}