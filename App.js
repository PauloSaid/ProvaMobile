import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './src/Cards';

export default function App() {

  const cards = [
    {
      name: "Sedenta por Sangue",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEU2MFPhf5bDnoclLsWN6M8fVyVw1v5jlWmM2Pbb7BjMLRmMlRMN53ZSLUcoTrCbGvFDU&usqp=CAU",
      description: "\n+70 ATK DMG\n20% Roubo de vida\nAumenta o dano e adiciona roubo de vida adicional ao usuário.",
      
    },
    {
      name: "Ruptor Divino",
      url: "https://pbs.twimg.com/media/FNVbuPdXsAckZ29?format=jpg&name=240x240",
      description: "\n+50 ATK DMG\n+20 CDR\nItem mítico que dá ao usuário dano baseado na vida máxima do campeão inimgo.",
    },
    {
      name: "Dança da Morte",
      url: "https://i.pinimg.com/736x/c6/be/b8/c6beb8efa8a2f38023cfbad3bc07404f.jpg",
      description: "\n+40 ATK DMG\n+20 CDR\n+40 ARMOR\n Transforma dano letal em dano gradativo por 2 segundos.",
    },
  ];



  return (


    <View style={styles.container}>
      <Text style={styles.avaliacao}>Avaliação: Desenvolvimento Mobile - Prof. Otávio Lube</Text>
      <Text style={styles.header}>SUAS CARTAS:</Text>
      {cards.map((card, index) => (
        <Cards key={index} card={card} />   
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#893E3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  avaliacao: {
    alignItems: 'flex-start',
    padding: '20px',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
