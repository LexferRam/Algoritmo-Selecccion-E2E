describe('Navegacion', { browser: 'chrome' }, () => {

    it('login', async () => {

        // Ingresa a la pagina de login
        await cy.visit('http://localhost:8000/login')

        // Ingresa las credenciales
        await cy.get("input[placeholder='Usuario']").type("SPIRAMIDE")
        await cy.get("input[placeholder='Clave']").type("Pira360*")
        await cy.contains("button", "Entrar").click()
        
        await cy.get('.css-rsd2ed-MuiSvgIcon-root').click()
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

        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(4) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(5) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(6) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(7) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(8) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get(':nth-child(1) > .css-1cb6u3t > .MuiCardContent-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(9) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()


        await cy.get(':nth-child(16) > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .container-accordion-question > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        await cy.get('.MuiSelect-select').last().click()
        await cy.get('.MuiMenuItem-root').click()
        await cy.get('#mui-component-select-usrTblResp_542_543_24862125').click()
        await cy.get('[data-value="M"]').click()
        await cy.get("input[placeholder='Ingrese descripción']").first().focus()
        await cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(4)').type("1234")
        await cy.get("input[placeholder='Ingrese descripción']").last().focus()
        await cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(5)').type("5678")
    })

})