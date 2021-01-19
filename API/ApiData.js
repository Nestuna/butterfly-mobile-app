const url = 'http://172.18.0.3:8000/api/'

export async function getConversation(access_id) {
   const response = await fetch(url + `conversation/?access_id=${access_id}`, {
      method: 'GET',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
   })
   const json = await response.json();
   return json;
}

export async function setConversation(form) {
    const response = await fetch(url + "conversation/", {
       method: 'POST',
       headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    })
    const text = await response.text();
    return text;
}

export async function getMessagesFromApi(access_id) {
   const response = await fetch(url + "conversation/message/?access_id=" + access_id, {
      method: 'GET',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
   })
   const json = await response.json();
   return json;
}

export async function postMessageToApi(form) {
   const response = await fetch(url + "conversation/message/", {
      method: 'POST',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
   })
   const text = await response.text();
   return text;
}
