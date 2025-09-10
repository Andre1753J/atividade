import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#255',
      padding: 20,
      paddingTop: 60,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      backgroundColor: '#000',
      color: '#fff',
      paddingHorizontal: 15,
      borderRadius: 8,
      height: 45,
    },
    Button: {
      backgroundColor: '#000',
      marginLeft: 8,
      borderRadius: 8,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      width: 45,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 5,
    },
    itemText: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });