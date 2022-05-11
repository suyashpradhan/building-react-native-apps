/** @format */

import React from 'react';
import { Text, Image, View, TextInput, Pressable } from 'react-native';
import { styles, PLACEHOLDER_TEXT_COLOR } from '../styles/Login.styles';

export const Signup = () => {
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
				<Text style={styles.appHeader}>Sign up</Text>
				<View style={{ marginVertical: 24 }}>
					<TextInput
						placeholder='Full name'
						style={styles.appInput}
						placeholderTextColor={PLACEHOLDER_TEXT_COLOR}></TextInput>
					<TextInput
						placeholder='Choose a username'
						style={styles.appInput}
						placeholderTextColor={PLACEHOLDER_TEXT_COLOR}></TextInput>
					<TextInput
						placeholder='Password'
						style={styles.appInput}
						placeholderTextColor={PLACEHOLDER_TEXT_COLOR}></TextInput>
					<Pressable style={styles.appButton}>
						<Text style={styles.appButtonText}>Continue</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};
