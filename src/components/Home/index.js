import Hero from './Hero'
import Search from '../Search'
import tw from 'twin.macro';
import styled from '@emotion/styled'
import { css } from '@emotion/css'

const HomeWrapper = styled('div')`
  ${tw`
    relative overflow-hidden
  `};
`

const Overlay = styled('div')`
  ${tw``};
  
  background: black;
  height: 100%;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -1;

  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 0.9;
`

const ImageHolder = styled('div')`
  ${tw``};
  background: black;
  height: 100%;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -2;
`

const imageStyle = css(tw`object-cover w-full h-full`);

const SloganStyled = styled('div')`
${tw`absolute top-0 left-28 mt-32`};
z-index: 1;
`

function Home() {
  return (
    <HomeWrapper id="Home">
      <Hero />
      <Overlay />
      <ImageHolder><img className={imageStyle} src="https://i1.wp.com/www.thededicatedhouse.com/wp-content/uploads/2019/07/Heres-How-to-Create-a-Modern-House-Design-for-Your-New-Home.jpg?fit=2000%2C1500&ssl=1" /></ImageHolder>
      <Search />
      <SloganStyled>
      <h1 className={css(tw`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`)}>
            <span className={css(tw`block xl:inline pr-3 text-white`)}>We Create </span>
          <span className={css(tw`block text-indigo-600 xl:inline pr-3`)}>Unique</span>
          <span className={css(tw`block xl:inline pr-3 text-white`)}>Opportunities</span>
          </h1>
          <p className={css(tw`mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
      </SloganStyled>
    </HomeWrapper> 
  );
}

export default Home;
