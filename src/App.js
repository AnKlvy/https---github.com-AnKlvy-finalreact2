// import Container from '@mui/material/Container';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import { useContext } from 'react'
import { CommentContext, CommentProvider } from './commentContext';
import TextareaValidator from './components/AddComment'
import { Comment } from './components/Comment';




function App() {
  const { commentSection } = useContext(CommentContext);
  
  return (
    //    <StyledEngineProvider injectFirst> 
    //  <CssVarsProvider> 
    <div style={{
      backgroundColor:'hsl(228, 33%, 97%)', 
      minHeight: '100vh', 
      minWidth: '800px',
      }}>
       
      
       
      {commentSection.map((comment) => {
          return <Comment key={comment.id} data={comment} />;
        })}
      
    <TextareaValidator/>
    
    <div style={{height:'200px'}}></div>
    </div>
    // </CssVarsProvider>
    // </StyledEngineProvider>
  )
}

export default App
