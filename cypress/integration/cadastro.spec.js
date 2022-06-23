import signup from '../pages/SignupPage'
import deliverFactory from '../fixtures/Factories/deliverFactory'
import SignupPage from '../pages/SignupPage'

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

    context('Campos obrigatorios', function(){

        const message = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'zipCode', output: 'É necessário informar o CEP'},
            {field: 'address', output: 'É necessário informar o número do endereço'},
            {field: 'deliver_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        message.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertWithCssText(msg.output)
            })
        })
    })
})