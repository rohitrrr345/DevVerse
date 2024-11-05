import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Cards = ({item}) => {

  return (
   
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6"  component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions style={
            {
              display:"flex",
              justifyContent:"space-between"
            }
          }>
            <Button   style={{
              backgroundColor:"black",
              color:"white"
            }} size="small">Share</Button>
            <Button style={{
              backgroundColor:"black",
              color:"white"
            }} size="small">Learn More</Button>
          </CardActions>
        </Card>
     
  );
};

export default Cards;
