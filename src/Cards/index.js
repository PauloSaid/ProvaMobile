import { Button, Image, Text, View } from "react-native";
import styles from './styles';

export default function Cards(props){

    return (
        <View style={styles.card}>
            <View style={styles.card__img}>
                <Image 
                    source={{uri: props.card.url}} 
                    style={styles.img}
                />
            </View>
            <Text style={styles.name}>{props.card.name}</Text>
            <View style={styles.card__content}>
                <View style={styles.content}>
                    <Text style={styles.description}>{props.card.description}</Text>
                    <Button title="PROPOR TROCAR"/>
                </View>
            </View>
        </View>
    );
}

