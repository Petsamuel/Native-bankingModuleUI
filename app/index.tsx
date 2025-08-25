import { Link } from "expo-router";
import { Image, View } from "react-native";
import { Button } from "react-native-paper";
const logo = require('../assets/images/logo.png');


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#009FDF",
      }}
      
    >
      <Image source={logo} style={{ width: 200, height: 80 }} />
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      <Link href="/signin" asChild>
        <Button mode="outlined" textColor="white" className="mt-4" style={{ borderColor: "white" }}>
          Sign In
        </Button>
      </Link>
    </View>
  );
}
