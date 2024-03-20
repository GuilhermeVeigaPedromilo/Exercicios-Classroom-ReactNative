import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import TouristLocation from "./src/components/TouristLocation";
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <TouristLocation
          styleName={styles.name}
          styleImage={styles.image}
          styleAdress={styles.adress}
          styleDescription={styles.description}
          Name="Recanto do Japonês"
          adress="R. Amapá - Jardim dos Estados, Poços de Caldas - MG, 37701-070"
          styleBarra={{ height: 1, backgroundColor: "#09ad32" }}
          description='Segundo o site Minas: "O Recanto Japonês é uma réplica de um jardim japonês, com construções e vegetação típicas. Fica localizado numa vertente da Serra de São Domingos sendo rodeado por uma mata nativa. O local é muito agradável e de fácil acesso. A casa de chá e o quiosque foram projetados e construídos em estilo japonês. O quiosque ou caramanchão Azumaya é uma réplica do Manj-Tei, que existiu nos jardins do palácio imperial japonês, feito de madeira e telhado de palha. No local há um pequeno lago artificial, onde foram colocadas carpas coloridas. Pode-se passear por diversos caminhos ladeados por plantas ornamentais e pequenas quedas da água e conhecer a fonte dos "Três Desejos: Amor, Saúde e Inteligência". A área é toda iluminada por lampiões típicos."'
          ImageSource={require("./src/assets/images/recantojapones.jpg")}
        />
      </View>
    </View>
  );
}
