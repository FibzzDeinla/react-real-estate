import tw from 'twin.macro';
import styled from '@emotion/styled'
import Cards from './Cards';

import Sample1 from '../../assets/images/properties/sample-1.jpeg';
import Sample2 from '../../assets/images/properties/sample-2.jpeg';
import Sample3 from '../../assets/images/properties/sample-3.jpeg';
import Sample4 from '../../assets/images/properties/sample-4.jpeg';

const Title = styled('h2')`
    ${tw`px-2 mb-1`};
`

const SubTitle = styled('small')`
    ${tw`px-2 text-gray-500`};
`

const PropertyWrapper = styled('div')`
  ${tw`container mx-auto`};
`

const cardItems = [
    {
        id: 1,
        meta: {
            bed: 3,
            bath: 2,
            measurement: '132 sq. ft'
        },
        status: 'For Rent',
        name: 'Camella Homes',
        address: 'San Pedro, Laguna',
        image: Sample1
    },
    {
        id: 2,
        meta: {
            bed: 3,
            bath: 2,
            measurement: '132 sq. ft'
        },
        status: 'For Sale',
        name: 'Bria Homes',
        address: 'San Pedro, Laguna',
        image: Sample2
    },
    {
        id: 3,
        meta: {
            bed: 3,
            bath: 2,
            measurement: '132 sq. ft'
        },
        status: 'For Rent',
        name: 'Phirst Park Homes',
        address: 'San Pedro, Laguna',
        image: Sample3
    },
    {
        id: 2,
        meta: {
            bed: 3,
            bath: 2,
            measurement: '132 sq. ft'
        },
        status: 'For Sale',
        name: 'Futura Homes',
        address: 'San Pedro, Laguna',
        image: Sample4
    }
]

function Property() {
  return (
      <PropertyWrapper>
        <div>
            <Title>Latest Properties</Title>
            <SubTitle>Find a perfect place for you.</SubTitle>
          </div>
          <Cards items={cardItems}/>
    </PropertyWrapper> 
  );
}

export default Property;
