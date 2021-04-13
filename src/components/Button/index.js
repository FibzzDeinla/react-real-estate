
import { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro';
import styled from '@emotion/styled'
import Waves from 'node-waves';

const ButtonStyled = styled('button')`
  ${tw`appearance-none focus:outline-none border-0 p-3 rounded-full cursor-pointer mt-7 text-white bg-rhino`};
`

function Button({children, ...props}) {
    const btnRef = useRef(null);

    useEffect(() => {
        Waves.attach(btnRef.current, ['waves-light']);
        Waves.init();
    }, []);
    
    return (
      <ButtonStyled {...props} ref={btnRef}>{children}</ButtonStyled>
  );
}

export default Button;
