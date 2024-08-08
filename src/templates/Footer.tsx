import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<></>} iconList={<></>}>
        <div className="flex-col">
          <h3>UK office: Abbas Technology Ltd</h3>
          <h3>UAE office: Abbas Tech FZCO</h3>
        </div>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
