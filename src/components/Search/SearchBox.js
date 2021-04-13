
import tw from 'twin.macro';
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import styledcom from 'styled-components'
import Button from '../Button'

const Label = styled('label')`
  ${tw`block text-gray-500 text-sm pb-2 pl-3`};
`

const Input = styled('input')`
  ${tw`
    border rounded-full border-gray-400 h-full focus:outline-none
    pl-4 pr-8 text-gray-700 text-sm text-gray-500 w-full
  `};
  height: 40px;
`
const Select = styled('select')`
  ${tw`
    border rounded-full border-gray-400 h-full focus:outline-none
    pl-4 pr-8 text-gray-700 text-sm text-gray-500 w-full
  `};
  height: 40px;
`

const SearchBoxWrap = styled('div')`
  ${tw`p-4 px-16 py-6 rounded-3xl max-w-4xl w-full`};
  background: #213148b5;
  box-shadow: 0 13px 15px #16202d;
`

const flexRowStyle = css(tw`flex flex-row`);

const SearchButton = styledcom(Button)`${tw`w-full`};`

function SearchBox() {
  return (
    <SearchBoxWrap>
      <div className={flexRowStyle}>
        <div className={css(tw`flex-grow pr-4`)}>
          <Label>Keyword</Label>
          <Input type="text" placeholder="Enter keyword" />
        </div>
        <div className={css(tw`flex-grow pl-3 pr-4`)}>
          <Label>Status</Label>
          <Select>
            <option value="all">All</option>
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
          </Select>
        </div>
        <div className={css(tw`flex-grow`)}>
        <SearchButton>Search</SearchButton>
        </div>
      </div>
    </SearchBoxWrap>
  );
}

export default SearchBox;
