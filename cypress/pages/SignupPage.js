class SignupPage {
    go() {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        cy.get('input[name="name"]').type(deliver.personal_name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whats)
        cy.get('input[name="postalcode"]').type(deliver.zipcode)

        cy.get("input[value='Buscar CEP']").click()

        cy.get("input[name='address']").should('have.value', deliver.address.addres_name)
        cy.get("input[name='district']").should('have.value', deliver.address.neighborhood)
        cy.get("input[name='city-uf']").should('have.value', deliver.address.city)

        cy.get('input[name="address-number"]').type(deliver.number)

        cy.contains('.delivery-method li', deliver.deliver_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(message){
        cy.get('div[class="swal2-html-container"]').should('have.text', message)
    }
}

export default SignupPage;