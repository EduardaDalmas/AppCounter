import React, { Component } from "react";
import { View, Text, TouchableOpacity, SliderComponent, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => increaseCounter()}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counter}>{counter}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => decreaseCounter()}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
    return {
      counter: state.counter,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      increaseCounter: () => dispatch({ type: "INCREMENTAR" }),
      decreaseCounter: () => dispatch({ type: "DECREMENTAR" }),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
         
    },
    row: {
        flexDirection: "row",
        width: 200,
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        height: 40,
        padding: 15,
        borderRadius: 5,
        backgroundColor: "#219c88",
        justifyContent: "center",
    },
    text: {
        fontSize: 20, 
        color: "#fff"
    },
    counter: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: "#219c88"
    }
})
