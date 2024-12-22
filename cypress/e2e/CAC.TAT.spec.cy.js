
describe('Central de Atendimento ao Cliente TAT' , function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencha os campos obrigatórios e envia o formulário', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
  ///Teste feito com texto longo e diminuindo seu tempo de execução com a função 'delay' ///
  it('Preencha os campos obrigatórios e envia o formulário', function() {
    const LongText = 'teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,teste, teste, teste, teste,'
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live.com')
    cy.get('#open-text-area').type(LongText, {delay: 0})
    cy.get('button[type="submit"]').click()    
    cy.get('.success').should('be.visible')
  })
  
  it('Exibe mensagem de erro ao submeter o formulário com um email com formato errado', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })  

  it('campo telefone continua vazio quando preechido com valor não-numérico ', function() {
    
    cy.get('#phone')
      .type('abcdefgh')
      .should('have.value', '')
  }) 
  it('telefone se torna obrigatório mas não é preeenchido antes do envio do formulário ', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })  
  
  it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.get('#firstName')
    .type('André')
    .should('have.value', 'André')
    .clear()
    .should('have.value', '')
    cy.get('#lastName')
    .type('Ramos')
    .should('have.value', 'Ramos')
    .clear()
    .should('have.value', '')
    cy.get('#email')
    .type('andrevcramos@live.com')
    .should('have.value', 'andrevcramos@live.com')
    .clear()
    .should('have.value', '')
    cy.get('#phone')
    .type('1234567890')
    .should('have.value', '1234567890')
    .clear()
    .should('have.value', '')
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  
  })

  ///Utilizamos outra forma de selecionar e clicar em um botão com o comando 'cy.contains'.
  it('Exibe mensagem de erro ao submeter o formulário com um email com formato errado', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live,com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })  

  it('selecione um produto (YouTube) por seu texto', function() {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
    
  })

  it('selecione um produto (Mentoria) por seu valor', function() {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
    
  })  

  it('seleciona um produto (Blog) por seu índice', function() {
    cy.get('#product')
    .select(1)
    .should('have.value' , 'blog')

  })

  it('marca o tipo de atendimento "Feedback" ', function() {
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', 'feedback')
      
  })

  it('marca cada tipo de atendimento', function() {
      cy.get('input[type="radio"]') 
      .should('have.length', 3)
      .each(function($radio) {
        cy.wrap($radio).check() 
        cy.wrap($radio).should('be.checked')
      })
  }) 
  
  it('marca ambos checkboxes, depois desmarca o último', function() {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')   
    
  })
///Exercício de revisão ulilizando o comando '.check()' ou invéz de '.click()'.
  it('telefone se torna obrigatório mas não é preeenchido antes do envio do formulário ', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('andrevcramos@live.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })  

  it('selecione um arquivo da pasta fixtures',function() {
    cy.get('input[type="file"]#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input) {
     ///foi utilizado o comando console.log($input) onde navegamos pelo objeto e assim obtivemos as informações de '$input[0].files[0].name'./// 
      console.log($input)
     expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('selecione um arquivo simulando um drag-and-drop', function() {
    cy.get('input[type="file"]#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(function($input) {
      expect($input[0].files[0].name).to.equal('example.json')
     })
  })
///
  it('selecione um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json') 
      })

  })
///Foi utilizado aqui um comando novo chamado atributos(attribute - "attr")
  it('verifica que a política de privacidade abre um outra aba sem a necessidade de um clique', function() {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })

  it('acessa a página de política de privacidade removendo o target e então clicando no link', function() {
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('Talking About Testing').should('be.visible')
  })

  it('testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')
  
    cy.contains('Talking About Testing').should('be.visible')
  })
  


})