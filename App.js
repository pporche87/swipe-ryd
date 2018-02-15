import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'
import Deck from './src/Deck';

const DATA = [
  {
    id: 1,
    name: "Johnathon Smith",
    vehicle: "Tesla Model S",
    uri:
      "https://electrek.files.wordpress.com/2016/06/hero-01-lhd-e1467284962593.jpg?quality=82&strip=all&strip=all&w=1600&h=1000"
  },
  {
    id: 2,
    name: "Joanie Stewart",
    vehicle: "Ford Focus",
    uri:
      "https://www.ford.com/campaignlibs/content/dam/ford_com/en_us/focusrs/FullScreen/16_FRD_FCS_100091_RS_FullIp.jpg"
  },
  {
    id: 3,
    name: "Joe Gibson",
    vehicle: "Chrysler 300",
    uri:
      "http://www.jbcarpages.com/chrysler/300/2006/pictures/images/2006_chrysler_300_picture%20(31).jpg"
  },
  {
    id: 4,
    name: "Christine Bar",
    vehicle: "Scion xB",
    uri:
      "https://images.autotrader.com/scaler/620/420/cms/images/cars/scion/xb/2015/2015scionxb/235784.jpg"
  },
  {
    id: 5,
    name: "Johnathon Smith",
    vehicle: "Tesla Model S",
    uri:
      "https://electrek.files.wordpress.com/2016/06/hero-01-lhd-e1467284962593.jpg?quality=82&strip=all&strip=all&w=1600&h=1000"
  },
  {
    id: 6,
    name: "Joanie Stewart",
    vehicle: "Ford Focus",
    uri:
      "https://www.ford.com/campaignlibs/content/dam/ford_com/en_us/focusrs/FullScreen/16_FRD_FCS_100091_RS_FullIp.jpg"
  },
  {
    id: 7,
    name: "Joe Gibson",
    vehicle: "Chrysler 300",
    uri:
      "http://www.jbcarpages.com/chrysler/300/2006/pictures/images/2006_chrysler_300_picture%20(31).jpg"
  },
  {
    id: 8,
    name: "Christine Bar",
    vehicle: "Scion xB",
    uri:
      "https://images.autotrader.com/scaler/620/420/cms/images/cars/scion/xb/2015/2015scionxb/235784.jpg"
  },
];

export default class App extends React.Component {
  renderCard(item) {
    return <Card key={item.id} title={item.name} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          {item.vehicle}
        </Text>
        <Button backgroundColor="#ED62A7" title="Book My Ride!" />
      </Card>;
  }

  renderNoMoreCards() {
    return <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button backgroundColor="#ED62A7" title="Get more!" />
      </Card>;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          A better way to RYD
        </Text>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 30
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 1.5,
    color: '#ED62A7'
  }
});
