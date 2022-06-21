var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {
    deliver: function() {
        var data = {
            personal_name: faker.name.firstName(),
            cpf: cpf.generate(),
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
        return data
    }
}