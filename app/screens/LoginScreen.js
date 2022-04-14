/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   Image,
 } from 'react-native';
 
 
 
 export default function Login()  {
 
   return (
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
       >
         <View>
           <TextInput style={styles.InputText} placeholder='Email Adress *' />
           <TextInput style={styles.InputText} placeholder='Password' />
           <TouchableOpacity style={styles.SignInButton} ><Text style={styles.SignInText}>Sign In</Text></TouchableOpacity>
           <TouchableOpacity style={styles.ForgotPasswordButton}><Text style={styles.ForgotPassword}>Forgot Password?</Text></TouchableOpacity>
         </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 25 }}>
           <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
           <View>
             <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
           </View>
           <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
         </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
           <TouchableOpacity><Image style={{margin:20}} source={require('./../assets/fb-icon.png')} /></TouchableOpacity>
           <TouchableOpacity><Image style={{margin:20}} source={require('./../assets/google-icon.png')} /></TouchableOpacity>
         </View>
         <View style={{marginTop:100}}>
             <Text style={{textAlign:'center'}}>Don't have an account?</Text>
             <TouchableOpacity style={styles.RegisterButton} ><Text style={styles.RegisterText}>Register</Text></TouchableOpacity>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   InputText: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
   SignInButton: {
     height: 40,
     margin: 12,
     padding: 10,
     backgroundColor: 'black',
     alignItems: 'center'
   },
   SignInText: {
     color: 'white',
     fontWeight: 'bold'
   },
   ForgotPassword: {
     color: 'black',
     textAlign: 'center'
   },
   ForgotPasswordButton: {
     margin: 12,
     fontWeight: 'bold'
   },
   RegisterText: {
     color: 'black'
   },
   RegisterButton: {
     backgroundColor: 'white',
     borderWidth: 1,
     borderColor: 'black',
     height: 40,
     margin: 12,
     alignItems: 'center',
     padding: 10
   }
 });
 