    
 require('dotenv').config();

    exports.omdb = {
      apikey: process.env.apikey
    }

    exports.seatgeek = {
    client_id: process.env.client_id
}

    exports.spotify = {
        id: process.env.id,
        secret: process.env.secret
    }

