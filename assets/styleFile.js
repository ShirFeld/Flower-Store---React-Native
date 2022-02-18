import { StyleSheet } from 'react-native';

export const MYSTYLE = {

  // FLOWER
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "column",
    padding: 15,
    justifyContent: "space-around",

  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    margin: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    //backgroundColor : "bgBrightBlue",
    alignItems: "center",
    borderRadius: 28,
    justifyContent: "center",
    height: 50,
    width: 150,
    // margin : 30,
    backgroundColor: "#4bbeb1",
    marginTop: 30,
    marginBottom: 40,
    alignSelf: "center"
  },

  button2: {
    //backgroundColor : "bgBrightBlue",
    // alignItems: "center",
    borderRadius: 40,
    // justifyContent: "center",
    height: 50,
    width: 160,
    textAlign: "center",
    backgroundColor: "#37a793",
    marginTop: 40,


  },


  button3: {
    // alignItems: "center",
    borderRadius: 33,
    // justifyContent: "center",
    width: "25%",
    textAlign: "center",
    backgroundColor: "#9bee85",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#37a793"

  },

  // INNER CATEGORY
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // CATEGORY GRID
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    height: 150,
  },
  gridItem2: {
    // flex: 1,
    margin: 8,
    height: 100,
    width: 230,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 125,
    overflow: 'hidden',
    elevation: 5
  },

  // 2. Add style to container:
  container3: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android - to see the shadow
    alignItems: "center",

  },

  image2: {
    marginTop: 12,
    height: "100%",
    width: "100%",
    flex: 1,
    // borderRadius: 250,


  },
  // 3. Add style to title:
  title3: {
    fontFamily: "font1",
    fontSize: 18,
    margin: 10,

  },
  title12: {
    textAlign: 'center',
    fontFamily: "font3",
    fontSize: 26,
    margin: 10,
    color: "#37a793",
    textDecorationLine: 'underline',
    marginTop: 15
  },

  view1: {
    backgroundColor: "#b5f1d0"
  },

  title13: {
    fontFamily: "font3",
    fontSize: 24,
    margin: 10,
    color: "#4bbeb1",
    textDecorationLine: 'underline',

  },

  title14: {
    fontFamily: "font3",
    fontSize: 36,
    margin: 10,
    color: "#4bbeb1",
    // textDecorationLine: 'underline',
    textAlign: "center",
  },
  // FLOWER ITEM
  flowerItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 15
  },
  flowerRow: {
    flexDirection: "row",
  },

  flowerHeader: {
    height: "85%",
  },
  flowerDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  // ADD: must set wdth and height -> it is from the web.
  bgImage: {
    width: 400,
    height: 250,
    // justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center"

  },
  titleContainer: {

    height: 100,
    justifyContent: "center"


  },
  text4: {

    color: "white",
    fontFamily: "font2",
    fontSize: 40,
    textAlign: "center"
  },

  text1: {

    color: "white",
    fontSize: 18,
    textAlign: "center",
    // fontFamily: "font3",

  },

  text21: {
    fontFamily: "font3",
    fontSize: 21,
    marginLeft: 12,
    marginBottom: 10,
    color: "#e42727",
  },

  // Text input
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputtokef1: {
    height: 40,
    marginLeft: 15,
    width: 65,
    borderWidth: 1,
    padding: 10,
  },
  inputtokef2: {
    height: 40,
    marginLeft: 0,
    width: 65,
    borderWidth: 1,
    padding: 10,
  },
  row5: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 36,
  },
  textField: {
    flex: 1,
    marginTop: 24,
  },
  chartImg: {
    marginRight: -60,
    height: 45,
    width: 45,
  },
  chartCounter: {
    borderColor: "red",
    marginRight: 45,
    height: 25,
    width: 25,
    backgroundColor: "red",
    color: "black",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 15,
    fontWeight: 'bold'

  },
  fsize: {
    fontSize: 15,

  },
  fsizeb: {
    fontSize: 15,
    // fontWeight:'bold'
  },
  lastPage: {
    backgroundColor: "#4bbeb1",
    borderRadius: 90,
    margin: 40,
    color: "black"

  },
  title14: {
    fontFamily: "font3",
    fontSize: 36,
    margin: 10,
    color: "#4bbeb1",
    // textDecorationLine: 'underline',
    textAlign: "center",
  },

}

const myStyles = { MYSTYLE };

export default myStyles;

