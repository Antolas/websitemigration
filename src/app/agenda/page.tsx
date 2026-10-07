import AgendaHero from '@/components/agenda/AgendaHero';
import SessionizeAgenda from '@/components/agenda/SessionizeAgenda';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function AgendaPage() {
  return (
    <div style={{ backgroundColor: '#EEEFEF' }}>
      <Header />
      <AgendaHero />
      <SessionizeAgenda />
      <Footer />
    </div>
  );
}
