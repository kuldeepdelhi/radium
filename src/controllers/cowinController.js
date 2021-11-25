const axios = require("axios");

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

const getByPin = async function (req, res){

    try{ 

        let pin= req.query.pincode
        let date= req.query.date

        let options = {
          method : "get",
          url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let response= await axios(options)
        


        let centers= response.data
        console.log(centers)
        res.status(200).send( {msg: "Success", data: centers} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


const getOtp = async function (req, res){

    try{ 

         let options = {
          method : "post", // method has to be post
          url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        let response= await axios(options)

        let id= response.data
        res.status(200).send( {msg: "Success", data: id} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}
const londonWheather = async function (req, res){

  try{ 

      var city= req.query.city
      var appid= req.query.appid

      let options = {
        method : "get",
        url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      }
      let response= await axios(options)
      console.log(response)
      


      let centers= response.data
      console.log(centers)
      res.status(200).send( {msg: "Success", data: centers} )

  }
  catch(err) {
      console.log(err.message)
      res.status(500).send( { msg: "Something went wrong" } )
  }
}
const londonTemprature = async function (req, res) {
  try {
      let city = req.query.city
      let appid = req.query.appid
      console.log(city)
      console.log(appid)
      let options = {
          method: "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      }
      let londonData = await axios(options)
      console.log(londonData)
      let result = londonData.data.main.temp
      res.status(200).send({ msg: "Successfully fetched data", tempratureoflondon: result })
  } catch (error) {
      res.status(500).send({ msg: "Some error occured" })
  }
}
const sortedTemp = async function (req, res) {
  try {
      let id = req.query.appid
      let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
      let cityTemp = []
      for (let i = 0; i < city.length; i++) {
          //    let weather =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`)
          let options = {
              method: "get",
              url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`
          }
          let weather = await axios(options)

          cityTemp.push({ city: city[i], temp: weather.data.main.temp })
      }
      const result = cityTemp.sort((a, b) => a.temp - b.temp)

      res.status(200).send({ msg: result })

  } catch (error) {
      res.status(500).send({ msg: "Some error occured", error: error })
  }
}




module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.londonWheather = londonWheather
module.exports.londonTemprature = londonTemprature
module.exports.sortedTemp = sortedTemp
