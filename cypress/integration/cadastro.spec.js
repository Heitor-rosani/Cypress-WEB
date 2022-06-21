import SignupPage from '../pages/SignupPage'

describe('CADASTRO', ()=>{
    it('Cadasrar deliver',()=>{

        var deliver = {
            personal_name: 'Heitor Rosani',
            cpf: '12345678910',
            email: 'heitor@email.com',
            whats: '11988776655',
            zipcode: '08725640',
            number: '84',
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg',
            address: {
                addres_name: 'Rua Alzira Elizabete Unello',
                neighborhood: 'Jardim Rubi',
                city: 'Mogi das Cruzes/SP'
            }
        }

        var signup = new SignupPage();

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(message)
        
    })
    it('CPF incorreto',()=>{

        var deliver = {
            personal_name: 'Heitor Rosani',
            cpf: '123456789AA',
            email: 'heitor@email.com',
            whats: '11988776655',
            zipcode: '08725640',
            number: '84',
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg',
            address: {
                addres_name: 'Rua Alzira Elizabete Unello',
                neighborhood: 'Jardim Rubi',
                city: 'Mogi das Cruzes/SP'
            }
        }

        var signup = new SignupPage();

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

    })
})