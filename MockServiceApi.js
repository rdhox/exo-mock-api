// Créer des mock pour les endpoints suivant:


function fetch(url, params) {
  switch (url) {
    case '/login':
      return login(params)
      break;
    case '/sendMessage':
      return sendMessage(params)
      break;
    case '/newMessage':
      return newMessage(params)
      break;
    case '/loadNewMessages':
      return loadNewMessages(params)
      break;
    default:
      break;
  }
}

/*
  @endpoint: /login
  @method: POST
  @params: { email: <text>, password:<text> }
  @response: { success: <boolean>, user: {name: <text>, avatar_url:<string>} }
*/
function login(params) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      const data = {
        success: true,
        user: {
          name: 'TOTO',
          avatar_url: 'blabla.jpg'
        }
      };
      resolve(data);
    }, 1000);
  })
};

/*
  @endpoint: /sendMessage
  @method: POST
  @params: { text: <text>, timestamp:<number>, recipient_id:<number> }
  @response: { success: <boolean>, delivered: <boolean>} }
*/

function sendMessage(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        success: true,
        delivered: false
      };
      resolve(data);
    }, 500);
  })
}

/*
  @endpoint: /newMessage
  @method: GET
  @params: {}
  @response: { success: <boolean>, from: <number>} }
*/
function newMessage(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        success: true,
        from: 1234566
      }
      resolve(data);
    }, 200);
  });
}

/*
  @endpoint: /loadNewMessages
  @method: POST
  @params: { id_new_messages: <number> }
  @response: { success: <boolean>, nb_message: <number>, messages: [{timestamp:<number>, body:<text> }] } }
*/
function loadNewMessages(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        success: true,
        nb_message: 2,
        messages: [
          {
            timestamp: 134568754323,
            body: "Yo, comment ça va?"
          },
          {
            timestamp: 134568754337,
            body: "Moi ça va."
          },
        ]
      };
      resolve(data);
    }, 200);
  })
}

module.exports = {
  fetch,
}