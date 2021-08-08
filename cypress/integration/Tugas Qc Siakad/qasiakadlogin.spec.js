describe('Cek Login Siakad', () => {



    it('Cek Link Siakad', () => {
         cy.visit("http://siakad.polinema.ac.id/")
         cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });




    it('Mahasiswa memasukkan username valid dan password tidak valid', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710185')
        cy.get('#password').type('1234')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah') 
   });


   it('Mahasiswa memasukkan username tidak valid dan password valid', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username').type('test123')
    cy.get('#password').type('harissofi46')
    cy.get('.btn-success').click()
    cy.contains('Username / Password Salah') 
});


it('Mahasiswa memasukkan username kosong dan password diisi', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username')
    cy.get('#password').type('harissofi46')
    cy.get('.btn-success').click()
   
});


it('Mahasiswa memasukkan username diisi dan password kosong', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username').type('1831710185')
    cy.get('#password')
    cy.get('.btn-success').click()
   
});

 

it('Mahasiswa memasukkan username diisi dan password kosong', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username')
    cy.get('#password')
    cy.get('.btn-success').click()
   
});


it('Mahasiswa memasukkan username valid dan password valid', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username').type('1831710185')
    cy.get('#password').type('harissofi46')
    cy.get('.btn-success').click()
   
});

it('Mahsiswa mengecek tombol tampilkan password', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#forget-password').click()
    cy.url().should('eq', 'https://helpakademik.polinema.ac.id/ajukan-pertanyaan')
    
   
});

});