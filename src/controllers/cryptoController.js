const axios = require("axios");
const cryptoModel = require("../models/cryptoModel");

const getTopCryptoCoins = async function (req, res) {
    try {
      //better to use for..of here
      var options = {
        method: "get",
        url: "https://api.coincap.io/v2/assets",
        headers: {
          Authorization: "Bearer d5044a39-7cab-47f1-addb-57802dd68a8d",
        },
      };
  
      let response = await axios(options);
  
      let coins = response.data.data;
  
      //   the above API gives back data for exactly 100 coins
      for (i = 0; i < coins.length; i++) {
        let coin = {
          symbol: coins[i].symbol,
          name: coins[i].name,
          marketCapUsd: coins[i].marketCapUsd,
          priceUsd: coins[i].priceUsd
        };
  
        await cryptoModel.findOneAndUpdate({ symbol: coins[i].symbol }, coin, { upsert: true, new: true } );
      }
  
      // Here, We are sorting the coins in descending order of %change in last 24 hours ( you can also do ascending order). You can read up on stackoverflow on how to sort an array of objects based on a particular property or key
      // sort funciton sorts the array in place i.e. it performs the sorting operation and replaces the original array
      coins.sort( function (a, b) { return b.changePercent24Hr - a.changePercent24Hr; });
  
      res.status(200).send({ status: true, data: coins });
  
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: false, msg: "server error" });
    }
  };
  
  module.exports.getTopCryptoCoins = getTopCryptoCoins;