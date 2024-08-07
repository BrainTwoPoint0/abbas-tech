import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="" description="">
    <VerticalFeatureRow
      title=""
      description="Abbas Tech has rapidly transformed from a budding software development firm into a versatile innovator in the tech industry. We strive to deliver cutting-edge solutions tailored to meet the unique demands of both individuals and businesses. Our commitment to intellectual rigor and value creation sets us apart as a leader in the tech space."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title=""
      description="At Abbas Tech, we don’t just develop software; we pioneer comprehensive solutions that redefine technological possibilities. Abbas Tech upholds our tradition of designing intuitive software that demystifies complexity. By integrating user-friendly interfaces with robust and sophisticated systems, we ensure that our clients enjoy seamless, efficient experiences in every interaction."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title=""
      description="Our growth transcends conventional software development, as we explore new horizons to enhance lifestyles and empower enterprises. From innovative tech solutions to strategic initiatives across various sectors, our mission remains consistent: to lead through simplicity and efficiency. Abbas Tech stands as more than just a company; we are a dynamic force committed to making a meaningful impact through continuous innovation and dedicated service."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
