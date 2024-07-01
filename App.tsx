import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const App: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

//For multiple table
  const generateMultiplicationTable = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const table = [];
      for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
      }
      setResults(table);
    }
  };

//For calculate Factorial
  const calculateFactorial = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
      setResults([`Factorial of ${num} is ${factorial}`]);
    }
  };

  const calculateSquare = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const square = num * num;
      setResults([`Square of ${num} is ${square}`]);
    }
  };

  const findPrimeFactors = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const primeFactors = getPrimeFactors(num);
      setResults([`Prime factors of ${num} are: ${primeFactors.join(', ')}`]);
    }
  };

  const getPrimeFactors = (num: number): number[] => {
    const factors = [];
    let divisor = 2;
    while (num >= 2) {
      if (num % divisor === 0) {
        factors.push(divisor);
        num = num / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Operations</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generateMultiplicationTable}>
          <Text style={styles.buttonText}>Multiplication Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculateFactorial}>
          <Text style={styles.buttonText}>Factorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculateSquare}>
          <Text style={styles.buttonText}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={findPrimeFactors}>
          <Text style={styles.buttonText}>Prime Factors</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {results.map((item, index) => (
          <Text key={index} style={styles.resultText}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B0505',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollContainer: {
    width: '80%',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;
