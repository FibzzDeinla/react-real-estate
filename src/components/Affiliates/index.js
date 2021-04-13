import styled from 'styled-components';
import tw from 'twin.macro';
import emotionStyled from '@emotion/styled'


import Image1 from '../../assets/images/logos/1.jpeg'
import Image2 from '../../assets/images/logos/2.jpeg'
import Image3 from '../../assets/images/logos/3.jpeg'

const Image = styled.img`
    width: 150px;
    height: 150px;
    
    &:not(:hover) {
        filter: grayscale(100%);
        opacity: 0.5
    }
`;

const AffilateWrapper = emotionStyled('div')`
${tw`mt-5 container mx-auto grid grid-cols-3 text-center items-center`};
`;

function Affiliates() {
  return (
    <AffilateWrapper>
          <div>
              <Image src={Image1}/>
          </div>
          <div>
              <Image src={Image2}/>
          </div>
          <div>
              <Image src={Image3}/>
          </div>
    </AffilateWrapper>
  );
}

export default Affiliates;
