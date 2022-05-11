/** @format */

import React from 'react';
import { Text, Image, View, TextInput, Pressable } from 'react-native';
import { styles, PLACEHOLDER_TEXT_COLOR } from '../styles/Login.styles';

export const Login = () => {
	return (
		<>
			<View style={styles.appView}>
				<Image
					source={require('../assets/login.svg')}
					style={{
						width: 200,
						height: 200,
						resizeMode: 'cover',
					}}
				/>
				<Text style={styles.appHeader}>Login</Text>
				<View style={{ marginVertical: 24 }}>
					<TextInput
						placeholder='Username'
						style={styles.appInput}
						placeholderTextColor={PLACEHOLDER_TEXT_COLOR}></TextInput>
					<TextInput
						placeholder='Password'
						style={styles.appInput}
						placeholderTextColor={PLACEHOLDER_TEXT_COLOR}></TextInput>
					<Pressable style={styles.appButton}>
						<Text style={styles.appButtonText}>Login</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};
