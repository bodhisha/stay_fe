import img2 from "./images/room-11.jpeg";

export default [
    {
        sys:{
            id:"h1"
        },
        fields:{
            name:"hotel1",
            location:"kochi",
            slugh:"fh",
            images: [
                {
                  fields: {
                    file: {
                      url: img2
                    }
                  }
                }]
        }

    },



    {
      sys:{
          id:"h2"
      },
      fields:{
          name:"hotel2",
          location:"kochi",
          slugh:"fh",
          images: [
              {
                fields: {
                  file: {
                    url: img2
                  }
                }
              }]
      }

  }
]