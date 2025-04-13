import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
    borderRadius: 5,
  },
  addProduct: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  product: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  productText: {
    fontSize: 16,
  },
  buttonAdd: {
    width: 300,
    height: 50,
    backgroundColor: '#007BFF',
  },
  purchased: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  action: {
    color: '#007BFF',
    fontSize: 14,
    marginTop: 5,
  },
  disabled: {
    color: 'gray',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  emptyListText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  detailLabel: {
    fontWeight: '600',
    color: '#666',
  },
  detailValue: {
    color: '#000',
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})
