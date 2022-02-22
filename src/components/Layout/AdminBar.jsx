import styled from 'styled-components';

import { Button } from '@material-ui/core';

const Bar = styled.div`
  background: navy;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: center;

  button {
	margin: 0 20px;
  }
`

const AdminBar = ({ children, resetTemplate, saveTemplate }) => {

    return ( 
        <Bar>
        	<Button variant="contained" onClick={saveTemplate}> Save </Button>
			    { children }
			    <Button variant="contained" onClick={resetTemplate} > Reset </Button>
        </Bar>
    );
}
 
export default AdminBar;