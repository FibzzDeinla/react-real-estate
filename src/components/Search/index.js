import SearchBox from './SearchBox'
import tw from 'twin.macro';
import { css } from '@emotion/css'
import styled from '@emotion/styled'

const SearcWrap = styled('div')`
  ${tw`
      absolute
  `};
  bottom: 0;
  padding: 0 0 2%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

function Search() {
  return (
    <SearcWrap id="Search">
      <SearchBox />
    </SearcWrap> 
  );
}

export default Search;
