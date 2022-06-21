import signup from '../pages/SignupPage'
import deliverFactory from '../fixtures/Factories/deliverFactory'

describe('CADASTRO', ()=>{

    it('Cadasrar deliver',function(){

        var deliver = deliverFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(message)
        
    })
    it('CPF incorreto',function(){

        var deliver = deliverFactory.deliver()
        deliver.cpf = '12345678AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! CPF inválido')
    })

    it('Email incorreto',function(){

        var deliver = deliverFactory.deliver()
        deliver.email = 'heitor.email.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! Email com formato inválido.')

    })
})