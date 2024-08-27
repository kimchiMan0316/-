import { RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { router } from './routes/routes';
import reset from 'styled-reset';
import { useState } from 'react';
import LoadingPage from './pages/loading';

const Wrapper = styled.div`
`;
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    padding: 0;
    margin: 0;
  }
  body{
    display: flex;
    justify-content: center;
    height: 100vh;
    color: white;
    background-color: black;
  }
`

function App(){
  const [ loading, setLoading ]=useState(true);
  setTimeout(()=>{
    setLoading(false);
  },500)
  return (
    <Wrapper>
    <GlobalStyle/>
      {loading ? <LoadingPage/>:<RouterProvider router={router}/>}
    </Wrapper>
  );
}

export default App;
