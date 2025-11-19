import QuoteForm from './components/QuoteForm';

export const metadata = {
  title: 'Request a Quote | JASTUTE Solutions',
  description: 'Get a personalized quote for your project. Choose from web design, development, branding, hosting, and consulting services.',
  keywords: 'quote request, web design quote, branding quote, development quote, Kenya digital services',
  openGraph: {
    title: 'Request a Quote | JASTUTE Solutions',
    description: 'Get a personalized quote for your project. Choose from web design, development, branding, hosting, and consulting services.',
    type: 'website',
    url: 'https://jastutesolutions.co.ke/request-a-quote',
  },
  alternates: {
    canonical: 'https://jastutesolutions.co.ke/request-a-quote'
  }
};

export default function QuotePage() {
  return (
    <main>
      <QuoteForm />
    </main>
  );
}