describe('Navegacion', { browser: 'chrome' }, () => {

    it('login', async () => {

        // Ingresa a la pagina de login
        await cy.visit('http://localhost:8000/login')

        // Ingresa las credenciales
        await cy.get("input[placeholder='Usuario']").type("SPIRAMIDE")
        await cy.get("input[placeholder='Clave']").type("")
        await cy.contains("button", "Entrar").click()
        
        // await cy.get('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-2mufxs').click()
        await cy.contains("button", "Aceptar").click()

        await cy.contains("div", "Cotizar y Emitir").click()
        await cy.contains("button", "Accidentes Personales").click()

        await cy.get("input[name='p_ages_titu']").type("29")
        await cy.get("form > :nth-child(2)").click()
        await cy.contains("li", "Abogado").click()
        await cy.contains("button", "Cotizar").click()
        await cy.contains("button", "Comprar").click()
        await cy.get('[value="Anual"]').click()

        await cy.get('[inputmode="numeric"]').type("24862125")

        await cy.get('.css-1i2rx6l-MuiGrid-root > .MuiGrid-root > .css-1cb6u3t > .MuiCardContent-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(1)').click()
        await cy.contains("li", "Venezolano").click()
        await cy.contains("button", "Buscar").click()

        await cy.get('.PrivateSwitchBase-input').click()
        await cy.contains("button", "Siguiente").click()
    })

})