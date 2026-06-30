import {
  Atom,
  Palette,
  Server,
  Terminal,
  Code2,
  Layout,
  Database,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

export function renderIcon(iconName: string, className: string = ''): ReactNode {
  switch (iconName) {
    case 'atom':
      return <Atom className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'server':
      return <Server className={className} />;
    case 'terminal':
      return <Terminal className={className} />;
    case 'code-2':
      return <Code2 className={className} />;
    case 'layout':
      return <Layout className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'figma':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5v0A3.5 3.5 0 0 1 15.5 9H12V2z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M12 9h3.5a3.5 3.5 0 0 1 3.5 3.5v0a3.5 3.5 0 0 1-3.5 3.5H12V9z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5v0A3.5 3.5 0 0 1 5 19.5z" />
        </svg>
      );
    default:
      return null;
  }
}
