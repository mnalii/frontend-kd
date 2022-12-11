import Page from '../components/Page';

import HeroSection from '../sections/HeroSection';
import AsFeatured from '../sections/AsFeatured';
import About from '../sections/About';
import Pricing from '../sections/Pricing';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <Page title='Home'>
      <HeroSection />
      <AsFeatured />
      <About />
      <Pricing />
      <Contact />
    </Page>
  );
}
