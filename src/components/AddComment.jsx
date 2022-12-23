import {useState, useContext} from 'react';
import {CommentContext} from './../commentContext'

import Grid from '@mui/material/Unstable_Grid2';

import { Box, Button, Avatar, Textarea, StyledEngineProvider, CssVarsProvider} from '@mui/joy';


export default function TextareaValidator() {
  const [commentTxt, setCommentTxt] = useState("");

  const {IMG, addComment} = useContext(CommentContext);
  return (
    <div style={{display:'flex', 
    justifyContent:'center',
    fontFamily:'https://fonts.google.com/specimen/Rubik'}}>
 {/* <StyledEngineProvider injectFirst> 
     <CssVarsProvider>  */}
      <Grid container spacing={5} 
      sx = {{
        backgroundColor:'white', 
        borderRadius:6, 
        position:'fixed',
        bottom:'80px',
        width:'60%'
        }}>   
        <Grid xs zeroMinWidth>
        <Avatar
              src={IMG.juliusomo}
              variant="rounded"
              alt="user-avatar"
            />
        </Grid>
      <Grid xs={9} sx={{justifyContent:'left'}}>
      <Textarea
        placeholder="Add a comment..."
        minRows={3}
        onChange={(e) => {
          setCommentTxt(e.target.value);
        }}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              // gap: 'var(--Textarea-paddingBlock)',
              // pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            
          </Box>
        }
        sx={{
          minWidth: 400,
        }}
      />
      </Grid>
      <Grid xs='auto'>
     
      <Button 
      onClick={(e) => {
        !commentTxt.trim()
          ? e.preventDefault()
          : addComment(commentTxt.trim());
        setCommentTxt("");
      }}
      sx={{
        backgroundColor:'hsl(238, 40%, 52%)', 
        width:'110px', 
        height:'50px',
        fontSize:'18px'}}>SEND</Button>
    
      </Grid>
      </Grid>
      {/* </CssVarsProvider>
      </StyledEngineProvider> */}
    </div>
    
    
  );
}
