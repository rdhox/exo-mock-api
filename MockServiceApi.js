// Créer des mock pour les endpoints suivant:

/*
  @endpoint: /login
  @method: POST
  @params: { email: <text>, password:<text> }
  @response: { success: <boolean>, user: {name: <text>, avatar_url:<string>} }
*/

/*
  @endpoint: /sendMessage
  @method: POST
  @params: { text: <text>, timestamp:<number>, recipient_id:<number> }
  @response: { success: <boolean>, delivered: <boolean>} }
*/

/*
  @endpoint: /newMessage
  @method: GET
  @params: {}
  @response: { success: <boolean>, from: <number>} }
*/

/*
  @endpoint: /loadNewMessages
  @method: POST
  @params: { id_new_messages: <number> }
  @response: { success: <boolean>, {nb_message: <number>, messages: [{timestamp:<number>, body:<text> }] }} }
*/
