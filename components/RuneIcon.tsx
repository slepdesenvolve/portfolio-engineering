
import React from 'react';
import { 
  Shield, 
  Sword, 
  Map as MapIcon, 
  Compass, 
  Scroll, 
  Database, 
  Cpu, 
  Terminal, 
  Activity, 
  Sparkles, 
  Zap, 
  Eye, 
  Wand2, 
  Github, 
  Linkedin, 
  Code2, 
  Clipboard, 
  Users 
} from 'lucide-react';

interface RuneIconProps {
  className?: string;
  type: 'shield' | 'sword' | 'map' | 'compass' | 'scroll' | 'database' | 'cpu' | 'terminal' | 'activity' | 'magic' | 'wizard' | 'eye' | 'wand' | 'github' | 'linkedin' | 'whatsapp' | 'Code2' | 'clipboard' | 'users';
}

export const RuneIcon: React.FC<RuneIconProps> = ({ className, type }) => {
  const iconProps = {
    className: className,
    size: 24,
    strokeWidth: 2,
  };

  switch (type) {
    case 'shield': return <Shield {...iconProps} />;
    case 'sword': return <Sword {...iconProps} />;
    case 'map': return <MapIcon {...iconProps} />;
    case 'compass': return <Compass {...iconProps} />;
    case 'scroll': return <Scroll {...iconProps} />;
    case 'database': return <Database {...iconProps} />;
    case 'cpu': return <Cpu {...iconProps} />;
    case 'terminal': return <Terminal {...iconProps} />;
    case 'activity': return <Activity {...iconProps} />;
    case 'magic': return <Sparkles {...iconProps} />;
    case 'wizard': return <Zap {...iconProps} />;
    case 'eye': return <Eye {...iconProps} />;
    case 'wand': return <Wand2 {...iconProps} />;
    case 'github': return <Github {...iconProps} />;
    case 'linkedin': return <Linkedin {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'clipboard': return <Clipboard {...iconProps} />;
    case 'users': return <Users {...iconProps} />;
    case 'whatsapp': return (
      <svg 
        {...iconProps}
        viewBox="0 0 24 24" 
        fill="currentColor" 
        stroke="none"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.934 11.934 0 001.576 5.961L0 24l6.135-1.61a11.871 11.871 0 005.915 1.577h.005c6.637 0 12.032-5.396 12.035-12.031a11.85 11.85 0 00-3.527-8.503z" />
      </svg>
    );
    default: return null;
  }
};

