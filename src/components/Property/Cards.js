import tw from 'twin.macro';
import styled from '@emotion/styled'

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css'

import OwlCarousel from 'react-owl-carousel';
import Card from './Card'
import Button from '../Button'


const CardsWrapper = styled('div')`
  ${tw`my-5`};
`

const IconStyled = styled('a')`
  ${tw` pl-4`};
`

const ViewAllButton = styled(Button)`${tw`py-3 px-5`};`

function Cards(props) {
  return (
    <CardsWrapper>
          <OwlCarousel nav={true} stagePadding={30} items={3} margin={25} autoplay={false} >
              {props.items && props.items.map((item, indx) => <Card key={indx} item={item} />)}
          </OwlCarousel>
          <ViewAllButton>View All Properties <IconStyled className="icon-right-arrow" /></ViewAllButton>
  </CardsWrapper> 
  );
}

export default Cards;
