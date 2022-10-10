import styled from "styled-components";

const Contact = () => {
    return (
        <>
            <Section>
                <Logo>EYETEK</Logo>

                <Columns>
                    <Column>
                        <h5>Services</h5>
                        <p>Start a Project</p>
                        <p>Princing</p>
                        <p>Methods</p>
                    </Column>
                    <Column>
                        <h5>Company</h5>
                        <p>About Us</p>
                        <p>Team</p>
                        <p>Carrers</p>
                    </Column>
                </Columns>

                <End>
                    <div />
                    <p>copyright akjha</p>
                </End>
            </Section>
        </>
    );
};

export default Contact;

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 500vh;
    left: 0vw;
    overflow-y: scroll;

    background: black;

    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
`;

const Logo = styled.div`
    flex: 1 1 200px;

    margin: 10px;
    padding: 10px;

    font-size: 22px;
    font-family: Modena Sans;
    color: white;
`;
const Columns = styled.div`
    flex: 1 1 50%;
    margin: 10px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Column = styled.div`
    flex: 1 1 200px;
    width: 200px;
    // max-width: 300px;
    margin: 0px;
    padding: 10px;

    color: white;
    h5 {
        text-transform: uppercase;
        margin-top: 0px;
    }

    p {
        font-weight: 100;
        cursor: pointer;
    }
`;

const End = styled.div`
    width: 100%;

    div {
        width: 80%;
        margin: 10px auto;
        height: 1px;
        background: orange;
    }

    p {
        width: fit-content;
        margin: 10px auto;

        color: white;
    }
`;
