import { Image, Text, View, ScrollView } from "react-native";

export default function TouristLocation({
  styleName,
  styleImage,
  styleAdress,
  styleDescription,
  styleBarra,
  Name,
  ImageSource,
  adress,
  description,
}) {
  return (
    <View>
      <Text style={styleName}>{Name}</Text>
      <ScrollView>
        <View style={{alignItems: 'center'}} ><Image style={styleImage} source={ImageSource} /></View>
        <Text style={styleAdress}>{adress}</Text>
        <View style={styleBarra}></View>
        <Text style={styleDescription}>{description}</Text>
      </ScrollView>
    </View>
  );
}
