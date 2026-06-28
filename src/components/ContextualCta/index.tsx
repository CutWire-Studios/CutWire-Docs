import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';

// Right-side navbar button that depends on where you are:
//  - inside /prism docs  -> cutwire.org/prism
//  - anywhere else       -> cutwire.org
// Future products under /{name} can be added to the map below.
const PRODUCT_CTAS: {match: string; label: string; href: string}[] = [
  {
    match: '/prism',
    label: 'cutwire.org/prism ↗',
    href: 'https://cutwire.org/prism',
  },
];

export default function ContextualCta(): ReactNode {
  const {pathname} = useLocation();
  const product = PRODUCT_CTAS.find((p) => pathname.startsWith(p.match));
  const {label, href} = product ?? {
    label: 'cutwire.org ↗',
    href: 'https://cutwire.org',
  };

  return (
    <Link className="navbar-cta" href={href}>
      {label}
    </Link>
  );
}
