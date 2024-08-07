import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="mailto:abbas.a.kazmi@outlook.com">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>Tech Solutions, Redefined</>}
        description="Invest in tech infrastructure that will transform your business. Abbas Tech offers cutting-edge solutions tailored to meet the unique demands of both individuals and businesses."
        button={<></>}
      />
    </Section>
  </Background>
);

export { Hero };
