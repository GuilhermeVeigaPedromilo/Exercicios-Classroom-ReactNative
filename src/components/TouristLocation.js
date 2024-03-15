import { Image, Text, View } from "react-native";

export default function TouristLocation({ styleText, Name, ImageSource, adress, description}){
    return(
        <View>
            <Text style={styleText} >{Name}</Text>
            <Image source={ImageSource}/>
            <Text >{adress}</Text>
            <Text >{description}</Text>
        </View>
    );
}