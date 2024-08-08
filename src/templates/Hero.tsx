import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<img src='assets/images/abbas-tech.png' className='h-20' />}>
        <li>
          <Link href="/">Get in touch today for a free consultation</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>Your trusted technology partner. </>}
        description="Abbas Tech helps to turn your visions into reality and to solve the most challenges digital problems you face."
        button={<></>}
      />
    </Section>
  </Background>
);

export { Hero };
