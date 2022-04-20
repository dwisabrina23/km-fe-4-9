import React from "react";
import "./Gif.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Gif({ title, url }) {
    return (
        <Card sx={{ maxWidth: 345 }} className="col-md-3 m-2" variant="outlined" data-testid="gif">
            <CardMedia component="img" height="200" image={url} alt={title} />
            <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"1rem"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={url} target="_blank">See on Giphy</Button>
            </CardActions>
        </Card>
    );
}

export default Gif;
