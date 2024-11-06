import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Cards = ({item}) => {

  return (
   
        <Card key={item.id} sx={{ Width: "300px" }}>
          <CardMedia
            sx={{ height: 200, width:"100%" }}
            image="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
           
          />
        
          <CardActions style={
            {
              display:"flex",
              justifyContent:"space-between"
            }
          }>
            <Button   style={{
              backgroundColor:"black",
              color:"white",
              fontFamily:"sans-serif"
            }} size="small">Share</Button>
            <Button style={{
              backgroundColor:"black",
              color:"white",
              fontFamily:"sans-serif"
            }} size="small">Learn More</Button>
          </CardActions>
        </Card>
     
  );
};

export default Cards;
