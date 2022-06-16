import * as React from "react";
import { Button, View, Text } from "react-native";

function Screen4({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Screen4</Text>
            <Button
                title="Go to Screen 5"
                onPress={() => navigation.navigate("Screen 5")}
            />
        </View>
    );
}

export default Screen4;
