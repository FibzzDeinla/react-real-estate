import {useState, useEffect} from 'react'
import tw from 'twin.macro';
import styled from 'styled-components'
import { css } from '@emotion/css'
import '../../assets/css/icons/style.css'

const CardWrapper = styled('div')`
  ${tw`shadow-lg rounded-b-lg`};
`

const featuredTopStyle = css(tw`overflow-hidden h-56 rounded-t-lg`);
const featuredBottomStyle = css(tw`rounded-b-lg p-3 mb-3`);
const featuredMetaStyle = css(tw`text-xs text-gray-400 mt-5`);
const badgeStyle = css(tw`bg-red-500 text-white rounded absolute z-10 text-xs px-2 py-1 right-2 bottom-2`);

const CardTopStyled = styled.div`
    position: relative;
    &:hover img {
        transform: scale(1.1);
    }
`;

const CardBottomStyled = styled.div``;
const MetaListStyled = styled.ul`
    padding: 0;
    magin: 0;
    list-style: none;

    li { display: inline-block; margin-right: .5rem;}
    li i { color: #e69416; font-size: 1rem; padding-top: .5rem}
`;


function Card({item, ...props}) {
  return (
      <CardWrapper>
          <CardTopStyled className={featuredTopStyle}>
           <span className={badgeStyle}>{item.status}</span>
            <img className="img" src={item.image} />
          </CardTopStyled>
          <CardBottomStyled className={featuredBottomStyle}>
              <h3 className={css(tw`text-base font-bold leading-none m-0 mb-2`)}>{item.name}</h3>
              <div className={css(tw`text-xs text-gray-500 leading-none`)}>{item.address}</div>
              <MetaListStyled className={featuredMetaStyle}>
                  <li><i className="icon-bed" /> {item.meta.bed} Beds</li>
                  <li><i className="icon-bathtub" /> {item.meta.bath} Baths</li>
                  <li><i className="icon-measure" /> {item.meta.measurement}</li>
              </MetaListStyled>
          </CardBottomStyled>
    </CardWrapper> 
  );
}

export default Card;
