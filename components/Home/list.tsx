import Link from "next/link";
import styled from "styled-components";

import {
    FiMapPin,
    FiMail,
    FiPhone,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiVideo,
    FiVoicemail,
} from "react-icons/fi";

import { BsWhatsapp } from "react-icons/bs";

import { below } from "../../styles/breakpoints";
{
    /* import { Reveal } from "../reveal"; */
}

const Links = () => {
    const items = [
        {
            icon: <FiMapPin />,
            value: "São Paulo, SP, Brasil",
        },
        {
            icon: <FiMapPin />,
            value: "São Paulo, SP, Brasil",
        },
        {
            icon: <FiMapPin />,
            value: "São Paulo, SP, Brasil",
        },
    ];

    return (
        <Section id="Contact">
            <Margin>
                <div>
                    <Outline>
                        <BoxT style={{ zIndex: "1" }}>
                            <Text>
                                <h4>
                                    KALLOO
                                    <br /> ENGLISH SCHOOL
                                </h4>
                            </Text>
                            <h4>Entre em Contato</h4>
                            <List>
                                <Line>
                                    <div>
                                        <FiMapPin />
                                    </div>
                                    <h5>São Paulo, SP, Brasil</h5>
                                </Line>
                                <Line>
                                    <div>
                                        <FiMail />
                                    </div>
                                    <a href="mailto:kalloo@gmail.com">
                                        <h5>contato@kalooenglish.com</h5>
                                    </a>
                                </Line>
                                <Line>
                                    <div>
                                        <BsWhatsapp />
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5511970644316&text=Olá. Gostaria de mais informações sobre o curso">
                                        <h5>+55 11 97064-4316</h5>
                                    </a>
                                </Line>
                            </List>
                            <h4>Visite Nossas Redes</h4>
                            <Social>
                                <a
                                    href="https://www.facebook.com/kallooenglishschool-107130884976780"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FiFacebook />
                                    <h5>facebook</h5>
                                </a>
                                <a
                                    href="https://www.instagram.com/kallooenglishschool/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FiInstagram />
                                    <h5>instagram</h5>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/catherine-wajcenberg-01763790/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FiLinkedin />
                                    <h5>linkdin</h5>
                                </a>
                            </Social>
                        </BoxT>
                        <BoxI>
                            <ServImg src="https://images.unsplash.com/photo-1610552254576-9500a3e99999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80" />
                        </BoxI>
                    </Outline>
                </div>
            </Margin>
        </Section>
    );
};

export default Links;

const Section = styled.section`
    width: 100%;
    overflow: hidden;

    padding-top: 100px;

    background-color: hsla(220, 10%, 95%, 1);

    display: flex;
    justify-content: center;
`;
const Margin = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0px 0px;

    .inverted {
        flex-direction: row-reverse;
    }
`;

const Outline = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    outline: 2px solid hsla(280, 100%, 25%, 0.1);
    outline-offset: -40px;

    padding: 35px 0px;
`;
const BoxT = styled.div`
    flex: 1 1 481px;
    margin: 0px 0;
    padding: 30px 10px;

    backdrop-filter: blur(20px);
    background-color: hsla(220, 10%, 80%, 0.5);
    border-radius: 10px;
    color: #8c52ff;

    h4 {
        margin: 18px 0px 8px;
    }
`;

const Text = styled.div`
    h4 {
        padding: 0px 0px 25px 0px;
        font-size: 1.3em;
    }

    p {
        padding: 0px 0px 25px 50px;
        font-size: 0.5em;
        max-width: 450px;
    }
`;
const List = styled.div`
    border-top: 1px solid grey;
    padding: 12px 0px 25px 0px;
`;
const Line = styled.div`
    width: 100%;
    height: 30px;
    padding: 25px 0px;

    svg {
        margin: 0 20px 0px 0px;
        width: 30px;
        height: 100%;
    }

    display: flex;
    align-items: center;
`;
const Social = styled.div`
    padding: 12px 10px;
    border-top: 1px solid grey;

    display: flex;
    justify-content: space-between;

    ${below.med`
         
   `};

    a {
        text-align: center;
        padding: 10px;
        svg {
            width: 25px;
            height: 25px;
        }
        h5 {
            margin: 4px;
        }
    }
`;

const BoxI = styled.div`
    flex: 1 1 480px;
    position: relative;
    height: 500px;
`;

const ServImg = styled.img`
    width: 130%;
    height: 100%;
    transform: translateX(-11.5%);

    object-fit: cover;
    object-position: 50% 70%;

    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;
