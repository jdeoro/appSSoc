import { Link, LinkProps } from 'expo-router';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends LinkProps {
  children?: React.ReactNode; // Agrega esta línea
}

const ThemedLink = ({ style, children, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    >
      {children} {/* Incluye el children aquí */}
    </Link>
  );
};

export default ThemedLink;
