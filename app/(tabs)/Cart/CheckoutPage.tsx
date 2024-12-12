import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, Tabs } from 'expo-router';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    currency: "USD",
    country: "",
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  interface Card {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }

  const [savedCards, setSavedCards] = useState<Card[]>([]);

  const [useSavedCard, setUseSavedCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handlePayment = () => {
    if (useSavedCard && selectedCard !== null) {
      console.log("Using saved card:", savedCards[selectedCard]);
    } else {
      console.log("Payment Details:", formData);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(value) => handleInputChange("name", value)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(value) => handleInputChange("email", value)}
      />

      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your country"
        onChangeText={(value) => handleInputChange("country", value)}
      />

      <Text style={styles.label}>Currency</Text>
      <Picker
        selectedValue={formData.currency}
        onValueChange={(value) => handleInputChange("currency", value)}
        style={styles.input}
      >
        <Picker.Item label="USD - US Dollar" value="USD" />
        <Picker.Item label="EUR - Euro" value="EUR" />
        <Picker.Item label="INR - Indian Rupee" value="INR" />
        <Picker.Item label="GBP - British Pound" value="GBP" />
        <Picker.Item label="AUD - Australian Dollar" value="AUD" />
      </Picker>

      <Text style={styles.label}>Saved Cards</Text>
      {savedCards.length > 0 ? (
        savedCards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cardButton,
              selectedCard === index && styles.selectedCard,
            ]}
            onPress={() => {
              setUseSavedCard(true);
              setSelectedCard(index);
            }}
          >
            <Text style={styles.cardText}>
              Card Ending in {card.cardNumber.slice(-4)}
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No saved cards available.</Text>
      )}

      <TouchableOpacity
        style={styles.addCardButton}
        onPress={() => {
          setUseSavedCard(false);
          setSelectedCard(null);
        }}
      >
        <Text style={styles.addCardText}>Add New Card</Text>
      </TouchableOpacity>

      {!useSavedCard && (
        <>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your card number"
            keyboardType="numeric"
            onChangeText={(value) => handleInputChange("cardNumber", value)}
          />

          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            onChangeText={(value) => handleInputChange("expiryDate", value)}
          />

          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter CVV"
            keyboardType="numeric"
            secureTextEntry
            onChangeText={(value) => handleInputChange("cvv", value)}
          />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={() => { router.push("/(tabs)/Cart/ShipmentTrackingScreen") }}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardButton: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  selectedCard: {
    backgroundColor: "#007bff",
  },
  cardText: {
    color: "#007bff",
    textAlign: "center",
    fontSize: 14,
  },
  addCardButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  addCardText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
});

export default CheckoutPage;