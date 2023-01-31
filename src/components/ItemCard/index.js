import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button,TextField,Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import {useDispatch} from 'react-redux';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

export default function ItemCard(props) {
  let [qty,setQty] = useState('1');
  let [counter,setCounter] = useState(0)  
  let avatar = props.avatar;
  let title = props.title;
  let subheader = props.subheader;
  let cardMedia = props.cardMedia; 
  let cardContent = props.cardContent;
  let actualPrice = props.actualPrice;
  let actualPriceValue = parseFloat(actualPrice)
  let discountedPrice = props.discountedPrice;
  let rating = props.rating;
  let sellingStatus = props.sellingStatus;
  
  
  const dispatch = useDispatch();

    let percentageDiscount = parseInt(((actualPrice-discountedPrice)/actualPrice)*100)

    let params = {
        name:title,
        qty:qty,
        actualPrice:actualPrice,
        discountedPrice:discountedPrice,
        percentageDiscount:percentageDiscount
        
      }
  let orderPlaced = props.order;
 //console.log('price',typeof(actualPriceValue))
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick=()=>{
    console.log('i am clicked',params)
  }
  return (
    <Card sx={{ width: 350, padding:'10px' }}>
         <Box sx={{ position: 'relative' }}>
         <CardMedia
        component="img"
        height="194"
        image={cardMedia}
        alt="Paella dish"
        
      />
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left:'70%',
        right:0,
        width: '100%',
       // backgroundImage: 'linear-gradient(to right,#AA3003,#AA7f03 ,#AAdb03)',
       // bgcolor: 'rgba(0, 0, 0, 0.5)',
        //backgroundColor:'red',
        color: 'white',
        //padding: '10px',
        borderRadius:'10px'
      
      }}
    >
   
      <Typography variant="body2" sx={{width:'25%',marginLeft:'10px',color:'blue',backgroundImage:'linear-gradient(to right,#FF30DD,#FF7fDD ,#FFdbDD)', borderRadius:'25px', opacity:0.8}}>
         {sellingStatus}
      </Typography>
    </Box>
         </Box>

            {/* <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" disableFocusRipple={false}>
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      /> */}
      <Typography variant="subtitle2" sx={{marginTop:'10px', fontWeight:'bold'}}>
        {title}
      </Typography>
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
         {cardContent}
        </Typography>
      </CardContent> */}
      <Box sx={{display:'flex'}}>
      <Typography variant='caption' sx={{margin:'10px',textDecoration: "line-through"}}>
            Rs {actualPrice}
        </Typography>
        <Typography variant='subtitle2' sx={{margin:'8px', marginLeft:'0px'}}>
            Rs {discountedPrice}
        </Typography>
        <Typography variant='subtitle2' sx={{margin:'8px', marginLeft:'0px',fontWeight:'bold', color:'green'}}>
            {percentageDiscount} % Off
        </Typography>
        <Box sx={{flexGrow:0.75}}/>
        <Rating name="customized-10" sx={{marginTop:'10px',marginRight:'10px'}} defaultValue={2} size="small" max={1} />
        <Typography sx={{marginTop:'9px'}} >
            {rating}
        </Typography>

      </Box>
        

        <CardActions>
        <Typography>
            Qty
        </Typography>
        
          
        
        <TextField 
            size="small" 
            sx={{height:'0px',paddingLeft:'20px', paddingRight:'20px', paddingTop:'2px', marginBottom:'40px', width:"60px" }} 
            variant="outlined" 
            //defaultValue="1"
            name="qty"
            autoComplete="qty"
            autoFocus
            value={qty}
            onChange={(e)=>setQty(e.currentTarget.value)}
            />
        <Button 
            sx={{paddingLeft:'10px',marginRight:'40px', backgroundColor:'#BCEAD5', fontSize:"xl"}}
            onClick={()=>dispatch(orderPlaced(params))}
           
            >
            
            <Typography sx={{paddingRight:'10px', textTransform:'none'}}>
                Add
            </Typography>
             <AddShoppingCartIcon />

        </Button>
        {/* <Button onClick={()=>setCounter(counter--)}>-</Button
       
            
        >{counter}<Button
        onClick={()=>setCounter(counter++)}
        >+</Button> */}
        <StyledRating
            name="customized-color"
            defaultValue={0}
            max={1}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" 
            
            />}
         />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        
       
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}