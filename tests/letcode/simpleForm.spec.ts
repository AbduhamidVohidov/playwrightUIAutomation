import { SimpleForm } from './../../page_object/letcode/Form';
import { Page, test as it, expect } from '@playwright/test'

it.describe('LETCODE QA', async ()=>{
    let page: Page;
    let simpleForm: SimpleForm;

    it.beforeAll(async ({browser})=>{
        page = await browser. newPage();
        simpleForm = new SimpleForm(page);

        await page.goto('https://letcode.in/forms')
    })
    
    it('first name field', async ()=>{
        await simpleForm.firstNameField()
    })
    it('last name field', async ()=>{
        await simpleForm.lastNameField()
    })
    it('email field', async ()=> {
        await simpleForm.emailField()
    })
    it('country code drop down', async ()=> {
        await simpleForm.countryCodeDropDown()
    })
    it('phone number', async ()=> {
        await simpleForm.phoneNumberField()
    })
    it('address line 1 field', async ()=> {
        await simpleForm.addressLine1Field()
    })
    it('address line 2 field', async ()=> {
        await simpleForm.addressLine2Field()
    })
    it('state field', async ()=> {
        await simpleForm.stateField()
    })
    it('postal code field', async ()=> {
        await simpleForm.postalCodeField()
    })
    it('country drop down field', async ()=> {
        await simpleForm.countryDropDownField()
    })
    it('date of birth field', async ()=> {
        await simpleForm.dateOfBirthField()
    })
    it('terms and conditions checkbox', async ()=> {
        await simpleForm.termsAndConditionsCheckbox()
    })
    it('gender radio button', async ()=> {
        await simpleForm.genderRadioButton()
    })
    it('submit the form', async ()=> {
        await simpleForm.submitTheForm()
    })
    
})
