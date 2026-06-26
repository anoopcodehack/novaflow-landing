const LOGOS = ['acme', 'globex', 'initech', 'umbrella', 'soylent'];

export default function SocialProof() {
  return (
    <div className="logo-row">
      {LOGOS.map((name) => (
        <img
          key={name}
          src={`/assets/svg/${name}.svg`}
          alt={`${name} company logo`}
          width={110}
          height={36}
          loading="lazy"
        />
      ))}
    </div>
  );
}

/*
  Swap the LOGOS array above with the actual filenames from your
  asset_package.zip SVG pack once you drop them into /public/assets/svg/
*/
