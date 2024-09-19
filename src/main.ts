import { v4 as uuidv4 } from "uuid";

type ItemProps = {
  id: string;
  name: string;
  email: string;
};

const name = document.querySelector<HTMLInputElement>("#name");
const email = document.querySelector<HTMLInputElement>("#email");
const userForm = document.querySelector<HTMLFormElement>("#userForm");
const userList = document.querySelector<HTMLDivElement>("#userList");

const dataList:ItemProps[]= loadData()
dataList.forEach(addUser)


userForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!name?.value.trim() || !email?.value.trim()) return; /* undefined */

  const userItem: ItemProps = {
    id: uuidv4(),
    name: name?.value,
    email: email?.value,
  };

  console.log(userItem);

  dataList.push(userItem)

  addUser(userItem);


  saveData()

  name.value = "";
  email.value = "";
});

function addUser(item: ItemProps) {
  const container = document.createElement("div");
  const idElement = document.createElement("p");
  const nameElement = document.createElement("p");
  const emailElement = document.createElement("p");

  idElement.append(item.id); /* idElement.textContent = item.id */
  nameElement.append(item.name);
  emailElement.append(item.email);

  container.append(idElement, nameElement, emailElement);
  userList?.append(container);
}



function saveData(){

localStorage.setItem("items", JSON.stringify(dataList))
}

function loadData(){
  const data=localStorage.getItem("items")
  if (data == null) return []

return JSON.parse(data)
}