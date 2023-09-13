import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutPage"
import { navigateTo, NavigationPage } from "../support/page_objects/navigatetionPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', ( ) =>{

    beforeEach('open application', () =>{
        cy.visit('/')
    })

    it('verify navigations across the pages', () =>{
        navigateTo.formLayoutPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendaar', () => {
        navigateTo.formLayoutPage()
        onFormLayoutPage.submitInlineFormWithNameAndEmail('Katya', 'test@test.com')
        onFormLayoutPage.submitBasicFormWithNameAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFormToday(1)
        onDatepickerPage.selectDayPickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Katya', 'Laso')
        onSmartTablePage.updateAgeByFirstName('Katya', '38')
        onSmartTablePage.deleteRowByindex(1)
        
    })

})