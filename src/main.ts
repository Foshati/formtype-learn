import { v4 as uuidv4 } from 'uuid';

type ItemProps={
  id:string
  name:string
  email:string
}

const name=document.querySelector<HTMLInputElement>("#name")
const email =document.querySelector<HTMLInputElement>("#email")
const userForm=document.querySelector<HTMLFormElement>("#userForm")
const userList =document.querySelector<HTMLDivElement>("#userList")
// const errorDiv = document.querySelector<HTMLDivElement>("#error")


userForm?.addEventListener('submit', (e)=>{
  e.preventDefault()

  // if (name?.value === undefined || email?.value === undefined) return
  // if (!name?.value.trim() || !email?.value.trim()) {
  //   errorDiv!.textContent = "Name and email cannot be empty."
  //   return
  // } else {
  //   errorDiv!.textContent = ""
  // }

    if (!name?.value.trim() || !email?.value.trim()) return  /* undefined */



  const userItem:ItemProps={
    id:uuidv4(),
    name:name?.value,
    email:email?.value,
  }

  console.log(userItem)

  addUser(userItem)
    // Reset form fields
    name.value = ''
    email.value = ''

})


function addUser (item:ItemProps){
  const container= document.createElement("div")
  const idElement= document.createElement("p")
  const nameElement= document.createElement("p")
  const emailElement= document.createElement("p")

idElement.append(item.id)   /* idElement.textContent = item.id */
nameElement.append(item.name)
emailElement.append(item.email)





container.append(idElement,nameElement,emailElement)
userList?.append(container)

}
