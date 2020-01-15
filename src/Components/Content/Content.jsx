import React, { Fragment } from 'react'
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core'

const styles = {
    Paper: {
        padding: 30,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        height: 500,
        overflowY: 'auto'
    }
}

const Content = ({ exercises, category }) => {
    // console.log(exercises);

    return <div>
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group
                            ? <Fragment>
                                <Typography
                                    variant="body1"
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ title }) =>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    )}
                                </List>
                               </Fragment>
                            : null
                    )}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography
                        variant="h4"
                    >
                        Welcome:
                    </Typography>
                    <Typography
                        style={{ marginTop: 20 }}
                    >
                        Right panel
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Content