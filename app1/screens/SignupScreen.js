import React,{useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const SignupScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [check_pass, setcheck_Pass] = useState('');
  const check = () => {

    if (pass == check_pass) {
    navigation.navigate('Login', {
        user: user,
        pass: pass
      }, Alert.alert(
        "Tạo tài khoản thành công",)
    );
    } else Alert.alert(
      "Mật khẩu không khớp",)
  }
  console.log(user, pass)
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.text_input} 
      placeholder="Tên đăng nhập" 
      onChangeText= {setUser}
      value={user}
      />
      <TextInput
      style={styles.text_input} 
      placeholder="Mật khẩu" 
      onChangeText= {setPass}
      value={pass}
      secureTextEntry={true}
      />
      <TextInput 
      style={styles.text_input} 
      placeholder="Nhập lại mật khẩu" 
      onChangeText= {setcheck_Pass}
      value={check_pass}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => check()}><Text>Đăng ký</Text></TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#69f7f1',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    height: 40,
    width: 250,
    backgroundColor: '#6172b178',
    borderWidth: 1,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 14,
  },
  button: {
    backgroundColor: '#6172b178',
    width: 150,
    height: 40,
    marginTop: 15,
    borderRadius: 14,
    justifyContent:'center',
    alignItems:'center'
  },
});
export default SignupScreen;
