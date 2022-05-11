/** @format */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import AppRoutes from './navigation/AppRoutes';

export default function App() {
	return <AppRoutes />;
}
