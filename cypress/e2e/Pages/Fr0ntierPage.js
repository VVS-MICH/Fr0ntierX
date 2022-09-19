class mainP {

    searchBar(){
        return  cy.get('.w-full',).eq(2)
    }
    NFTThumbnail1(){
        return cy.get('.h-48')
    }
    Dashboard(){
        return  cy.get('.sticky > :nth-child(2) > .flex > :nth-child(1)')
    }
    NFTs(){     
        return  cy.get('.sticky > :nth-child(2) > .flex > :nth-child(2)')
    }
    Chats(){     
        return  cy.get('.sticky > :nth-child(2) > .flex > :nth-child(5)')
    }
    Settings(){     
        return  cy.get('.sticky > :nth-child(2) > .flex > :nth-child(6)')
    }
    LoginHeader(){ 
        return cy.get('.text-center')
    }
    Choosenet(){ 
        return cy.get('label').first()
    }
    Dropdown(){ 
        return cy.get('.mx-5')
    }
    Savebtn(){ 
        return cy.get('.py-2')
    }
    network(){ 
        return cy.get('.sticky > p')
    }
    email(){ 
        return cy.get('#email')
    }
    loginbtn(){ 
        return cy.get('.py-2')
    }
    confirmemail(){ 
        return cy.get('.bg-blue-200')
    }
    


    }


export default new mainP