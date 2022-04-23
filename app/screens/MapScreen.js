function MapScreen(){
    var markers = [
        {
          latitude: 45.65,
          longitude: -78.90,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ];

    return(

        <Screen style={styles.screen}>
            <MapView
            region={""}
            annotations={markers}
            />
      </Screen>
    )

}


export default  MapScreen