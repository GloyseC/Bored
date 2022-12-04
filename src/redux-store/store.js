import { legacy_createStore as createStore} from 'redux'

//action

const loginUser = (user) => {
    return {
      user: user,
      type:"LOGIN"
    }
  }
  
//reducer

const login = (loggedUser=null, action) => {

    switch (action.type){

        case "LOGIN": {

            loggedUser = action.user;

            return loggedUser;

        }
    }
}

let store = createStore(login)

store.subscribe(() => console.log(store.getState()));


//dispatch

export {store, loginUser} 