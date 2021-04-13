import {useState, useEffect} from 'react'
import tw from 'twin.macro';
import { css } from '@emotion/css' 
import styled from '@emotion/styled'

const NavBarWrapper = styled('div')`
  ${tw`w-full`};
  background: #213148b5;
`

const List = styled('ul')`
  ${tw`container p-0 flex flex-row text-center list-none text-white`};
`

const ListItem = styled('ul')`
  ${tw`flex-grow`};
`

const LinkStyled = styled('a')`
  ${tw`cursor-pointer`};
`

function NavBar() {
  const [visible, setVisible] = useState(false);

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    textAlign: 'center',
    zIndex: 100,
  }

  const handleScroll = () => {    
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos > 200);
  };

  useEffect(() => {   
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, handleScroll]);

  
  return (
      <NavBarWrapper style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
          <List>
              <ListItem><LinkStyled>Home</LinkStyled></ListItem>
              <ListItem><LinkStyled>Services</LinkStyled></ListItem>
              <ListItem><LinkStyled>About Us</LinkStyled></ListItem>
              <ListItem><LinkStyled>Affiliates</LinkStyled></ListItem>
          </List>
    </NavBarWrapper> 
  );
}

export default NavBar;
