import styled from "styled-components";

const ContacSection = styled.section`
    background-color: #343a40;
    padding: 40px 20px;
    text-align: center;
    color: white;
`;
const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 10px 20px;
    background-color: white;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #333;
        color: white;
    }
`;

function Contact() {
    return (
      <ContacSection>
        <section id="contact">
          <Title>Contact us</Title>
          <p>Have questions? Get in touch with us.</p>
          <Button>Contact Now</Button>
        </section>
      </ContacSection>
    );
}

export default Contact;