const url = 'http://172.18.0.3:8000/api/'

export async function setConversation(form) {
    const response = await fetch(url + "conversation/", {
       method: 'POST',
       headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(
          form
       )
    })
    const json = await response.json();
    return json;
 }