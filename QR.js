import QRCodeScanner from 'react-native-qrcode-scanner';

onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  render() {
    return (
            <QRCodeScanner
              cameraType='front'
              onRead={this.onSuccess.bind(this)}
              topContent={
                <Text style={styles.buttonText}>
                Scan QR Code
                </Text>}
            />
            
          );
  }
            
  const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
