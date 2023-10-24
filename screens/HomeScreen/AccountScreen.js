import { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';

export default function AccountScreen(props) {
  const { ws } = props;
  // const [login, setLogin] = useState('');
//   const [password, setPassword] = useState('');
    const [loginData, setLoginData] = useState({ login: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
  // const [checked, setChecked] = useState(false);

//   const handleLogin = () => {
//     console.log("account: ", loginData);
//     // ws.emit("login", loginData);
//     ws.on("loginSuccess", (user) => {
//         setCurrentUser(user);

//         //сохраняем пароль в localStorage если стоит галка "Запомнить пароль" 
//         if(rememberMe) {
//             localStorage.setItem("user", JSON.stringify(rememberMe));
//         }

//         setErrorMessage("");
//         setReload(!reload);
//     });
//     // ws.on("loginError", (error) => {
//     //     setErrorMessage(error);
//     //     setTimeout(() => {
//     //         setErrorMessage("");
//     //     }, 1900);
//     // });
// };



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label='Login'
        value={loginData.login}
        onChangeText={(login) => setLoginData({...loginData, login})}
      />
        <TextInput
        style={styles.input}
        label='Password'
        value={loginData.password}
        onChangeText={(password) => setLoginData({...loginData, password})}
      />
      <View style={styles.flex}>
        {/* <Text>Remember me</Text> */}
        {/* <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
            /> */}
      </View>

       <Button
        contentStyle={styles.button} 
        mode="contained"
        onPress={() => console.log(loginData)}
       >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: "100%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: 370,
  }
});
