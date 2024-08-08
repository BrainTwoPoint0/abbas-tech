import CalendlyEmbed from '../calendly/CalendlyEmbed';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <CalendlyEmbed url="https://calendly.com/abbastech" />
    <Footer />
  </div>
);

export { Base };
