/// <reference types="cypress" />
import mainP from './Pages/Fr0ntierPage';


describe('First tests', () => {

  it('should be able to search for NFT', () => {
    cy.visit('/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8')
    cy.wait(2000)
    mainP.NFTThumbnail1().should('exist') //the thumbnail should exist before the search
    mainP.searchBar().type('1234')/////search 1234, which doesnt match the thumbnail
    mainP.NFTThumbnail1().should('not.exist')//thumbnail should no longer exist
    mainP.searchBar().clear().type('NFT')//searching for the actual thumbnail
    mainP.NFTThumbnail1().should('exist')///the thumbnail should exist as it matches the search keyword
  })

  it('user should be asked to log in when visiting the dashboard without being logged in', () => {
    mainP.Dashboard().click()   /////click on dashboard
    cy.wait(2000)
    mainP.LoginHeader().should('have.text', 'Please enter your email to login')    ///verify that user is asked to log in
  })

  it('user should be asked to log in when visiting the chat tab without being logged in', () => {
    mainP.Chats().click()   /////click on chat
    cy.wait(2000)
    mainP.LoginHeader().should('have.text', 'Please enter your email to login')    ///verify that user is asked to log in
  })

  it('user should be able to visitr the settings page', () => {
    mainP.Settings().click()   /////click on settings
    cy.wait(4000)
    mainP.Choosenet().should('contains.text', 'Choose networks')    ///verify that the user can see the chose networks text
  })

  it('user should be able to set network to Ropsten', () => {
    mainP.Dropdown().select('Ropsten')         ////selecting Ropsten
    mainP.Savebtn().click()  ////clicking the save button
    mainP.network().should ('have.text', 'ropsten')  ////verifying the saved network                
  })
 
  it('user should be able to set network to Mainnet', () => {
    mainP.Settings().click()                  //navigating back to settings
    mainP.Dropdown().select('Mainnet')        /// selecting mainnet
    mainP.Savebtn().click()                     ////clicking the save button
    mainP.network().should ('have.text', 'mainnet')  ////verifying the saved network
  })

  it('user should be able to set network to Goerli', () => {
    mainP.Settings().click()                  /////navigating back to settings
    mainP.Dropdown().select('Goerli')         /////Goerli
    mainP.Savebtn().click()                     ////clicking the save button
    mainP.network().should ('have.text', 'goerli')  ////verifying the saved network
  })


  it('user should be able to initiate log in with valid email format', () => {
    mainP.Dashboard().click()                  /////navigating back to dashboard
    cy.wait(4000)
    mainP.email().type('ntierf@gmail.com')           ///typing email address
    mainP.loginbtn().click()                       ///clicking log in
    mainP.confirmemail().should('exist')            ////verifying that the check email pop up appears
  })

 
  
})


