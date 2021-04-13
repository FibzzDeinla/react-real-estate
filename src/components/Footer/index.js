import tw from 'twin.macro';
import emotionStyled from '@emotion/styled'
import { css } from '@emotion/css'
import styled from 'styled-components';

const FooterWrapper = emotionStyled('div')`
${tw`flex flex-col`};
`;

const FooterTopWrapper = emotionStyled('div')`
${tw`h-64 bg-gray-100`};
`;

const FooterTopContent = emotionStyled('div')`
${tw`container mx-auto py-5`};
`;


const FooterBottomWrapper = emotionStyled('div')`
${tw`bg-rhino px-8 py-4 text-xs text-white`};
`;

const QuickLinkStyled = styled.ul`
    padding: 0;
    magin: 0;
    list-style: none;

    li {
        display: block;
        ${tw`text-xs text-gray-500 mb-1`};
    }

    li a:hover { text-decoration: underline; cursor: pointer; }
`;

const ContactUsStyled = styled.ul`
    padding: 0;
    magin: 0;
    list-style: none;

    li span {
        display: inline-block;
        ${tw`text-xs font-bold text-gray-600 mb-1`};
    }
    li i { display: inline-block; color: #e69416; font-size: 1rem; margin-right: .5rem;}
`;


function Footer() {
    return (
        <FooterWrapper>
            <FooterTopWrapper>
                <FooterTopContent>
                    <div className={css(tw`flex flex-row`)}>
                        <div className={css(tw`flex-grow flex-1 px-3`)}>
                            <h3 className={css(tw`text-gray-800`)}>Our Company</h3>
                            <p className={css(tw`text-xs leading-5 text-gray-500`)}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className={css(tw`flex-grow flex-1 px-3`)}>
                            <h4 className={css(tw`text-gray-600`)}>Quick Links</h4>
                            <QuickLinkStyled>
                                <li><a>Our Profile</a></li>
                                <li><a>Services</a></li>
                                <li><a>Careers</a></li>
                            </QuickLinkStyled>
                        </div>
                        <div className={css(tw`flex-grow flex-1 px-3`)}>
                            <h4 className={css(tw`text-gray-600 mb-2`)}>Contact Us</h4>
                            <p className={css(tw`text-gray-600 text-xs`)}>Khalid Bin Al Waleed Rd - Al Mankhool - Dubai</p>
                            <ContactUsStyled>
                                <li><i className="icon-phone"></i><span>808 898 7978</span></li>
                                <li><i className="icon-mail"></i><span>mywebsite@info.ae</span></li>
                            </ContactUsStyled>
                        </div>
                    </div>
                </FooterTopContent>
            </FooterTopWrapper>
            <FooterBottomWrapper>&copy; Copyright 2021 | All rights reserved.</FooterBottomWrapper>   
      </FooterWrapper>
  );
}

export default Footer;
