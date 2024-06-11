import { Page, expect } from "@playwright/test";
export class SimpleForm {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }



    get firstNameInput(){
        return '[id="firstname"]'
    }

    get lastNameInput(){
        return '[id="lastname"]'
    }
    get emailInput(){
        return '[id="email"]'
    }
    get countryDropDown(){
        return '[class="select"]'
    }
    get phoneNumberInput(){
        return '[id="Phno"]'
    }
    get addressLine1Input(){
        return '[id="Addl1"]'
    }
    get addressLine2Input(){
        return '[id="Addl2"]'
    }
    get stateInput(){
        return '[id="state"]'
    }get postalCodeInput(){
        return '[id="postalcode"]'
    }
    get dateOfBirthInput(){
        return '[id="Date"]'
    }
    get termsAndCondCheckbox(){
        return '[type="checkbox"]'
    }
    get genderButton(){
        return '[id="female"]'
    }
    get submitButton(){
        return '[class="button is-primary"]'
    }


    
    public async connection(){
        await this.page.goto('https://letcode.in/forms')
    }

    public async firstNameField(){
        await this.page.locator(this.firstNameInput).fill('Abduhamid')
    }

    public async lastNameField(){
        await this.page.locator(this.lastNameInput).type('Vohidov')
    }

    public async emailField(){
        await this.page.locator(this.emailInput).clear()
        await this.page.locator(this.emailInput).fill('test@gmail.com')
    }

    public async countryCodeDropDown(){
        await this.page.locator(this.countryDropDown).nth(0).click()
        await this.page.locator(this.countryDropDown).nth(0).locator('select').selectOption({value: '213'})
    }
    

    public async phoneNumberField(){
        await this.page.locator(this.phoneNumberInput).fill('2679948566')
    }
    public async addressLine1Field(){
        await this.page.locator(this.addressLine1Input).fill('1865 Welsh')
    }

    public async addressLine2Field(){
        await this.page.locator(this.addressLine2Input).fill('Nester')
    }
    public async stateField(){
        await this.page.locator(this.stateInput).fill('PA')
    }
    public async postalCodeField(){
        await this.page.locator(this.postalCodeInput).fill('19115')
    }

    public async countryDropDownField(){
        await this.page.locator(this.countryDropDown).nth(1).click()
        await this.page.locator(this.countryDropDown).nth(1).locator('select').selectOption({ value:'United States'})
    }


    public async dateOfBirthField(){
        await this.page.locator(this.dateOfBirthInput).click()
        await this.page.locator(this.dateOfBirthInput).pressSequentially('03131993')
    }

    public async termsAndConditionsCheckbox(){
        await this.page.locator(this.termsAndCondCheckbox).check()
    }
    public async genderRadioButton(){
        await this.page.locator(this.genderButton).check()
    }
    public async submitTheForm(){
        await this.page.locator(this.submitButton).click()
        // await this.page.pause()
    }




}

function random(arg0: number, arg1: number) {
    throw new Error("Function not implemented.");
}
