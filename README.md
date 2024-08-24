# CodingTask2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

# Introduction
This repo contains a simple angular / ngrx project. The project consists of:
* Components - 
    The main structural elements of the app, this includes "Smart" components that interact with the store, and "Dumb" componenets that are only aware of their inputs and outputs.
* Dialogs - 
    Special componenets that make use of the Mat Dialog CDK, these are used for "User Input" effects.
* Models - 
    Define the shape of the data the app uses. (In our main codebase, this is where we would define out Zod schemas, for simplicity here we have just provided a simple type)
* Services - 
    The services are where we orchestrate interacting with the back end to perform CRUD operations, in this example we have provided some mock data and functions.
    This is also where we provide functions that launch the dialogs.
* State -
    The state folder contains the NGRX componenets for managing state.

In our main code base, you would expect to find this architecture replicated within each feature module that makes up the app. For simplicity here, we have included everything inside the app module.

# Your Mission
1. In the mock service, we have introduced an exaggerated delay when loading the contact list to simulate loading a larger data set into state. Extend the component, with the help of angular directives, to show a loading message when the contact list is empty.
2. We have the functionality to edit existing contacts, now add an "Add Contact" button to the contact list with the appropriate actions and effects. You should be able to re-use the contact-edit-dialog.
3. The effects deal with external interactions, as such there is no guarantee that they won't recieve an error response. How could we handle the case where a service function throws an error? You don't need to write any code for this one just, explain what you would change/add, optionally include an example snippet. (hint: rxjs provides an operator for this)
4. We have provided a Role type in the contact.model.ts file, assume a contact can be associated with one or many projects, and can have a different role on each. Explain with the help of diagrams what the interface for managing a contact's roles might look like and list the steps you would take to implement that feature. No code is required for this question, you can choose how you present this, either include it as a PDF in your repo, or provide a public link to a SAAS such as figma or whimsical.

# Answers

1. === Optionally provide any notes relating to question 1 here. ===
- Firstly i created a custome angular directive to conditionaly manage and display a spinner or content based on the loading state. I managed it this way to make the component reusable which can be used for many pages in the future
- I used the *ngIf directive in the component to show either the spinner or contact list depending if data has loaded or not
- I then did basic and simple styling to make it more presentable

2. === Optionally provide any notes relating to question 2 here. ===
- I first implemented functionality to add and edit contacts using a dialog.
- I then created a button to trigger adding a new contact in the contact list.
- I updated the reducer logic and Ensured contacts are properly added or updated in the state.
- Lastly I handled new contacts by assigning a unique ID and adding them to the contact list.

3. === Provide your answer to question 3 here. === 
- As mentioned in our phone call i do not have experience with RXJS but with some limited research i can draw a more holistic approach however wont be as detailed compared to someone with rxjs knowledge

When handling cases where a service function might throw an error, especially in the context of external interactions (like API calls), We must ensure that our frontend application can handle these gracefully

There are multiple ways to help and handle this which include a very short list i came up with on the spot
- Implement fallback mechanisms where feasible. For example, if an API call fails, you might have a cached response or an alternative service to fall back on.
- Implement logging and monitoring to capture and track errors. This will help in diagnosing issues and improving the reliability of your service.
- We can design the application to handle errors gracefully. This means informing the user that something went wrong and possibly providing options to retry in certain ways.

or to more explicelty answe the question we can use rxjs.
- If we are using RxJS, you can utilize operators like catchError to handle errors in a stream. This operator allows you to catch errors and provide an alternative observable or handle the error in a way that prevents the entire stream from failing.

Again i havent used the package and im not sure how it is particularly used and utilised but from limited research i understand that The catchError operator is used to handle errors that occur in an observable stream. 

It allows intercepteption and management of errors, providing a way to recover from them or handle them gracefully without terminating the observable stream.

4. === Provide your link or location of your file within the repo here. ===
Email me if you cannot access the link!
https://www.figma.com/board/5K1i42ElsyNdWFJ4g00Y1K/Untitled?node-id=0-1&t=znAG142vgUqA2ujA-1

