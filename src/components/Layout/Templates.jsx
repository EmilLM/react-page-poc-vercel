import { useState } from 'react'; 
import { Button, Menu, MenuItem, ListItemText } from '@material-ui/core';
import { withStyles, createTheme } from '@material-ui/core/styles';


const StyledMenu = withStyles({})((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const Templates = ({ loadTemplate, resetTemplate }) => {
    const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
    return ( 
        <>
            <Button
                variant="contained"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Templates
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}              
            >
                <MenuItem>
                    <ListItemText primary="Choice template" onClick={()=> console.log('test')} />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="Packs template" />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="Wheel template" />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="Test template" onClick={loadTemplate} />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="New template" onClick={resetTemplate} />
                </MenuItem>
            </StyledMenu>
        </> 
    );
}
 
export default Templates;