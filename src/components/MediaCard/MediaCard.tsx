import React from "react";

// mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  id: string;
  image: string;
  title: string;
  album: string;
  artist: string;
};

const MediaCard: React.FC<Props> = ({ id, image, title, album, artist }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardMedia component="img" height="200" image={image} alt="media image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Album: {album}
          <br />
          Artist: {artist}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add To Card
        </Button>
      </CardActions>
    </Card>
  );
};

export { MediaCard };
