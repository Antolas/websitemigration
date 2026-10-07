import Typography from '@mui/material/Typography';
import Image from '@/components/common/Image';

export interface LogoTile {
  name: string;
  logo: string;
}

/** "SPONSORS" / "MEDIA PARTNERS" block of plain logo tiles. */
export default function LogoTiles({ title, logos }: { title: string; logos: LogoTile[] }) {
  return (
    <div className="sponsors-logos-container">
      <div>
        {' '}
        <Typography variant="h2" sx={{ color: '#465155' }}>
          {title}
        </Typography>
      </div>
      <div className="sponsors-logos">
        {logos.map((l) => (
          <div className="logo" key={l.name}>
            <Image src={l.logo} alt={l.name} style={{ width: '70%', height: '70%' }} sizes="100vw" height={0} width={0} />
          </div>
        ))}
      </div>
    </div>
  );
}
