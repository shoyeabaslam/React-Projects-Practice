# 01 - Project [Custom Hooks]

The `useCurrencyCodes` custom hook is designed to provide a list of currency codes for use in applications that require currency-related functionality.
Custom Hooks always help to understand how built-in hooks like `useState`, `useEffects`, and so on work internally. In this project, I have created a custom `useCurrencyCode`
hook to get the data from the API and use it in the project.
This project has some bugs while converting, But the main goal is to demonstrate the custom hooks you can modify the code a little bit so that it can work well.

![Capture](https://github.com/shoyeabaslam/React-Projects-Practice/assets/118368907/c76ce0e6-69ca-4f27-a650-82626a6bcb49)

# 02 - Project [React Routers]

While React is primarily used for building single-page applications (SPAs), you can transform it into a multi-page web application using the React Router library. 
This project serves as a demonstration of how to integrate React Router into your application to enable multiple pages and navigation between them. 
The goal is to show how React Router can be used to create a more traditional, multi-page website structure within a React-based project.
you need the following libraries to work with the react routing

```bash
npm install react-router
```
```bash
npm install react-router-dom
```

### What I have learned
- Routing
- React Loader
- Routing Setup
  
visit [React Router](https://reactrouter.com/en/main) for documentation.


![Capture](https://github.com/shoyeabaslam/React-Projects-Practice/assets/118368907/dc3ef413-bea5-43b1-a9ff-0415ab43581e)


# 03 - Json Server Project
This project demonstrates how to perform CRUD operations using a JSON server. It includes examples of creating, reading, updating, and deleting resources via HTTP requests to a JSON server API.

## Setup
- Install JSON server in your project
- Create a JSON file in your project
- Run the JSON file

Installing:
```bash
npm install  json-server
```
Run the file:
```bash
npx json-server --watch [path of JSON file]
npx json-server --watch src/database/db.json
```

### CRUD OPERATIONS:
GET:[Reading file]
```bash
 fetch('http://localhost:3000/users').then((res)=>res.json())
    .then((data)=>setUserData(data))
    .catch((err)=>console.log(err));
```
POST:[Creating]
```bash
fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify(formData)
      }).then(()=>{
        navigate('/dashboard')
      })
      .catch((e)=>console.log(e))
```
PUT:[Updating]
```bash
fetch(`http://localhost:3000/users/${params.paramId}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      }).then(()=>navigate('/dashboard'))
      .catch((err)=>console.log(err))
```
DELETE[Deleting]
```bash
fetch(`http://localhost:3000/users/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      },
```
![Minimal Modern You Are Enough Quote Desktop Wallpaper](https://github.com/shoyeabaslam/React-Projects-Practice/assets/118368907/10732a3a-0dc6-4fd9-8ab2-e3ec38287006)


# 04 - Project [Theme Changer using Context API]
In this project, we explore the use of React's Context API for global state management. The primary focus is to manage a global theme state, allowing users to toggle between light and dark themes. The global state is managed in a context provider and consumed by various components in the application.

### Features
- Tilt Card Effect using framer motion
- React Icons
- Custom toggle button
### Steps for creating context 
1. Create the context  ```Example: const ContextName = createContext(defaultValue); ```
3. Create context provider ``` <ContextName.Provider value={{}}>{children}</ContextName.Provider> ```
4. Wrap the provider in main.tsx file
5. Use the context ``` const {value} = useContext(ContextName); ```
   
```bash
git clone https://github.com/shoyeabaslam/React-Projects-Practice.git
cd React-Projects-Practice/04-context-api
npm install
```

### Demo
![Capture](https://github.com/shoyeabaslam/React-Projects-Practice/assets/118368907/ecef8afd-49ef-4ae2-8850-234a31497877)


