import { Ionicons } from '@expo/vector-icons';
import { Text, Pressable, PressableProps, StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends PressableProps {
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedButton = ({ children, icon, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? primaryColor + '90' : primaryColor,
        },
        styles.button,
      ]}
      {...rest}
    >
      <Text style={{ color: '#000000' }}>{children}</Text>

      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color="#ffffff"
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  );
};
export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    display:'flex',
    backgroundColor: '#00ff00',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
