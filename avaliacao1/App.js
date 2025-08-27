 import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";

  export default function App() {
    return (
     <SafeAreaView style={estilos.areaSegura}>
           
            
              <View>
              <Text style={estilos.titulo}>React Native</Text>
              <Text>Avaliação dia 27/08</Text>
             </View>

         <View style={estilos.textocfundo}>
                    <Text style={[estilos.negrito, {fontSize: 20}]}>Batatas são macias.</Text>
                  </View>

                  <View style={estilos.menu}>
                     <Button color="#5af" title="ENVIAR"></Button>
                  </View>
        

 </SafeAreaView>
    );
  }

   const estilos = StyleSheet.create({
titulo: {
      fontWeight: "bold",
      fontSize: 25
    },
     menu: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    areaSegura: {
      margin: 20
    },
     negrito: {
      fontWeight: "bold"
     },
     textocfundo: {
       flexDirection: "row",
      justifyContent: "space-evenly",
      height: 80,
      borderRadius: 20,
      backgroundColor: "#ccccccff",
      marginBottom: 10,
      marginTop: 400,
      padding: 25
    },
   });