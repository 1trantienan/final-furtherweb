import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Highlight() {
    return (
        <Grid container spacing = {3}>
            <Grid item sm ={4} xs = {12}>
                <Card>
                    <CardContent>
                        <Typography component = 'p' variant = 'body2'>Infected</Typography>
                        <Typography component = 'span' variant = 'body2'>number</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm ={4} xs = {12}>
            <Card>
                    <CardContent>
                        <Typography component = 'p' variant = 'body2'>Infected</Typography>
                        <Typography component = 'span' variant = 'body2'>number</Typography>
                    </CardContent>
                </Card>

            </Grid>
            <Grid item sm ={4} xs = {12}>
            <Card>
                    <CardContent>
                        <Typography component = 'p' variant = 'body2'>Infected</Typography>
                        <Typography component = 'span' variant = 'body2'>number</Typography>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}
